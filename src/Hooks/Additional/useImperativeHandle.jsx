import React, {useRef, useImperativeHandle} from 'react'

const FancyInput = (props, ref) => {
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));
    return <input ref={inputRef} type='text' />;
}