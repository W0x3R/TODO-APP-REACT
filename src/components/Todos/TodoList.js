import { Todo } from "./Todo"

export const TodoList = ({ todos }) => {
	return (
		<>
			{todos.map((todo, i) => (
				<Todo todo={todo} key={i} />
			))}
		</>
	)
}
