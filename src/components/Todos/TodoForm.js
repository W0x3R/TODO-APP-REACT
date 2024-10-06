import { useState } from "react"

export const TodoForm = ({ addTodo }) => {
	const [text, setText] = useState("")

	const onChangeHandler = (e) => setText(e.target.value)

	const onSubmitHandler = (e) => {
		e.preventDefault()
		addTodo(text)
		setText("")
	}

	return (
		<form onSubmit={onSubmitHandler} className="form">
			<input
				value={text}
				onChange={onChangeHandler}
				placeholder="Enter new todo"
			></input>
			<button type="submit">Submit</button>
		</form>
	)
}
