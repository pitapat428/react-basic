import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #000;
  cursor: pointer;

  &:hover {
    background-color: #ad3f6bc7;
    color: white;
  }
`;

const ExpenseDetailPage = ({ expenses, onUpdate, onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const expense = expenses[parseInt(id)];
  const [editable, setEditable] = useState(false);
  const [updatedExpense, setUpdatedExpense] = useState(expense || {});

  if (!expense) {
    return <Container>지출 항목을 찾을 수 없습니다.</Container>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedExpense((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdate(id, updatedExpense);
    setEditable(false);
  };

  const handleDelete = () => {
    onDelete(id);
    navigate('/');
  };

  const InputField = ({ type, name }) => (
    <Input
      type={type}
      name={name}
      value={updatedExpense[name]}
      onChange={handleChange}
    />
  );

  const renderEditableFields = () => (
    <>
      <InputField type="text" name="item" />
      <InputField type="date" name="date" />
      <InputField type="number" name="amount" />
      <InputField type="text" name="description" />
      <Button onClick={handleSave}>저장</Button>
    </>
  );

  return (
    <Container>
      {editable ? (
        <div>{renderEditableFields()}</div>
      ) : (
        <div>
          <h2>{expense.item}</h2>
          <p>날짜: {expense.date}</p>
          <p>금액: {expense.amount} 원</p>
          <p>내용: {expense.description}</p>
          <Button onClick={() => setEditable(true)}>수정</Button>
          <Button onClick={handleDelete}>삭제</Button>
        </div>
      )}
    </Container>
  );
};

export default ExpenseDetailPage;
