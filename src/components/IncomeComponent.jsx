import { useContext } from "react";
import { TransactionContext } from './TransactionContext';

export const Income = () => {
    const { transactions } = useContext(TransactionContext);
    const incomes = transactions?.filter(t => t.type === 'income') || [];

    if (incomes.length === 0) {
        return <p>No income recorded.</p>;
    }

    return (
        <div className="income-list">
            <p>Income</p>
            <ul>
                {incomes.map((t, index) => (
                    <li key={index}>
                        {t.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};
