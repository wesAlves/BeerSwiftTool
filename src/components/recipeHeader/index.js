import React from 'react'
import WortVolume from './hooks/wortVolume'
import Efficiency from './hooks/efficiency'
import './index.scss';



const RecipeHeader = () => {
    let [{ wortVolume }, {wortVolumeState},  wortVolumeHandler] = WortVolume()
    let [{ efficiency }, {efficiencyState},  efficiencyHandler] = Efficiency()
    
    console.log(wortVolumeState)
    console.log(efficiencyState)


   
    
    return (
        
        <div className="RecipeHeader">
            <div className="firstline">
                <h2> Recipe</h2>
            </div>
            <div className="firstline">
            <label>Name </label>
                <input  type='text' placeholder= "Faz Tua Breja" /> 
                <label>Style</label>
                <select>
                    <option>IPA</option>
                    <option>Red Ale</option>
                    <option>Pilsen</option>
                </select>
            </div>
            <div className="firstline">
                <label>Wort Volume/L </label>
                <input  type='text' onChange={wortVolumeHandler} value= {wortVolume} /> 
                <label>Efficiency/%</label>
                <input  type='text'  onChange={efficiencyHandler} value= {efficiency} />
            </div>
            
        </div>

    )  
}

export default RecipeHeader
