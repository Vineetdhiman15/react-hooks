import React, {useContext} from 'react';
import TodosContext from '../context'

function TodoList() {
const {state, dispatch} = useContext(TodosContext)
const title = state.todos.length > 0 ? `${state.todos.length} Todos` : 'Nothing Todo'
  return (
    <div className='container mx-auto max-w-md text center font-mono'>
    <h1 className='text-bold'>{title}</h1>
    <ul className='list-reset-tet-white p-0'>{
      state.todos.map(todo => (
        <li key={todo.id}
        className='flex items-center bg-orange-dark border-black border-dashed border-2 my-2 py-4'
        >
        <span
        onDoubleClick={() => dispatch({type:'TOGGLE_TODO', payload:todo})}
        className={`flex-1 ml-12 cursor-pointer ${todo.complete && 'line-through text-grey-darkest'}`}>{todo.text}</span>
        <button onClick={()=> dispatch({type:'SET_CURRENT_TODO', payload: todo})}>
        Edit
        </button>
        <button onClick={()=> dispatch({type:'REMOVE_TODO', payload: todo})}>
        Delete
        </button>
        </li>
      ))
    }
    </ul>
    </div>
  );
}

export default TodoList;
