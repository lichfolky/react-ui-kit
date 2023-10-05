import styles from './Button.module.css';


// TODO: https://adamsilver.io/blog/the-problem-with-disabled-buttons-and-what-to-do-instead/
function Button({ variant, children, disabled }: { variant: string, children: string, disabled?: boolean; }) {
    return (
        <button className={`${styles.wrapper} ${styles[variant]}`} disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;