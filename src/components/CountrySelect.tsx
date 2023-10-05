import React from 'react';

import { COUNTRIES } from '../data/countries';

const countryNames = Object.entries(COUNTRIES);

function CountrySelect({ id, name, required }: { id: string, name: string, required: boolean; }) {
    const [
        country,
        setCountry,
    ] = React.useState('');
    // or geolocate ip

    return (
        <>
            <label htmlFor="country" >
                Country:
            </label>
            <select
                id={id}
                name={name}
                value={country}
                onChange={event => {
                    setCountry(event.target.value);
                }}
                required={required}
            >
                <option value="" >— Select Country —</option>
                <optgroup label="Countries" >
                    {
                        countryNames.map(([id, label]) => {
                            return (
                                <option value={id} key={id} >
                                    {label}
                                </option>
                            );
                        })}
                </optgroup>
            </select >
        </>
    );
}

export default CountrySelect;