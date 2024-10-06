import styles from "./Todo.module.scss"

export const Todo = ({ deleteTodo, todo, index }) => {
	return (
		<div onDoubleClick={() => deleteTodo(index)} className={styles.todo}>
			<div className={styles.todo__text}>{todo}</div>
		</div>
	)
}
