import "./WidgetLg.css";
import React from "react";
import { transactions } from "../../data";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={`widgetLg__btn ${type}`}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLg__title">latest transactions</h3>
      <table className="widgetLg__table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr className="customer">
              <td className="customer__data">
                <img className="customer__img" src={transaction.img} alt="customer profile" />
                <span className="customer__name">{transaction.customer}</span>
              </td>
              <td className="customer__transaction-date">{transaction.date}</td>
              <td className="customer__transaction-amount">{transaction.amount}</td>
              <td>
                <Button type={transaction.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
