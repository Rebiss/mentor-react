import React, {useCallback} from 'react'

/**
 * 
 * useCallback(fn, deps) — useMemo(() => fn, deps).
 */

export const Callback = ({props}) => {
    const onItemClick = useCallback(event => {
        console.log('Clecked', event.currentTarget);
    }, [props]);

    return (
        <ExampleComponent props={props} onItemClick={onItemClick} /> //Example
    )
}