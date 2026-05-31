import { useState } from 'react'
import axios from 'axios'

function TodoForm({ onTodoAdded }) {
  const [text, setText] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!text.trim()) return

    try {
      await axios.post('http://localhost:5002/api/todos', { text })
      setText('')
      onTodoAdded()
    } catch (error) {
      console.error('Error creating todo:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoForm