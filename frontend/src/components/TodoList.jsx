import axios from 'axios'

function TodoList({ todos, onTodoUpdated }) {

  const handleToggle = async (id) => {
    try {
      await axios.put(`http://localhost:5002/api/todos/${id}`)
      onTodoUpdated()
    } catch (error) {
      console.error('Error toggling todo:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5002/api/todos/${id}`)
      onTodoUpdated()
    } catch (error) {
      console.error('Error deleting todo:', error)
    }
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          <span
            onClick={() => handleToggle(todo._id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => handleDelete(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList