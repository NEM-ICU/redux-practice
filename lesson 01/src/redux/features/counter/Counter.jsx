import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  text-align: center;
  margin: 50px auto;
`;

const CounterTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const Count = styled.h4`
  font-size: 6.5rem;
  margin-bottom: 20px;
`;

const ActionBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 10px 20px;
  margin: 0 10px;
  background-color: darkblue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #001f3f;
  }
`;

const NumberInput = styled.input`
  font-size: 1rem;
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
`;

const Counter = () => {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncremtnAmount] = useState(0);

  const resetAll = () => {
    dispatch(reset());
    setIncremtnAmount(0);
  };

  return (
    <Container>
      <CounterTitle>Counter App</CounterTitle>
      <Count>{counter}</Count>
      <ActionBox>
        <Button onClick={() => dispatch(increment())}>+</Button>
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <NumberInput
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncremtnAmount(e.target.value)}
        />
        <ButtonBox>
          <Button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
            Add Amount
          </Button>
          <Button onClick={resetAll}>Reset</Button>
        </ButtonBox>
      </ActionBox>
    </Container>
  );
};

export default Counter;
