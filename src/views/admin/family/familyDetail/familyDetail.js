import React from 'react';
import { useQuery } from 'react-query';
import { concat } from 'lodash';
import EditableText from '../../../shared/editableText';
import EditableSelect from '../../../shared/editableSelect';
import MemberList from '../../../shared/family/memberList';
import Notes from '../../../shared/notes';
import { getAll as fetchMokjangList } from '../../../../actions/mokjang';
import { CircularProgress, Box } from '@material-ui/core';

const FamilyDetail = ({ family, saveFamily, user }) => {
    let mokjangLookup = [];
    const { status, data } = useQuery('mokjangList', fetchMokjangList);

    if (status === 'success') {
        console.log('data', data)
        mokjangLookup = data.map(({name}) => ({key: name, value: name}));
        console.log(mokjangLookup)
    }

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

    return status === 'loading' 
        ? <CircularProgress /> 
        : (
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
                    user.role !== 'mokja' && 
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
