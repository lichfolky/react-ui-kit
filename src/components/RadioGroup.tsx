import React from 'react';

function RadioGroup({ id, name, values, required }: { id: string, name: string; values: { value: string, label: string; }[]; required: boolean; }) {
    const [
        selectedValue,
        setSelectedValue,
    ] = React.useState('');

    return (
        <div className="radio-wrapper">
            {values.map(({ value, label }) => (
                < div className="radio-option" key={value}>
                    <input
                        id={`${id}-${value}`}
                        type="radio"
                        name={name}
                        value={value}
                        checked={selectedValue === value}
                        onChange={event => {
                            setSelectedValue(event.target.value);
                        }}
                        required={required}
                    />
                    <label htmlFor={`${id}-${value}`}>
                        {label}
                    </label>
                </div>))
            }
        </div >);
}


export default RadioGroup;