import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(true);
  const saveExpensesData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(true);
  };

  const startEditingHandler = () => {
    setIsEditing(false);
    //isEditing = false
  };

  const stopEditingHandler = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {/* {isEditing ? (
        <button onClick={startEditingHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpensesData}
          onCancel={stopEditingHandler}
        />
      )} */}
      {isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {!isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpensesData}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
