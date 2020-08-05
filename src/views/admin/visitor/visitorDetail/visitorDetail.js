import React, { useState } from 'react';
import { Box, Container, Paper, Typography } from '@material-ui/core';
import { concat } from 'lodash';
import { KeyboardDatePicker } from '@material-ui/pickers';
import EditableText from '../../../shared/editableText';
import ServicesRadioGroup from '../../../shared/ServicesRadioGroup';
import MemberList from '../../../shared/family/memberList';
import Notes from '../../../shared/notes';
import Prayers from '../../../shared/prayers'; //Added_Prayer

const VisitorDetail = ({ visitor, saveVisitor, user }) => {
    const [visitorState, setVisitorState] = useState(visitor);
    const { id, visitDate, service, address, members, notes = [], prayers = [] } = visitorState; //Added_Prayer

    const addMember = (newData) => {
        const visitorToSave = {
            id,
            address,
            service,
            visitDate,
            members: concat(members, [newData]),
            notes,
            prayers //Added_Prayer
        }
        setVisitorState(visitorToSave)
        return saveVisitor(visitorToSave);
    };

    const updateMember = (newData, oldData) => {
        const index = oldData.tableData.id;
        const visitorToSave = {
            id,
            address,
            service,
            visitDate,
            members: members.map((member, i) => index === i ? newData : member),
            notes,
            prayers //Added_Prayer
        }
        setVisitorState(visitorToSave)
        return saveVisitor(visitorToSave)
    }
    const deleteMember = (oldData) => {
        const index = oldData.tableData.id;
        const visitorToSave = {
            id,
            address,
            service,
            visitDate,
            members: members.filter((member, i) => index !== i),
            notes,
            prayers //Added_Prayer
        }
        setVisitorState(visitorToSave)
        return saveVisitor(visitorToSave)
    };

    const addNote = (newData) => {
        const visitorToSave = {
            id,
            address,
            service,
            visitDate,
            members,
            notes: concat([newData], notes)
        }
        setVisitorState(visitorToSave)
        return saveVisitor(visitorToSave);
    };

    const updateNote = (newData, oldData) => {
        const index = oldData.tableData.id;
        const visitorToSave = {
            id,
            address,
            service,
            visitDate,
            members,
            notes: notes.map((note, i) => index === i ? newData : note)
        };
        setVisitorState(visitorToSave)
        return saveVisitor(visitorToSave)
    }

    //Added_Prayer
    const addPrayer = (newData) => {
        const visitorToSave = {
            id,
            address,
            service,
            visitDate,
            members,
            notes,
            prayers: concat([newData], prayers) //Added_Prayer
        }
        setVisitorState(visitorToSave)
        return saveVisitor(visitorToSave);
    };

    const updatePrayer = (newData, oldData) => {
        const index = oldData.tableData.id;
        const visitorToSave = {
            id,
            address,
            service,
            visitDate,
            members,
            notes,
            prayers: prayers.map((prayer, i) => index === i ? newData : prayer) //Added_Prayer
        };
        setVisitorState(visitorToSave)
        return saveVisitor(visitorToSave)
    }
    //Added_Prayer

    const saveAddress = (newAddress) => {
        const visitorToSave = {
            id,
            address: newAddress,
            service,
            visitDate,
            members,
            notes,
            prayers //Added_Prayer
        }
        setVisitorState(visitorToSave)
        return saveVisitor(visitorToSave)
    }

    const saveVisitDate = (newVisitDate) => {
        const visitorToSave = {
            id,
            address,
            service,
            visitDate: newVisitDate.toLocaleDateString(),
            members,
            notes,
            prayers //Added_Prayer
        };
        setVisitorState(visitorToSave);
        return saveVisitor(visitorToSave)
    }

    const saveService = (newService) => {
        const visitorToSave = {
            id,
            address,
            service: newService,
            visitDate,
            members,
            notes,
            prayers //Added_Prayer
        };
        setVisitorState(visitorToSave);
        return saveVisitor(visitorToSave)
    }

    return (
        <>
            <Container component={Paper}>
                <Box m={1} display='flex' flexDirection='row' justifyItems='space-between'>
                    <Typography variant='h6'>참석예배/방문일</Typography>
                    <ServicesRadioGroup service={service} setService={saveService} />
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="방문일"
                        value={visitDate}
                        onChange={saveVisitDate}
                    />
                </Box>
            </Container>
            <Box m={1}>
                <EditableText title='주소' data={address} onSave={saveAddress} />
            </Box>
            <Box m={1}>
                <MemberList
                    visitor
                    memberList={members}
                    addMember={addMember}
                    updateMember={updateMember}
                    deleteMember={deleteMember}
                />
            </Box>

            {/* Added_Prayer */}
            <Box m={1}>
                <Prayers 
                    prayers={prayers} 
                    user={user}
                    addPrayer={addPrayer}
                    updatePrayer={updatePrayer}
                />
            </Box>
            {/* Added_Prayer */}

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

export default VisitorDetail;
