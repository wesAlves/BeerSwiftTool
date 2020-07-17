import React, { useState, useEffect } from 'react';
import Fermentables from './components/Fermentables';
import RecipeHeader from './components/recipeHeader';


import './_styles/main.scss';

export default function App() {

    const [wortVolume, setwortVolume] = useState(100);
    const [efficiency, setefficiency] = useState(70);

    const wortVolumeHandler = (event) => {
        const wortVolumeState = event.target.value;
        setwortVolume(wortVolumeState);
    };

    const efficiencyHandler = (event) => {
        const efficiencyState = event.target.value;
        setefficiency(efficiencyState);
    };

    useEffect(() => {

        const updateEfficiency = efficiency;
        const updateWortVolume = wortVolume;

        setefficiency(updateEfficiency);
        setwortVolume(updateWortVolume);

    }, [efficiency, wortVolume]);


    return (
        <>
            <RecipeHeader
                efficiencyHandler={(event) => { efficiencyHandler(event) }}
                wortVolumeHandler={(event) => { wortVolumeHandler(event) }}
                efficiency={efficiency}
                wortVolume={wortVolume}
            />

            <Fermentables
                efficiency={efficiency}
                wortVolume={wortVolume}
            />

        </>
    )
}