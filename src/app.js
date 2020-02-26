import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MenuList from './menuList';
import Body from './body';
import Footer from './footer';
import firebase from './firebase';
import { getUser } from './actions/user';

const provider = new firebase.auth.GoogleAuthProvider();

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

const style = {
    fontFamily: 'Nanum Gothic'
}

const renderDrawer = (user, logout, classes) => {
    if (user) {
        return (
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} />
                <MenuList user={user} logout={logout} />
            </Drawer>

        )
    }
}

export default function App() {
    const classes = useStyles();

    const [user, setUser] = useState(null);
    const [authError, setAuthError] = useState('');

    const logout = () => {
        setUser(null);
        firebase.auth().signOut();
    }
    const login = () => {
        firebase.auth().signInWithPopup(provider).then(result => {
          const googleUser = result.user;
          // only allow sdhanbit.org user
          if (googleUser.email.endsWith('@sdhanbit.org')) {
            getUser(googleUser.email)
              .then(user => {
                setUser(user);
                setAuthError('');
              });
            
          } else {
            setAuthError('Only users with sdhanbit.org account is allowed.')
            firebase.auth().signOut();
          }
        }).catch(error =>  {
          setAuthError(error.message);
        });
      }


  return (
      <Router>
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} style={{ background: 'linear-gradient(to right, #64b5f6, #e3f2fd)' }}>
            <Toolbar>
            <Typography variant="h6" noWrap style={style}>
                교인정보 관리
            </Typography>
            </Toolbar>
        </AppBar>
        { renderDrawer(user, logout, classes) }
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Body user={user} login={login} authError={authError}/>
                <Footer />
            </main>
        </MuiPickersUtilsProvider>
        </div>
      </Router>
  );
}
