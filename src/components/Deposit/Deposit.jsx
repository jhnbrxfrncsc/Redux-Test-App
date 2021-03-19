import React, { useState, useEffect } from 'react';
import { Box, Button, InputAdornment, TextField, Typography } from '@material-ui/core';
import useStyles from './depositStyles';
import { useDispatch } from 'react-redux';
import { depositMoney, withdrawMoney, getBalance } from '../../redux/actions/actions';


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
        setData({amount: 0, balance: Number(data.balance + data.amount) });
        dispatch(depositMoney(data));
    }
    const handleWithdraw = () => {
        setData({amount: 0, balance: Number(data.balance - data.amount) });
        dispatch(withdrawMoney(data));
    }
    return (
        <Box className={classes.root}>
            <Typography 
                variant="h4" 
                align="center"
                color={ data.balance >= 0 ? "textPrimary" : "secondary"}
            >
                ₱{data.balance}
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
                // onClick={handleWithdraw}
                className={classes.btn}
            >
                Collect Interest
            </Button>
            {/* <Box className={classes.infos}>
                <ul>    
                    <Typography>
                        You've Deposited:
                    </Typography>
                    {
                        data.deposit.map((data) => {
                            return (
                                <li>
                                    <Typography>
                                        {data}
                                    </Typography>
                                </li>
                            )
                        })
                    }
                </ul>
            </Box> */}
        </Box>
    )
}

export default Deposit;
