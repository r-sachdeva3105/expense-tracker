import React, { useState, useContext } from 'react'
import { GlobalContext } from './GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const submit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 10000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={submit}>
                <div className="form-control">
                    <label htmlFor="text">Description</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter description..." required />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount<br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." required />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction