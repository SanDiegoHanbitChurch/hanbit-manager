import React from 'react';

const Home = ({ user }) => (
    <>
        <p>Home</p>
        <p>Welcome, {user.displayName}!</p>
    </>
);

export default Home;
