import { Button } from "../UI/Button"
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri"
import styles from "./TodosActions.module.scss"

export const TodosActions = () => {
	return (
		<div className={styles.actions__wrapper}>
			<Button>
				<RiDeleteBin2Line title="Reset todos" />
			</Button>
			<Button>
				<RiRefreshLine title="Clear completed todos" />
			</Button>
		</div>
	)
}
