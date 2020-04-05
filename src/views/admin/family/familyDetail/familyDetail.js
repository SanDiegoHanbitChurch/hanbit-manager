import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { concat } from 'lodash';
import EditableText from '../../../shared/editableText';
import EditableSelect from '../../../shared/editableSelect';
import MemberList from '../../../shared/family/memberList';
import Notes from '../../../shared/notes';

const FamilyDetail = ({ family, saveFamily, user, mokjangLookup }) => {
    const [ familyState, setFamilyState ] = useState(family);
    const { id, address, mokjang, members, notes = [] } = familyState;

    const handleSaveFamily = (update) => {
        // Need to return a promise because react-table expect promise from event handlers
        return new Promise((resolve, reject) => {
            saveFamily(update)
                .then((updatedFamily) => {
                    setFamilyState(updatedFamily)
                    resolve(updatedFamily);
                })
                .catch(reject);
        });
    }

    const addMember = (newData) => {
        return handleSaveFamily({
            id,
            address,
            mokjang,
            members: concat(members, [newData]),
            notes
        });
    };

    const updateMember = (newData, oldData) => {
        const index = oldData.tableData.id;
        return handleSaveFamily({
            id,
            address,
            mokjang,
            members: members.map((member, i) => index === i ? newData : member),
            notes
        })
    }
    const deleteMember = (oldData) => {
        const index = oldData.tableData.id;
        return handleSaveFamily({
            id,
            address,
            mokjang,
            members: members.filter((member, i) => index !== i),
            notes
        })
    };

    const addNote = (newData) => {
        return handleSaveFamily({
            id,
            address,
            mokjang,
            members,
            notes: concat([newData], notes)
        });
    };

    const updateNote = (newData, oldData) => {
        const index = oldData.tableData.id;
        return handleSaveFamily({
            id,
            address,
            mokjang,
            members,
            notes: notes.map((note, i) => index === i ? newData : note)
        })
    }

    const saveAddress = (newAddress) => {
        return handleSaveFamily({
            id,
            address: newAddress,
            mokjang,
            members,
            notes
        })
    }

    const saveMokjang = (newMokjang) => {
        return handleSaveFamily({
            id,
            address,
            mokjang: newMokjang,
            members,
            notes
        })
    }

    return (
        <>
            <Box m={1}>
                <EditableSelect 
                    title='목장' 
                    data={mokjang} 
                    lookup={mokjangLookup} 
                    onSave={saveMokjang} 
                />
            </Box>
            <Box m={1}>
                <EditableText title='주소' data={address} onSave={saveAddress} />
            </Box>
            <Box m={1}>
                <MemberList
                    memberList={members}
                    addMember={addMember}
                    updateMember={updateMember}
                    deleteMember={deleteMember}
                />
            </Box>
            {
                user.role !== '목자' && 
                    <Box m={1}>
                        <Notes 
                            notes={notes} 
                            user={user}
                            addNote={addNote}
                            updateNote={updateNote}
                        />
                    </Box>
            }
        </>
    );
}

export default FamilyDetail;
