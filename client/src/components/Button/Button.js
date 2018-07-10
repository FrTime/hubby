import React from 'react'

const Button = props => (

    <div>
        <button
            value={props.value}
            onClick={props.handleBtnClick}
        > toggle </button>
    </div>
)





export default Button;