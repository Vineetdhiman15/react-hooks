import React, {useState,useContext,useEffect} from 'react';
import TodosContext from '../context'

export default function TodoForm(){
  const[todo, setTodo] = useState('')
  const {state: {currentTodo={}},dispatch} = useContext(TodosContext)

useEffect(()=>{
  console.log('fdfdfd')
  if(currentTodo.text){
    setTodo(currentTodo.text)
  } else {
    setTodo('')
  }
},[currentTodo.id])

  const handleSubmit = event =>{
    event.preventDefault()
    if(currentTodo.text){
      dispatch({type: 'UPDATE_TODO', payload: todo})
      setTodo('')
    }
    else{
      dispatch({type: 'ADD_TODO', payload: todo})
      setTodo('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex justify-center p-5'>
    <input value={todo} onChange={event => setTodo(event.target.value)} type='text' className='border-black border-solid border-2'/>
    </form>
  )
}
