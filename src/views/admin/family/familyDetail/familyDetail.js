import React from 'react';
import { concat } from 'lodash';
import EditableText from '../../../shared/editableText';
import EditableSelect from '../../../shared/editableSelect';
import MemberList from '../../../shared/family/memberList';
import Notes from '../../../shared/notes';

const mokjangLookup = [
    { key: '은혜', value: '은혜'}
]

const FamilyDetail = ({ family, saveFamily, user }) => {
    const { id, address, mokjang, members, notes = [] } = family;

    const addMember = (newData) => {
        return saveFamily({
            id,
            address,
            mokjang,
            members: concat(members, [newData]),
            notes
        });
    };

    const updateMember = (newData, oldData) => {
        const index = oldData.tableData.id;
        return saveFamily({
            id,
            address,
            mokjang,
            members: members.map((member, i) => index === i ? newData : member),
            notes
        })
    }
    const deleteMember = (oldData) => {
        const index = oldData.tableData.id;
        return saveFamily({
            id,
            address,
            mokjang,
            members: members.filter((member, i) => index !== i),
            notes
        })
    };

    const addNote = (newData) => {
        return saveFamily({
            id,
            address,
            mokjang,
            members,
            notes: concat([newData], notes)
        });
    };

    const updateNote = (newData, oldData) => {
        const index = oldData.tableData.id;
        return saveFamily({
            id,
            address,
            mokjang,
            members,
            notes: notes.map((note, i) => index === i ? newData : note)
        })
    }

    const saveAddress = (newAddress) => {
        return saveFamily({
            id,
            address: newAddress,
            mokjang,
            members,
            notes
        })
    }

    const saveMokjang = (newMokjang) => {
        return saveFamily({
            id,
            address,
            mokjang: newMokjang,
            members,
            notes
        })
    }

    return (
        <>
            <EditableSelect title='목장' data={mokjang} lookup={mokjangLookup} onSave={saveMokjang} />
            <EditableText title='주소' data={address} onSave={saveAddress} />
            <MemberList
                memberList={members}
                addMember={addMember}
                updateMember={updateMember}
                deleteMember={deleteMember}
            />
            <Notes 
                notes={notes} 
                user={user}
                addNote={addNote}
                updateNote={updateNote}
            />
        </>
    )
}

export default FamilyDetail;
