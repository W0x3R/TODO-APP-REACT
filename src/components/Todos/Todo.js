import { RiTodoFill } from "react-icons/ri"
import styles from "./Todo.module.scss"

export const Todo = ({ deleteTodo, todo, index }) => {
	return (
		<div onDoubleClick={() => deleteTodo(index)} className={styles.todo}>
			<RiTodoFill className={styles.todo__icon} />
			<div className={styles.todo__text}>{todo}</div>
		</div>
	)
}
