import styles from "./Todo.module.scss"

export const Todo = ({ todo }) => {
	return (
		<div className={styles.todo}>
			<div className={styles.todo__text}>{todo}</div>
		</div>
	)
}
