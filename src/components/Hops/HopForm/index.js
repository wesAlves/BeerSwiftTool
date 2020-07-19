import React from 'react';
import './index.scss';

import BSTInputText from '../../generecsComponents/inputText';

const hopForm = (props) => {

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

        <div className="Hop">

            {/* <BSTInputText
                inputName="Malt Name"
                type="text"
                onChange={props.changeName}
                value={props.maltName}
            /> */}

            <div className="inputHop">
                <label>Hop name</label>
                <input type='text' onChange={props.changeName} value={props.hopName} />
            </div>

            <div className="inputHop">
                <label>Hop addition type</label>
                {/* <input type='text' onChange={props.changeType} value={props.maltType} /> */}
                <select onChange={props.changeHopAdditionType} value={props.hopAdditionType}>
                    
                    <option>Boil</option>
                    <option>FWH</option>
                    <option>Flame out</option>
                    <option>Dry hop</option>
                </select>
            </div>

            <div className="inputHop">
                <label>Hop Alpha acid </label>
                <input type='text' onChange={props.changeHopAlphaAcid} value={props.hopAlphaAcid} />
            </div>

            <div className="inputHop">
                <label>Hop addition time </label>
                <input type='text' onChange={props.changeHopAdditionTime} value={props.hopAdditionTime} />
            </div>

            <div className="inputHop">
                <label>Hop amount </label>
                <input type='text' onChange={props.changeAmount} value={props.hopAmount} />
            </div >
            <div className='delButton' onClick={props.clickDelete}>Delete</div>
        </div >
    );
}

export default hopForm;