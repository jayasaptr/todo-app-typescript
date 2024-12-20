import { useState } from "react"
import TodoInput from "../components/TodoInput"
import TodoItem from "../components/TodoItem"
import Todo from "../types/Todo"

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: "Jalan Jalan Sore",
      completed: true
    },
    {
      id: 2,
      text: "Makan Malam",
      completed: false
    }
  ])

  const addTodo = (newTodo: string) => {
    const todo: Todo = {
      id: todos.length + 1,
      text: newTodo,
      completed: false,
    }

    setTodos([...todos, todo]
    )
  }

  const handleCompleted = (id: number) => {
    setTodos(prevTodo => prevTodo.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const handleDelete = (id: number) => {
    setTodos(prevTodo => prevTodo.filter(todo => todo.id !== id))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-teal-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">To Do List</h1>
        <TodoInput addTodo={addTodo} />
        <ul className="space-y-4">
          {todos.map((todo) => (<TodoItem handleCompleted={handleCompleted} handleDelete={handleDelete} todo={todo} key={todo.id} />))}
        </ul>
      </div>
    </div>
  )
}

export default TodoList
