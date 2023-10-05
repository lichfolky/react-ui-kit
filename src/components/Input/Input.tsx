import React from "react";
import styles from "./Input.module.css";

function Input({ label, type, required }: { label: string, type: React.HTMLInputTypeAttribute, required: boolean; }) {

    const [
        input,
        setInput,
    ] = React.useState('');

    return (
        <div className={styles.field}>
            <div className={styles.label}>
                {label}
            </div>
            <input type={type}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                required={required}>
            </input>
        </div>
    );
}

export default Input;