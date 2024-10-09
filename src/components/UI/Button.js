import styles from "./Button.module.scss"

export const Button = (props) => {
	const { children, disabled = false } = props
	return (
		<button {...props} className={styles.actions__button} disabled={disabled}>
			{children}
		</button>
	)
}
