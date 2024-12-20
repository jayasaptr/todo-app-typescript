import Todo from "../types/Todo"

type TodoItemProps = {
    todo: Todo,
    handleCompleted: (id: number) => void
    handleDelete: (id: number) => void
}

const TodoItem = ({ todo, handleCompleted, handleDelete }: TodoItemProps) => {
    return (
        <li className={`flex items-center justify-between p-4 rounded-lg shadow-md ${todo.completed ? "bg-gray-200" : "bg-teal-100"}`}>
            <span onClick={() => handleCompleted(todo.id)} className={`cursor-pointer ${todo.completed ? "text-gray-600 line-through" : "todo-gray-800"}`}>{todo.text}</span>
            <button onClick={() => handleDelete(todo.id)} className="text-red-500 hover:text-red-600 transition-all">Delete</button>
        </li>
    )
}

export default TodoItem
