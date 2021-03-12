import React, {useCallback, useRef, useState} from 'react'

/**
 * @Օրինակ @Before
 * Ունենք այսպիսի կոմպոնենտ։
 */
const restURLs = `https://jsonplaceholder.typicode.com`;


const _Debounce = () => {
    const [value, setValue] = useState('')
    const search  = (query) => {
        fetch(`${restURLs}/posts?query=${query}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const handleChange = ev => {
        setValue(ev.target.value)
        search(ev.target.value)
    }

    return (
        <div>
            <input type='text' value={value} onChange={handleChange} /> 
        </div>
    )
}

/**
 * Ստեղծենք մեր ծառայողական @useDebounce hook-ը, որը իրենից ներկայացնում է ֆունկցիա։ 
 */

const useDebounce = (func, delay) => {
    const refTimer = useRef(null)

    const debounceFunc = useCallback((...args) => {
        if(refTimer.current) { clearTimeout(refTimer.current) }

        refTimer.current = setTimeout(() => { func(...args) }, delay)

    }, [func, delay])

    return debounceFunc
}

/**
 * @After
 * ԵՎ կստանանք։
 */
const search  = (query) => { 
    fetch(`${restURLs}/posts?query=${query}`)
        .then(res => res.json())
        .then(data => console.log(data))
}

export const Debounce = () => {
    const [value, setValue] = useState('')
    const debounce = useDebounce(search, 1000)

    const handleChange = ev => {
        setValue(ev.target.value)
        debounce(ev.target.value)
    }

    return (
        <div>
            <input type='text' value={value} placeholder='Search' onChange={handleChange} /> 
        </div>
    )
}