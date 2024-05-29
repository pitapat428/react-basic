import React from 'react';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${({ selected }) => (selected ? '#cb5283c9' : '#fff')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    background-color: #ad3f6bc7;
    color: white;
  }
`;

const MonthSelector = ({ selectedMonth, onSelectMonth }) => {
  const months = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);

  return (
    <CenteredContainer>
      <Container>
        {months.map((month, index) => (
          <Button
            key={index}
            onClick={() => onSelectMonth(index + 1)}
            selected={selectedMonth === index + 1}
          >
            {month}
          </Button>
        ))}
      </Container>
    </CenteredContainer>
  );
};

export default MonthSelector;
