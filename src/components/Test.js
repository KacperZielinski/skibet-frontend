import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'

function Test() {
    return (
        <>
            <div className="App">
                <h1>Result is: </h1>
            </div>
            <Link to='/simplerest'>
                <button>Rest</button>
            </Link>
            <Link to='/test'>
                <button>Test</button>
            </Link>
            <Link to='/'>
                <button>Clear</button>
            </Link>
        </>
    )
}

export default Test;