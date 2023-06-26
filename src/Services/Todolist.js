import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'

function Todo({ todo, index, removeTodo }) {
   return (
      <div>
         <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
            {todo.text}
         </span>
         <div className='mt-2'>
            <Button
               variant="outline-danger"
               onClick={() => removeTodo(index)}
            >
               <AiFillDelete /> | Remove
            </Button>
         </div>
      </div>
   )
}

function TodoForm({ addTodo }) {
   const [value, setValue] = useState("")

   const submitForm = e => {
      e.preventDefault()
      if (!value) return
      console.log('To Do Value:', value)
      addTodo(value)
      setValue("")
   }

   return (
      <>
         <Form onSubmit={submitForm}>
            <Form.Group>
               <Form.Label>
                  <b>Add To Do List Here</b>
               </Form.Label>
               <Form.Control
                  type="text"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  placeholder="Add new Todo"
               />
            </Form.Group>
            <br />
            <Button variant="primary mb-3" type="submit">
               Submit
            </Button>
         </Form>
      </>
   )
}

function Todolist() {
   const [todos, setTodos] = useState([])

   const addTodo = text => {
      const newTodos = [...todos, { text }]
      localStorage.setItem('todo', JSON.stringify([...todos, { text }]));
      console.log('Input:', text)
      setTodos(newTodos)
   }

   const removeTodo = index => {
      const newTodos = [...todos];
      console.log('Removed Index', 1)
      newTodos.splice(index, 1);
      setTodos(newTodos);
   }
   // useEffect(() => {
   //    const newTodos = JSON.parse(localStorage.getItem('todos'));
   //    console.log('todoGet', todos)
   //    if (newTodos) {
   //       setTodos(newTodos);
   //    }
   // }, []);

   return (
      <>
         <div className='pt-3 pb-3'>
            <hr />
            <Container className='pb-5 mb-2'>
               <h1 className="text-center mb-4">To do List</h1>
               <TodoForm addTodo={addTodo} />
               <div>
                  {todos.map((todo, index) => (
                     <Card>
                        <Card.Body>
                           <Todo
                              key={index}
                              index={index}
                              todo={todo}
                              removeTodo={removeTodo}
                           />
                        </Card.Body>
                     </Card>
                  ))}
               </div>
            </Container>
         </div>
      </>
   )
}

export default Todolist