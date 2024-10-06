import { useState } from "react"
import styles from "./TodoForm.module.scss"
import { TodoList } from "./TodoList"

export const TodoForm = ({ todos, addTodo, children }) => {
	const [text, setText] = useState("")

	const onChangeHandler = (e) => setText(e.target.value)

	const onSubmitHandler = (e) => {
		e.preventDefault()
		addTodo(text)
		setText("")
	}

	return (
		<div className={styles["form-container"]}>
			{children}
			<form onSubmit={onSubmitHandler} className={styles.form}>
				<input
					className={styles.form__input}
					value={text}
					onChange={onChangeHandler}
					placeholder="Enter new todo"
				></input>
				<button className={styles.form__btn} type="submit">
					Submit
				</button>
			</form>
			<TodoList todos={todos} />
		</div>
	)
}
