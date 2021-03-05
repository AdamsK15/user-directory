import React from 'react'

const Nav = (props) => {

    return (
        <div>
            <button onClick={props.decrease}>Previous</button>
            <button onClick={props.increase}>Next</button>
        </div>
    )



}

export default Nav