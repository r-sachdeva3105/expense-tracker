import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const localStorageTransactions = JSON.parse(
    localStorage.getItem('transactions')
);

const initialState = { transactions: localStorage.getItem('transactions') !== null ? localStorageTransactions : [] };

// create context
export const GlobalContext = createContext(initialState);

// provider conponent
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE',
            payload: id
        });
        updateLocalStorage();
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD',
            payload: transaction
        });
        updateLocalStorage();
    }
    function updateLocalStorage() {
        localStorage.setItem('transactions', JSON.stringify(state.transactions));
        console.log(state.transactions);
    }
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}