import { useState } from "react"
import "./App.scss"
import { TodoForm } from "./components/Todos/TodoForm"

function App() {
	const [todos, setTodos] = useState([])

	const addTodoHandler = (text) => {
		setTodos([...todos, text])
	}

	return (
		<div className="App">
			<TodoForm todos={todos} addTodo={addTodoHandler}>
				<h1 className="header">Todo APP</h1>
			</TodoForm>
		</div>
	)
}

export default App
