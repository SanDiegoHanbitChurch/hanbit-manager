import { get, concat, uniq } from 'lodash';
import mailDAL from './dataAccess/mail';
import { getAll as fetchFamilyList } from './family';

const toBase64 = file => new Promise((resolve, reject) => {
    // @ts-ignore
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

const buildMemberList = () => {
    return new Promise((resolve, reject) => {
        fetchFamilyList()
            .then(familyList => {
                const memberList = familyList.reduce((prev, curr) => {
                    const members = get(curr, 'members', []);
                    prev = concat(prev, members);

                    return prev;
                }, []);
                resolve(memberList);
            })
            .catch(reject);
    })
}

const converFilesToBase64 = async (attachments) => {
    return Promise.all(attachments.map(attachment => toBase64(attachment)));
}

const sendToAllMembers = async ({ email, name, subject, content, attachments }) => {
    const memberList = await buildMemberList();
    const base64s = await converFilesToBase64(attachments);

    const recipients = memberList
        .filter(member => member.email.trim())
        .map(member => member.email);

    await mailDAL.add({
        from: `${name} <${email}>`,
        to: uniq(recipients),
        subject,
        html: content,
        attachments: attachments.map((attachment, index) => ({
            content: base64s[index].split(',')[1],
            filename: attachment.name,
            type: attachment.type,
            disposition: 'attachment',
            contentId: `${attachment.name}${index}`
        }))
    })
}

export {
    sendToAllMembers
}
