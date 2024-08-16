import { useContext, useState } from "react"
import { TransactionContext } from "./TransactionContext"

export const Popper =()=>{
    const [Amount,setAmount] = useState('');
    const [type,setType] = useState('');
    const {addTransaction} = useContext(TransactionContext);
    const handleSubmit = (e)=>{
        e.preventDefault();
        addTransaction({amount:parseFloat(Amount),type});
        setAmount('');
    }

    return(
        <div className="popper">
            <form onSubmit={handleSubmit}>
                <div className="inputAmountContainer">
                 <label className="amount-input-label">
                    Amount
                 </label>
                 <input
                type="text" placeholder="Add Amount" onChange={(e)=>{setAmount(e.target.value)}}></input>
                </div>
                <div className="radio-buttons">
                    <label className="radio-button-expense-label">Expense</label>
                    <input type="radio" 
                            value="expense" 
                            checked={type === 'expense'} 
                            onChange={(e) => setType(e.target.value)}/>
                    <label className="radio-button-income-label">Income</label>
                    <input  type="radio" 
                            value="income" 
                            checked={type === 'income'} 
                            onChange={(e) => setType(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        
    )

}