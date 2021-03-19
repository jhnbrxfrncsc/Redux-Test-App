

export const withdrawMoney = value => {
    return {
        type: "WITHDRAW",
        payload: value
    }
}
export const getBalance =  {
        type: "BALANCE",
    }

export const depositMoney = value => {
    return {
        type: "DEPOSIT",
        payload: value
    }
}

export const collectInterest = (value) => {
    return {
        type: "COLLECT_INTEREST",
        payload: value
    }
}