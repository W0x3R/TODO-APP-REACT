import { Todo } from "./Todo"
import styles from "./TodoList.module.scss"

export const TodoList = ({ deleteTodo, todos }) => {
	return (
		<div className={styles["todoList-container"]}>
			{!todos.length && (
				<h2 className={styles.todoList__header}>TodoList is empty</h2>
			)}
			{todos.map((todo, i) => (
				<Todo deleteTodo={deleteTodo} index={i} todo={todo} key={i} />
			))}
		</div>
	)
}
