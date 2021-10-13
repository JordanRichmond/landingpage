import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles ((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appbar: {
        background: 'none',
        fontFamily: 'Nunito',
    },
    colourText: {
        color: "grey",
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: "white",
        fontSize: '2rem',
    },
    goDown: {
        color: "white",
    },
}));
export default function Header() {
    const classes = useStyles();
    const [checked,setChecked] = useState(false);
    useEffect(()=>{
        setChecked(true);
    },[])
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}>
                    Postcard<span className={classes.colourText}>Pals.</span>
                    </h1>
                <IconButton>
                </IconButton>
                </Toolbar>
            </AppBar>

            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}
            collapsedHeight={20}
            >
            <div className={classes.container}>
                <h1 className={classes.title}>
                "Make Postcards Great Again..." <br/> Postcard
                <span className={classes.colourText}>Pals.</span>
                </h1>
                <Scroll to="next-page" smooth={true}>
                <IconButton>
                <KeyboardArrowDownIcon className={classes.goDown}/>
                </IconButton>
                </Scroll>
            </div>
            </Collapse>
        </div>
    )
};