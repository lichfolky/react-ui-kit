import React from "react";
import styles from "./Input.module.css";

function Input({ defaultValue = "", id, label, name, type, required, placeholder }: { defaultValue?: string, id: string, label: string, name: string, type: React.HTMLInputTypeAttribute, required: boolean, placeholder?: string; }) {

    const [
        value,
        setValue,
    ] = React.useState(defaultValue);

    return (
        <div className={styles.field}>
            <label htmlFor={id} >
                {label}
            </label>
            <div className={styles.label}>
                {label}
            </div>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required={required}
                placeholder={placeholder}
            >
            </input>
            {value}
        </div>
    );
}

export default Input;