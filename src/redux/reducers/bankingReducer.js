const INITIAL_STATE = {
    balance: 250,
    amount: 0,
    deposit: ['₱1000'],
    withdraw: ['₱1000']
};

export const bankingReducer = (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case 'BALANCE':
            action.payload = state;
            return state;

        case "WITHDRAW":
            return { ...state,
                withdraw: state.withdraw.concat(`₱${action.payload.amount}`), 
                amount: 0,
                balance: action.payload.balance 
            };
        
        case "DEPOSIT":
            return { ...state,
                deposit: state.deposit.concat(`₱${action.payload.amount}`), 
                amount: 0,
                balance: action.payload.balance 
            };
        
        case "COLLECT_INTEREST":
            return { ...state,
                deposit: state.deposit.concat(`₱${action.payload.amount}`), 
                amount: 0,
                balance: action.payload.balance 
            };

        default:
            return state;
    }
}