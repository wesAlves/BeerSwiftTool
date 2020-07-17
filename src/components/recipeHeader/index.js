import React, { useState } from 'react'
import './index.scss';

const RecipeHeader = (props) => {

        return (

            <div className="RecipeHeader">
                <div className="title">
                    <h2> Recipe</h2>
                </div>
                <div className="firstline">
                    <label>Name </label>
                    <input type='text' placeholder="Faz Tua Breja" />
                    <label>Style</label>
                    <select>
                        <option>IPA</option>
                        <option>Red Ale</option>
                        <option>Pilsen</option>
                    </select>
                </div>
                <div className="firstline">
                    <label>Wort Volume/L </label>
                    <input type='text' onChange={props.wortVolumeHandler} value={props.wortVolume} />
                    <label>Efficiency/%</label>
                    <input type='text' onChange={props.efficiencyHandler} value={props.efficiency} />
                </div>

            </div>

        )
    }

    export default RecipeHeader
