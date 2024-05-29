const InputField = ({ type, name, value, onChange, error }) => (
  <Input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    style={error ? { borderColor: 'red' } : null}
  />
);

const handleSave = () => {
  const fields = ['item', 'date', 'amount', 'description'];
  let hasError = false;

  fields.forEach((field) => {
    if (!updatedExpense[field]) {
      setUpdatedExpense((prev) => ({ ...prev, [`${field}Error`]: true }));
      hasError = true;
    } else {
      setUpdatedExpense((prev) => ({ ...prev, [`${field}Error`]: false }));
    }
  });

  if (hasError) return;

  onUpdate(id, updatedExpense);
  setEditable(false);
};

return (
  <Container>
    {editable ? (
      <InputContainer>
        <InputField
          type="text"
          name="item"
          value={updatedExpense.item}
          onChange={handleChange}
          error={updatedExpense.itemError}
        />
        <InputField
          type="date"
          name="date"
          value={updatedExpense.date}
          onChange={handleChange}
          error={updatedExpense.dateError}
        />
        <InputField
          type="number"
          name="amount"
          value={updatedExpense.amount}
          onChange={handleChange}
          error={updatedExpense.amountError}
        />
        <InputField
          type="text"
          name="description"
          value={updatedExpense.description}
          onChange={handleChange}
          error={updatedExpense.descriptionError}
        />
        <Button onClick={handleSave}>저장</Button>
      </InputContainer>
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
