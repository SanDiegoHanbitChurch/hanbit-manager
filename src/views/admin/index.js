import React from 'react';
import Typography from '@material-ui/core/Typography'

const Admin = ({ user }) => (
    <Typography>
        Welcome to Admin, {user.displayName}!
    </Typography>
)

export default Admin;
