import React, { useState } from 'react';
import { useCounter } from '../hooks/useCounter'
import {Small} from './Small'
export default function Memorize() {

    const {counter, increment} = useCounter(0);
    const [ show, setShow ] = useState(true);

    return (<>

            <h1>Counter: <Small value={ counter } />  </h1>
            <hr />


            <button 
                className="btn btn-dark"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide { JSON.stringify( show ) }
            </button>

        </>)
}