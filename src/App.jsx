import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseDetailPage from './pages/ExpenseDetailPage';
import MonthSelector from './components/MonthSelector';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(savedExpenses);
  }, []);

  const saveExpense = (expense) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  const updateExpense = (id, updatedExpense) => {
    const updatedExpenses = expenses.map((expense, index) =>
      index === parseInt(id) ? updatedExpense : expense
    );
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter(
      (_, index) => index !== parseInt(id)
    );
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ExpenseForm onSave={saveExpense} />
              <ExpenseList expenses={expenses} />
              <MonthSelector
                selectedMonth={selectedMonth}
                onSelectMonth={setSelectedMonth}
              />
            </>
          }
        />
        <Route
          path="/expense/:id"
          element={
            <>
              <ExpenseDetailPage
                expenses={expenses}
                onUpdate={updateExpense}
                onDelete={deleteExpense}
              />
              <MonthSelector
                selectedMonth={selectedMonth}
                onSelectMonth={setSelectedMonth}
              />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
