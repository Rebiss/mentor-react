import React, {useState, useRef, useEffect} from 'react'
import {uid} from 'react-uid'
/**
 * @Օրինակ @Before
 * Ունենք այսպիսի կոմպոնենտ։
 */

const _Scroll = () => {}

/**
 * Ստեղծենք մեր ծառայողական @useScroll hook-ը, որը իրենից ներկայացնում է ֆունկցիա։ 
 */

const useScroll = (parentRef, childRef, callback) => {
    const observer = useRef();

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        }
        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                callback()
            }
        }, options)

        observer.current.observe(childRef.current)

        return () => observer.current.unobserve(childRef.current);

    }, [callback])
};

/**
 * @After
 * ԵՎ կստանանք։
 */

export const Scroll = () => {
    const [todos, setTodos] = useState([])
    const [page, setPage] = useState(1);
    const limit = 11;
    const parentRef = useRef(null);
    const childRef = useRef(null);
    const intersected = useScroll(parentRef, childRef, () => fetchTodos(page, limit));

    function fetchTodos(page, limit) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setTodos(prev => [...prev, ...json]);
                setPage(prev => prev + 1)
            })
    }

    return (
        <div ref={parentRef} style={{height: '50vh', overflow: 'auto'}}>
            {todos.map(todo =>
                <div key={uid(todo.id)} style={{padding: 30, border: '1px solid black'}}>
                    {todo.id}. {todo.title}
                </div>
            )}
            <div ref={childRef} style={{height: 15, background: 'red'}}/>
        </div>
    );
}