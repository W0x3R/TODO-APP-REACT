import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import "./App.scss"
import { TodoForm } from "./components/Todos/TodoForm"

function App() {
	const getInitialTodos = () => {
		const savedTodos = localStorage.getItem("todo")
		return savedTodos ? JSON.parse(savedTodos) : []
	}

	const [todos, setTodos] = useState(getInitialTodos)
	useEffect(() => {
		localStorage.setItem("todo", JSON.stringify(todos))
	}, [todos])

	const addTodoHandler = (text) => {
		const newTodo = {
			text,
			isCompleted: false,
			id: uuidv4()
		}
		setTodos((prevTodos) => [...prevTodos, newTodo])
	}

	const deleteTodoHandler = (id) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
	}

	const toggleTodoHandler = (id) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) =>
				todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
			)
		)
	}

	const resetTodosHandler = () => {
		setTodos([])
	}

	const resetCompletedTodosHandler = () => {
		setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isCompleted))
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
