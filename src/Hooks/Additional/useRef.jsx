import React, {useRef} from 'react'

const GetInputValue = () => {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus();
    };
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus</button>
        </>
    );
}