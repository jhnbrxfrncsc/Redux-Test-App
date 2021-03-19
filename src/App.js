import React from 'react';
import { makeStyles } from '@material-ui/core';
import Deposit from './components/Deposit/Deposit';


const useStyles = makeStyles({
    root: {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
    }
})

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Deposit />
        </div>
    )
}

export default App
