import { useState } from "react";
import './styles.css'
import { Modal } from "../Modal";
import { Income } from "./IncomeComponent";
import { Expense } from "./expenseComponent";
import { Summary } from "./SummaryComponent";
import { Chart } from "./ChartComponent";
import { Popper } from "./addNewTransaction";

export const MainComponent = ()=>{
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button className="openModalbutton" onClick={openModal}>Add Transaction</button>
            
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Popper/>
            </Modal>
            <Income/>
            <Expense />
            <Summary/>
            <Chart/>
        </div>
    );
}