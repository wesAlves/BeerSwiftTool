import React from 'react';
import Fermentables from './components/Fermentables';


import './_styles/main.scss';

export default function App() {
    return (
        <>
            <Fermentables
                wortVolume={60}
            />
            <div style={{color: "#fff", fontWeight: "Bold"}}>
                ***      Eficiência fíxa em 50%
    </div>
            <input type="text" placeholder="Wort volume" value={60}></input>

        </>
    )
}