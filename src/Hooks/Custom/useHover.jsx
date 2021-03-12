import React, {useEffect, useRef, useState} from 'react'

/**
 * @Օրինակ @Before
 * Ունենք այսպիսի կոմպոնենտ։
 */

const style = {
    hover:{
        height: 400,
        width: 200,
        background: "orange"
    },
    hover1:{
        height: 300,
        width: 150,
        background: "red"
    }

}

const _Hover = () => {
    const ref = useRef(null)

    return (
        <div style={style}>
            <button onClick={() => console.log(ref.currentValue)}></button>
        </div>
    )
    
}

/**
 * Ստեղծենք մեր ծառայողական @useHover hook-ը, որը իրենից ներկայացնում է ֆունկցիա։ 
 */

const useHover = ref => {
    const [hover, setHover] = useState(false),
        on = () => setHover(true),
        of = () => setHover(false);

    useEffect(()=> {
        if(!ref.current) return ;
        const node = ref.current;
        
        node.addEventListener('mouseenter', on)
        node.addEventListener('mousemove',  on)
        node.addEventListener('mouseleave', of)

        return () => {
            node.removeEventListener('mouseenter', on)
            node.removeEventListener('mousemove',  on)
            node.removeEventListener('mouseleave', of)
        }
    }, [] )

    return hover;
}

/**
 * @After
 * ԵՎ կստանանք։
 */

export const Hover = () => {
    const ref = useRef(null),
        isHover = useHover(ref);

    return (
        <div ref={ref} style={isHover ? style.hover : style.hover1} />
    )
}