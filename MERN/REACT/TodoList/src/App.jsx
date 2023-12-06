import  React, { useState } from 'react'
import Form from './components/Form'
import Display from './components/Display'
import './App.css'

function App() {
  const [studentBelt, setStudentBelt] = useState([])


  
  // const handleCompleted = (todoFromBelow) => {

  //   let updateTodos = todoList.map((todo) => {
  //     if (todo === todoFromBelow) {
  //       let newTodo = {...todo};
  //       newTodo.isComplete = !newTodo.isComplete;
  //       return newTodo;
  //     }
  //     else {
  //       return todo;
  //     }
  //   })
  //   setTodoList(updateTodos)
  // }





  return (
    <>
      <Form studentBelt={studentBelt} setStudentBelt={setStudentBelt}/>
      <Display studentBelt={studentBelt} setStudentBelt={setStudentBelt}/>
    </>
  )
}

export default App
