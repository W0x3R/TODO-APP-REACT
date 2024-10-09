import { useState } from "react"
import styles from "./TodoForm.module.scss"
import { TodoList } from "./TodoList"
import { TodosActions } from "./TodosActions"
import { Button } from "../UI/Button"

export const TodoForm = ({
	todos,
	addTodo,
	deleteTodo,
	toggleTodo,
	resetTodo,
	resetCompetedTodo,
	completedTodosLength,
	children
}) => {
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
				<label className={styles.form__label} htmlFor="form__input">
					ADD TASK
				</label>

				<div className={styles["form__input-wrapper"]}>
					<input
						id="form__input"
						className={styles.form__input}
						value={text}
						onChange={onChangeHandler}
						placeholder="Enter new todo"
					></input>
					<Button type="submit" title="Submit" disabled={!text.length}>
						Submit
					</Button>
				</div>
			</form>
			{!!todos.length && (
				<TodosActions
					resetTodo={resetTodo}
					resetCompetedTodo={resetCompetedTodo}
					completedTodosLength={completedTodosLength}
				/>
			)}

			<TodoList deleteTodo={deleteTodo} toggleTodo={toggleTodo} todos={todos} />
		</div>
	)
}
