import { Component } from "react";
import { useSelector, useDispatch } from "react-redux";


import { counterActions } from '../store/index';
import classes from "./Counter.module.css";

const Counter = () => {
  // will dispatch an action against our redux store
  const dispatch = useDispatch();
  // useSelector gives us a part of state from our redux store instead of the whole thing (useStore)
  // changes to the counter will cause this component to automatically update
  const counter = useSelector((state) => state.counter.showCounter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  //Q)how does the action object know to grab the argument for the action.amount in the store?
  //A) we must change action.amount to action.payload
  //it is stored in the action object in an extra field named payload { type IDENTIFIER payload: XXX }

  // value must have same name as value in the reducer
  const increaseHandler = () => {
    dispatch( counterActions.increase(10));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 666</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
