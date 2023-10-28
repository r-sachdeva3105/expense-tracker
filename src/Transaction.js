import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState'

const Transaction = ({ transaction }) => {
    const { deleteTransaction, transactions } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    const remove = e => {
        deleteTransaction(transaction.id);
    }
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            <button className="delete-btn"
                onClick={remove}>x</button>
            <span>{transaction.text}</span>
            <span className='spacer'></span>
            <span>{sign}${Math.abs(transaction.amount)}</span>
        </li>
    )
}

export default Transaction