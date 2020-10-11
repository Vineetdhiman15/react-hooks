import React, {useContext, useReducer} from 'react';
import {UserContext} from './index';

const initialState = {
  count : 0
}

function reducer(state, action){
  switch(action.type){
    case 'increment':{
      return {
        count : state.count +1
      }
    };
    case 'decrement':{
      return {
        count : state.count -1
      }
    };
    case 'reset':{
      return initialState
    }
    default:
    return initialState
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useContext(UserContext)
  return (
    <div>Hello, {value}
    <div>Count: {state.count}</div>
    <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
    <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
    <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  );
}
