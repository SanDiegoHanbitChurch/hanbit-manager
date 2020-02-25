import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './header';
import Body from './body';
import Footer from './footer';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto'
    },
  }));

const App = () => {
    const classes = useStyles();

    const [user, setUser] = useState(null);

    return (
        <Router>
            <Header setUser={setUser} user={user}/>
            <CssBaseline />
            <Container className={classes.main} maxWidth="md">
                <Box m={1}>
                    <Body user={user} setUser={setUser}/>
                </Box>
            </Container>
            <Container className={classes.footer} maxWidth="sm">
                <Footer />
            </Container>
        </Router>
    )
}

export default App;