import React from 'react';
import './Budget.css';

const Budget = ({ profit, market, delivery }) => (
    <div className="budget">
        <h2>Бюджет</h2>
        <p>Всего получено денег:
        <span className="t-profit">{profit}</span>
        </p>
        <p>Расходы продавцов:
        <span className="t-sellers">{market}</span>
        </p>
        <p>Расходы на ферме:
        <span className="t-farm"></span>
        </p>
        <p>Расходы на доставку:
        <span className="t-delivery">{delivery}</span>
        </p>
        <p>Итого</p>
    </div>
);

export default Budget;
