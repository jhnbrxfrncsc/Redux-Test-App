import React, { useState, useEffect } from 'react';
import { 
    Box, 
    Button, 
    InputAdornment, 
    TextField, 
    Typography 
} from '@material-ui/core';
import useStyles from './depositStyles';
import { useDispatch } from 'react-redux';
import { 
    depositMoney, 
    withdrawMoney, 
    getBalance, 
    collectInterest 
} from '../../redux/actions/actions';


const Deposit = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [data, setData] = useState({
        balance: 0,
        amount: 0,
        deposit: [],
        withdraw: []
    });

    useEffect(() => {
        const newData = dispatch(getBalance);
        console.log(newData);
        setData({
            balance: newData.payload.balance,
            amount: newData.payload.amount,
            deposit: newData.payload.deposit,
            withdraw: newData.payload.withdraw
        });
    },[dispatch])


    const handleAmount = (e) => {
        setData({...data, amount: Number(e.target.value) })
    }

    const handleDeposit = () => {
        const newBalance = data.balance + data.amount
        setData({amount: 0, balance: newBalance });
        dispatch(depositMoney(data));
    }

    const handleWithdraw = () => {
        const newBalance = Number(data.balance - data.amount)
        setData({amount: 0, balance: newBalance });
        dispatch(withdrawMoney(data));
    }

    const handleInterest = () => {
        const collectedInterest = Number(data.balance * 1.03)
        setData({amount: 0, balance: collectedInterest });
        dispatch(collectInterest(data));
    }
    return (
        <Box className={classes.root}>
            <Typography 
                variant="h4" 
                align="center"
                color={ data.balance >= 0 ? "textPrimary" : "secondary"}
            >
                ₱{data.balance.toFixed(2)}
            </Typography>
            <TextField 
                name="amount"
                label="amount"
                value={data.amount}
                helperText="Enter Amount"
                type="number"
                variant="filled"
                margin="normal"
                size="medium"
                onChange={handleAmount}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            ₱
                        </InputAdornment>
                    ),
                }}
            />
            <Button 
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                onClick={handleDeposit}
                className={classes.btn}
            >
                Deposit
            </Button>
            <Button 
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
                onClick={handleWithdraw}
                className={classes.btn}
            >
                Withdraw
            </Button>
            <Button 
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                onClick={handleInterest}
                className={classes.btn}
            >
                Collect Interest
            </Button>
        </Box>
    )
}

export default Deposit;
