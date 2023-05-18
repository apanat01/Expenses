import React, { Component, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 200,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "TV", amount: 250, date: new Date(2021, 2, 12) },
  { id: "e3", title: "Bike", amount: 2000, date: new Date(2021, 2, 28) },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 100,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (formExpenseData) => {
    setExpenses((prevState) => {
      return [formExpenseData, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
