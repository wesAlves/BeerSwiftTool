import React from 'react';

const BSTInputText = (props) => {
    return (
        <div className="inputMalt">
            <label>{props.inputName}</label>
            <input
                type={props.type}
                onChange={props.changeName}
                value={props.value} />
        </div>
    )
}

export default BSTInputText;