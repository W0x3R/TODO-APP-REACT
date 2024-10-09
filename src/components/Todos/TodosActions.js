import { Button } from "../UI/Button"
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri"
import styles from "./TodosActions.module.scss"

export const TodosActions = ({
	resetTodo,
	resetCompetedTodo,
	completedTodosLength
}) => {
	return (
		<div className={styles.actions__wrapper}>
			<Button onClick={resetTodo}>
				<RiRefreshLine title="Reset todos" />
			</Button>
			<Button disabled={!completedTodosLength} onClick={resetCompetedTodo}>
				<RiDeleteBin2Line title="Clear completed todos" />
			</Button>
		</div>
	)
}
