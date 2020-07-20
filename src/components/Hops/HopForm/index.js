import React from 'react';
import './index.scss';



const hopForm = (props) => {

    
    return (

        <div className="Hop">

           
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