import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelect = () => {
    const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);

    function changeCurrency(event) {
        const newCurrency = event.target.value;
        alert(`The selected currency is: ${newCurrency}`);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
    }

    return (
        <div>
            <span>
            <label for='selCurrency'>Currency:</label>
            <select class='form-select bg-success text-white' id='selCurrency' value={currency} onChange={changeCurrency}>
                <option class='bg-success text-black' value='$'>$ Dollar</option>
                <option class='bg-success text-black' value='£'>£ Pound</option>
                <option class='bg-success text-black' value='€'>€ Euro</option>
                <option class='bg-success text-black' value='₹'>₹ Rupee</option>
            </select>
            </span>
        </div>
    );
};

export default CurrencySelect;