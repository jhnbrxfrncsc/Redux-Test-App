

export const withdrawMoney = (balance, withdraw) => {
    return {
        type: "WITHDRAW",
        payload: {
            withdraw,
            balance
        }
    }
}
export const getBalance =  {
        type: "BALANCE",
    }

export const depositMoney = (balance, deposit) => {
    return {
        type: "DEPOSIT",
        payload: {
            deposit,
            balance
        }
    }
}