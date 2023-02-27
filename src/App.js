
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment } from './redux/counterSlice';
import { decrement } from './redux/counterSlice';
import { incrementByAmount } from './redux/counterSlice';
import React,{useState} from 'react'

function App() {
  const count = useSelector((state)=> state.counter.value);
  const dispach = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className="App">
      <h1>count:{count}</h1>
      <input onChange={(e) => setIncrementAmount(e.target.value)} value={incrementAmount}/ >
      <button onClick={() =>dispach(increment())}>+</button>
      <button onClick={() =>dispach(decrement())}>-</button>
      <button onClick={() =>dispach(incrementByAmount(Number(incrementAmount)))}>追加</button>
    </div>
  );
}

export default App;
