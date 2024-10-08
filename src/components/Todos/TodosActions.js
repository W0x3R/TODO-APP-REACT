import { Button } from "../UI/Button"
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri"
import styles from "./TodosActions.module.scss"

export const TodosActions = ({ resetTodo, resetCompetedTodo }) => {
	return (
		<div className={styles.actions__wrapper}>
			<Button onClick={resetTodo}>
				<RiRefreshLine title="Reset todos" />
			</Button>
			<Button onClick={resetCompetedTodo}>
				<RiDeleteBin2Line title="Clear completed todos" />
			</Button>
		</div>
	)
}
