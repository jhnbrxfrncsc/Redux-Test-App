import { createStore } from 'redux';
import { bankingReducer } from '../reducers/bankingReducer';

export default createStore(bankingReducer);