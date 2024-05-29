import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px auto;
  justify-content: center;
`;

const Input = styled.input`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  flex: auto;
`;

const Button = styled.button`
  padding: 15px;
  background-color: #9351aec2;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: #7834a2a5;
  }
`;

const ExpenseForm = ({ onSave }) => {
  const [date, setDate] = useState('');
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ date, item, amount, description });
    setDate('');
    setItem('');
    setAmount('');
    setDescription('');
  };

  const renderInputField = (type, placeholder, value, onChange) => (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );

  return (
    <Form onSubmit={handleSubmit}>
      {renderInputField('date', '', date, setDate)}
      {renderInputField('text', '지출 항목', item, setItem)}
      {renderInputField('number', '지출 금액', amount, setAmount)}
      {renderInputField('text', '지출 내용', description, setDescription)}
      <Button type="submit">저장</Button>
    </Form>
  );
};

export default ExpenseForm;
