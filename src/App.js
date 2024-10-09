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

	const resetTodosHandler = () => {
		setTodos([])
	}

	const resetCompletedTodosHandler = () => {
		setTodos(todos.filter((todo) => todo.isCompleted === false))
	}

	const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

	return (
		<div className="App">
			<TodoForm
				todos={todos}
				addTodo={addTodoHandler}
				deleteTodo={deleteTodoHandler}
				toggleTodo={toggleTodoHandler}
				resetTodo={resetTodosHandler}
				completedTodosLength={!!completedTodosCount}
				resetCompetedTodo={resetCompletedTodosHandler}
			>
				<h1 className="header">Todo APP</h1>
			</TodoForm>
			{completedTodosCount > 0 && (
				<h4 className="count">{`You have completed ${completedTodosCount} ${
					completedTodosCount > 1 ? "todos" : "todo"
				}`}</h4>
			)}
		</div>
	)
}

export default App
