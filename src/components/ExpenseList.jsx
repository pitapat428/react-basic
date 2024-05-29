import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ExpenseItem = styled.div`
  background-color: #fff;
  border: 1px solid #c27991d8;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const ExpenseList = ({ expenses }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      {expenses.map((expense, index) => (
        <Link
          to={`/expense/${index}`}
          key={index}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <ExpenseItem>
            <div>
              {expense.date} - {expense.item} - {expense.description}
            </div>
            <div>{expense.amount} 원</div>
          </ExpenseItem>
        </Link>
      ))}
    </div>
  );
};

export default ExpenseList;
