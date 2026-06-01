import { useState, useEffect } from 'react'
import axios from 'axios'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    try {
      const { data } = await axios.get('http://localhost:5002/api/todos')
      setTodos(data)
    } catch (error) {
      console.error('Error fetching todos:', error)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onTodoAdded={fetchTodos} />
      <TodoList todos={todos} onTodoUpdated={fetchTodos} />
    </div>
  )
}

export default App