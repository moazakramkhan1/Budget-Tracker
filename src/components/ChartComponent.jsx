import React, { useContext } from "react";
import { TransactionContext } from "./TransactionContext";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = () => {
    const { transactions } = useContext(TransactionContext);

    const expenses = transactions?.filter(t => t.type === 'expense') || [];
    const incomes = transactions?.filter(t => t.type === 'income') || [];

    const data = {
        labels: ['Income', 'Expense'],
        datasets: [{
            data: [
                incomes.reduce((sum, t) => sum + t.amount, 0),
                expenses.reduce((sum, t) => sum + t.amount, 0)
            ],
            backgroundColor: ['#36A2EB', '#FF6384'],
        }]
    };

    if (transactions.length === 0) {
        return <p>No transactions to display in the chart.</p>;
    }

    return <Doughnut data={data} />;
};
