import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { concat } from 'lodash';
import EditableText from '../../../shared/editableText';
import EditableSelect from '../../../shared/editableSelect';
import MemberList from '../../../shared/family/memberList';
import Notes from '../../../shared/notes';

const FamilyDetail = ({ family, saveFamily, user, mokjangLookup, membershipTypes }) => {
    const [ familyState, setFamilyState ] = useState(family);
    const { id, address, mokjang, members, notes = [], membershipStatus } = familyState;

    const handleSaveFamily = async (update) => {
        // Need to return a promise because react-table expect promise from event handlers
        const updatedFamily = await saveFamily(update);
        setFamilyState(updatedFamily);

        return updatedFamily;
    }

    const addMember = async (newData) => {
        return await handleSaveFamily({
            id,
            membershipStatus,
            address,
            mokjang,
            members: concat(members, [newData]),
            notes
        });
    };

    const updateMember = async (newData, oldData) => {
        const index = oldData.tableData.id;
        return await handleSaveFamily({
            id,
            membershipStatus,
            address,
            mokjang,
            members: members.map((member, i) => index === i ? newData : member),
            notes
        })
    }
    const deleteMember = async (oldData) => {
        const index = oldData.tableData.id;
        return await handleSaveFamily({
            id,
            membershipStatus,
            address,
            mokjang,
            members: members.filter((member, i) => index !== i),
            notes
        })
    };

    const addNote = async (newData) => {
        return await handleSaveFamily({
            id,
            membershipStatus,
            address,
            mokjang,
            members,
            notes: concat([newData], notes)
        });
    };

    const updateNote = async (newData, oldData) => {
        const index = oldData.tableData.id;
        return await handleSaveFamily({
            id,
            membershipStatus,
            address,
            mokjang,
            members,
            notes: notes.map((note, i) => index === i ? newData : note)
        })
    }

    const saveAddress = async (newAddress) => {
        return await handleSaveFamily({
            id,
            membershipStatus,
            address: newAddress,
            mokjang,
            members,
            notes
        })
    }

    const saveMokjang = async (newMokjang) => {
        return await handleSaveFamily({
            id,
            membershipStatus,
            address,
            mokjang: newMokjang,
            members,
            notes
        })
    }

    const saveMembershipStatus = async(newMembershipStatus) => {
        return await handleSaveFamily({
            id,
            membershipStatus: newMembershipStatus,
            address,
            mokjang,
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
                <EditableSelect
                    title='멤버십'
                    data={membershipStatus}
                    lookup={membershipTypes}
                    onSave={saveMembershipStatus}
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
