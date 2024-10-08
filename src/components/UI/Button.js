import styles from "./Button.module.scss"

export const Button = ({ onClick, children, title, disabled = false }) => {
	return (
		<button
			className={styles.actions__button}
			onClick={onClick}
			title={title}
			disabled={disabled}
		>
			{children}
		</button>
	)
}
