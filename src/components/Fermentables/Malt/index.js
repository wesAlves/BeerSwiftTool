import React from 'react';
import './index.scss';

import BSTInputText from '../../generecsComponents/inputText';

const Malt = (props) => {

    /*
    malt state :
        name
        malt type = would be a select or radio buttun
        color = create an component or a functions that hendles the color convertion from EBC to RGB(Hex);
        potential
        amount
    
    put a render that shows the percentage information each malt plays in the whole grist.
    */
    return (

        <div className="Malt">

            {/* <BSTInputText
                inputName="Malt Name"
                type="text"
                onChange={props.changeName}
                value={props.maltName}
            /> */}

            <div className="inputMalt">
                <label>Malt name</label>
                <input type='text' onChange={props.changeName} value={props.maltName} />
            </div>

            <div className="inputMalt">
                <label>Malt type</label>
                {/* <input type='text' onChange={props.changeType} value={props.maltType} /> */}
                <select>
                    <option>Black</option>
                    <option>Red</option>
                </select>
            </div>

            <div className="inputMalt">
                <label>Malt color </label>
                <input type='text' onChange={props.changeColor} value={props.maltColor} />
            </div>

            <div className="inputMalt">
                <label>Malt potencial </label>
                <input type='text' onChange={props.changePot} value={props.maltPot} />
            </div >

            <div className="inputMalt">
                <label>Malt amount </label>
                <input type='text' onChange={props.changeAmount} value={props.maltAmount} />
            </div >
            <div className='delButton' onClick={props.clickDelete}>Delete</div>
        </div >
    );
}

export default Malt;