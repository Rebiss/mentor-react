import React, { useEffect, useState } from 'react'
import axios from "axios"

/**
 * @Օրինակ @Before
 * Ունենք այսպիսի կոմպոնենտ։
 */


const __Request = () => {
    const [toData, setToData] = useState('')
    const fetchData = () => {
    
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => res.json())
            .then(data => setToData(data))
    }
    return (
        <div>
            {toData.map(info => {
                <div key={info.id}>
                    {info.id , info.title} 
                </div>
            })}
        </div>
    )
}

/**
 * Ստեղծենք մեր ծառայողական @useRequest hook-ը, որը իրենից ներկայացնում է ֆունկցիա։ 
 */

const useRequest = req => {
    const [data, setData] = useState(null),
        [loading, setLoading] = useState(false),
        [err, setErr] = useState('');

    useEffect(() => {
        setLoading(true)
        req()
            .then(res => setData(res.data))     //Ստացանք տվյալները
            .catch(error => setErr(error))      //Սխալների մշակում
            .finally(() => setLoading(false))   //Անկախ պատասխանից, փոխում ենք false
    }, [])

    return [data, loading, err]
}

/**
 * @After
 * ԵՎ կստանանք։
 */

export const Request = () => {
    const fetchData = () => axios.get(`https://jsonplaceholder.typicode.com/posts/1`);
    const [data, loading, err] = useRequest(fetchData)

    if(loading) <h2>Loading ......</h2>;
    if(err) <h2>Error.....</h2>;

    return (
        <div>
            <div>Hello Data</div>
            <div key={data.id}>
                {data.body}
            </div>
            {/* {data.map((info) => {
                <ul>
                    <li key={info.id} style={{border: "1px solid red"}} >{info.body}</li>
                </ul>
            })} */}
        </div>
    )
}