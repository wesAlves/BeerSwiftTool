import React from 'react';
import OgCalc from './components/OgCalc/';

import './_styles/main.scss';

export default function App() {
    return (
        <>
            <OgCalc
                maxWidth="sm"
                className="card"
            />
        </>
    )
}