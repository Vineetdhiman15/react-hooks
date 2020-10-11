import React, {useReducer,useContext} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import TodosContext from './context';
import todoReducer from './reducer';
import TodoList from './components/TodoList'
import TodoFrom from './components/TodoForm'

const  App = () => {
const initialState = useContext(TodosContext)
const [state, dispatch] = useReducer(todoReducer, initialState)
  return (
    <TodosContext.Provider value= {{state, dispatch}} >
    <TodoFrom/>
    <TodoList/>
</TodosContext.Provider>  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
