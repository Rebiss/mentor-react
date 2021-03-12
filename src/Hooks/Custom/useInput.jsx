import React, {useState} from 'react'
/**
 * @Օրինակ @Before
 * Ունենք այսպիսի կոմպոնենտ։
 */
const _Input = () => {
    const [val, steVal] = useState('');
    const handelInput = ev => steVal(ev.target.value);

    return (
        <div>
            <input type="text" value={val} onChange={handelInput}/>
            <button onChange={() => console.log(val)}></button>
        </div>
    )
}

/**
 * Ստեղծենք մեր ծառայողական @useInput hook-ը, որը իրենից ներկայացնում է ֆունկցիա։ 
 */
const useInput = info => {
    const [val, steVal] = useState(info),
        onChange = ev => steVal(ev.target.value);

    return { val, onChange }
}


/**
 * @After
 * ԵՎ կստանանք։
 */

export const Input = () => {
    const login = useInput('')
    const pass = useInput('')

    return (
        <div>
            <div>
                <input {...login} type="text" placeholder="Login" />
            </div>
            <div>
                <input {...pass} type="password" placeholder="Password" />
            </div>
            <button onClick={() => console.log(login.val, pass.val)}> Submit </button>
        </div>
    )
}