import React from 'react';
import Typography from '@material-ui/core/Typography'

const Admin = ({ user }) => (
    <Typography>
        Welcome to Admin, {user.name}!
    </Typography>
)

export default Admin;
