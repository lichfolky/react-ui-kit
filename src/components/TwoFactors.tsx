import React, { BaseSyntheticEvent } from 'react';

const CORRECT_CODE = '123456';

function TwoFactor() {
    const [code, setCode] = React.useState('');

    function handleChange(event: BaseSyntheticEvent) {
        console.log(event.target.value);
        setCode(event.target.value);
    }

    function handleSubmit(event: BaseSyntheticEvent) {
        alert(CORRECT_CODE == code ? "ok" : "error");
        event.preventDefault();
    }

    return (<form onSubmit={handleSubmit}>
        <label htmlFor="auth-code">
            Enter authorization code:
        </label>
        <div className="row">
            <input
                id="auth-code"
                type="text"
                required={true}
                maxLength={6}
                value={code}
                onChange={handleChange}
            />
            <button>Validate</button>
        </div></form>);
}
export default TwoFactor;