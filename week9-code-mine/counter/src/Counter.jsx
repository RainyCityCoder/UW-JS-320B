import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementAction, incrementAction } from './counter';
// import PropTypes from 'prop-types'

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  const increment = useCallback(
    () => dispatch(incrementAction()),
    [dispatch] // dependency for this funct.
  );
  const decrement = useCallback(
    () => dispatch(decrementAction()),
    [dispatch]
  )

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

// Counter.propTypes = {}

export default Counter
