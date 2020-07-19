import React from 'react';
import './index.scss';

import BSTInputText from '../../generecsComponents/inputText';

const Malt = (props) => {

    return (

        <div className="Malt">

            <div className="inputMalt">
                <label>Malt name</label>
                <input type='text' onChange={props.changeName} value={props.maltName} />
            </div>

            <div className="inputMalt">
                <label>Malt type</label>
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
            <div className="inputMalt">
                <label>Malt Percentual </label>
                <div>{props.maltPercentaul}</div>
            </div >

            <div className='delButton' onClick={props.clickDelete}>Delete</div>
        </div >
    );
}

export default Malt;