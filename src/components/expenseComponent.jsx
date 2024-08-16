import { useContext } from "react";
import { TransactionContext } from './TransactionContext';

export const Expense = () => {
    const { transactions } = useContext(TransactionContext);
    const expenses = transactions?.filter(t => t.type === 'expense') || [];

    if (expenses.length === 0) {
        return <p>No expenses recorded.</p>;
    }

    return (
        <div className="expense-list">
            <p>Expenses</p>
            <ul>
                {expenses.map((t, index) => (
                    <li key={index}>
                        {t.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};
