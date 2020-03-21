import { get, concat } from 'lodash';
import mailDAL from './dataAccess/mail';
import { getAll as fetchFamilyList } from './family';

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

const sendToAllMembers = async ({ email, name, subject, content }) => {
    const memberList = await buildMemberList();
    const mailRequests = memberList
        .filter(member => member.email.trim())
        .map(member => ({
            from: `${name} <${email}>`,
            to: member.email,
            subject,
            content
    }));

    await mailDAL.addMultiple(mailRequests);
}

export {
    sendToAllMembers
}
