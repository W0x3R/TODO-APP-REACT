import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import "./App.scss"
import { TodoForm } from "./components/Todos/TodoForm"

function App() {
	const [todos, setTodos] = useState([])

	const addTodoHandler = (text) => {
		const newTodo = {
			text,
			isCompleted: false,
			id: uuidv4()
		}

		setTodos([...todos, newTodo])
	}

	const deleteTodoHandler = (id) => {
		setTodos(todos.filter((el) => el.id !== id))
	}

	const toggleTodoHandler = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id
					? { ...todo, isCompleted: !todo.isCompleted }
					: { ...todo }
			)
		)
	}

	return (
		<div className="App">
			<TodoForm
				todos={todos}
				addTodo={addTodoHandler}
				deleteTodo={deleteTodoHandler}
				toggleTodo={toggleTodoHandler}
			>
				<h1 className="header">Todo APP</h1>
			</TodoForm>
		</div>
	)
}

export default App
