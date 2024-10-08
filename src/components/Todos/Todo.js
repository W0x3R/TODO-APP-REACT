import styles from "./Todo.module.scss"
import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri"
import { FaCheck } from "react-icons/fa"

export const Todo = ({ deleteTodo, toggleTodo, todo }) => {
	return (
		<div
			className={`${styles.todo} ${
				todo.isCompleted ? styles.todo_completed : ""
			}`}
		>
			<RiTodoFill className={styles.todo__icon} />
			<div className={styles.todo__text}>{todo.text}</div>
			<RiDeleteBin2Line
				onClick={() => deleteTodo(todo.id)}
				className={styles["todo__delete-icon"]}
			/>
			<FaCheck
				onClick={() => toggleTodo(todo.id)}
				className={styles["todo__check-icon"]}
			/>
		</div>
	)
}
