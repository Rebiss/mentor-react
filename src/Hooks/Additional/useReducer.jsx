import React, {useReducer} from 'react'

/**
 * Այլընտրանք է @useState @Redux
 * (state, action) => newState
 */

const initState = {count: 0}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <>
            <span>Count: {state.count}</span>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
        </>
    );
}