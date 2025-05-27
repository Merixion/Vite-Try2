import styles from "./Button.module.css"

function Button({ kind = 'default', children, onClick }) {
	return (
		<button className={styles[kind]} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button