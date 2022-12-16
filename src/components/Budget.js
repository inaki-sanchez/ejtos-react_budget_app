import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const { currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const increaseBudget = () => {
        let newBudget = budget + 10;
        changeBudget(newBudget);
    }

    const decreaseBudget = () => {
        let newBudget = budget - 10;
        changeBudget(newBudget);
    }

    const changeBudget = (newBudget) => {
        if (newBudget > 20000){
            alert("The value cannot exceed 20.000!");
        }else if (newBudget < totalExpenses){
            alert("You can't reduce the budget lower than the expenses");
        }else{
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget
            });
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input
                required='required'
                type='number'
                id='cost'
                value={budget}
                style={{ size: 2}}
                onChange={(event) => changeBudget(parseInt(event.target.value))}>
            </input>
            <button onClick={event=> decreaseBudget()}>-</button>
            <button onClick={event=> increaseBudget()}>+</button>
        </div>
    );
};

export default Budget;