import React, {useMemo} from 'react'

/**
 * @useMemo Մենք կարող եք օգտագործել useMemo-ն որպես օպտիմալացում, այլ ոչ թե semantic երաշխիք:
 * @memoization - ծրագրավորման մեջ՝ ֆունկցիաների կատարման արդյունքները պահպանումն է՝ որկիսի կրկնվող գործողությունների տեղի չունենան:
 * Օպտիմիզացիայի ձև է։
 */

function func(a,b) {
    return a**b
}

export const Memo = () => {
    const memoizedValue = useMemo(() => func(a, b), [a, b]); //Example
    return (
        <>
            {console.log(memoizedValue)}
        </>
    )
}