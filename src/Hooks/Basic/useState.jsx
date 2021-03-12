import React, {Component, Fragment, useState } from 'react'
/**
 * @Befor
 */
export class Button extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }

        this.incrementCount = this.incrementCount.bind(this)
    }

    incrementCount() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <Fragment>
                <p>{this.state.count}</p>
                <button onClick={this.incrementCount}>Add</button>
            </Fragment>
        )
    }
}

/**
 * @After Կոմպակտ և ավելի պարզ։
 * @useState Կարող ընդունել @callback
 * @returns 
 */

export const Btn = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);
    const [state, setState] = useState({
        a: "Valodik",
        b: Date.new()
    })
    const [call, setCall] = useState(prev => prev + 1) //Example

    return (
        <>
            <p>{count}</p>
            <button onClick={incrementCount}>Add</button>
        </>
        
    )
}