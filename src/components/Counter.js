import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(15)); 
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1> Funny Counter </h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
       
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 15</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

