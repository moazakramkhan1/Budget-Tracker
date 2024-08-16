import { useContext } from "react";
import { TransactionContext } from "./TransactionContext";

export const Summary = () => {
    const { transactions } = useContext(TransactionContext);

    if (!transactions || transactions.length === 0) {
        return (
            <div className="summary">
                <h2>Summary</h2>
                <p>No transactions available.</p>
            </div>
        );
    }

    const Totalexpense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
    const Totalincome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);

    return (
        <div className="summary">
            <h2>Summary</h2>
            <p>Total Income: {Totalincome}</p>
            <p>Total Expense: {Totalexpense}</p>
            <p>Net Balance: {Totalincome - Totalexpense}</p>
        </div>
    );
};
