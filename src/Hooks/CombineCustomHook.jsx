import React from 'react'
import {Input} from './Custom/useInput.jsx'
import {Hover} from './Custom/useHover.jsx'
import {Debounce} from './Custom/useDebounce.jsx'
import {Request} from './Custom/useRequest.jsx'
import {Scroll} from './Custom/useScroll.jsx'

export const CombineCustomHook = () => {
    return (
        <div>
            <Scroll />
        </div>
    )
}