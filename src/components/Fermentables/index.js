import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4'

import Malt from './Malt';
import './index.scss';

const Fermentables = (props) => {


    let wortUpdatedPotential = 0;
    const [wortPotential, setWortPotential] = useState(0);
    const [fg, setFg] = useState(0);
    const [abv, setAbv] = useState(0);
    const [maltsState, setMalts] = useState({
        malts: [
            { id: uuid(), maltName: "Sacarose", maltColor: 3, maltPot: 1.04621, maltAmount: 6 },
        ]
    });

    const maltNameHandler = (event, id) => {
        const maltIndex = maltsState.malts.findIndex(malt => {
            return malt.id === id;
        });

        const malt = {
            ...maltsState.malts[maltIndex]
        };

        malt.maltName = event.target.value;

        const malts = [...maltsState.malts];
        malts[maltIndex] = malt;

        setMalts({ malts: malts });
    }

    const maltColorHandler = (event, id) => {
        const maltIndex = maltsState.malts.findIndex(malt => {
            return malt.id === id;
        });

        const malt = {
            ...maltsState.malts[maltIndex]
        };

        malt.maltColor = event.target.value;

        const malts = [...maltsState.malts];
        malts[maltIndex] = malt;

        setMalts({ malts: malts });
    }

    const maltPotHandler = (event, id) => {
        const maltIndex = maltsState.malts.findIndex(malt => {
            return malt.id === id;
        });

        const malt = {
            ...maltsState.malts[maltIndex]
        };

        malt.maltPot = event.target.value;

        const malts = [...maltsState.malts];
        malts[maltIndex] = malt;

        setMalts({ malts: malts });
    }

    const maltAmountHandler = (event, id) => {
        const maltIndex = maltsState.malts.findIndex(malt => {
            return malt.id === id;
        });

        const malt = {
            ...maltsState.malts[maltIndex]
        };

        malt.maltAmount = event.target.value;

        const malts = [...maltsState.malts];
        malts[maltIndex] = malt;

        setMalts({ malts: malts });
    }

    const deleteMaltHandler = (maltIndex) => {
        const malts = [...maltsState.malts];
        malts.splice(maltIndex, 1);
        setMalts({ malts: malts });
    }

    const addMaltHandler = () => {

        const malt = {
            id: uuid(),
            maltName: 'Sacarose',
            maltColor: 1,
            maltPot: 1.04621,
            maltAmount: 6
        }

        const malts = [...maltsState.malts];
        malts.push(malt);
        setMalts({ malts: malts });

    }

    useEffect(() => {
        const maltsPlato = [...maltsState.malts];

        for (let i = 0; i < maltsState.malts.length; i++) {

            const maltAmount = Number(maltsPlato[i].maltAmount);
            const maltPotential = Number(maltsPlato[i].maltPot);

            const percentageDBFG = (maltPotential - 1) / 0.04621 * 100;
            const extractPotential = 1 + (percentageDBFG / 100) * 0.04621;
            //wortVolume addition here,
            const maltOG = (maltAmount * percentageDBFG) / props.wortVolume;

            wortUpdatedPotential = wortUpdatedPotential + maltOG;

            //efficiency addition here.
            const mainOG = (259 / (259 - ((wortUpdatedPotential) * (props.efficiency / 100))));

            //using an overall aparent attenuation of 75%. the attenuation is based on mash temperatures/times and yeast attenuation.
            const attenuation = 0.75;
            const calcFG = (259 / (259 - ((wortUpdatedPotential) * (props.efficiency * (1 - attenuation) / 100))));

            //Calculatin alchool by volume
            const calcAbv = (76.08 * (mainOG - calcFG) / (1.775 - mainOG)) * (calcFG / 0.794) //more precise, but its new.
            //const calcAbv = 131.25 * (mainOG - calcFG); // less precise, but more used

            // seting OG, FG, ABV states
            setWortPotential(mainOG.toFixed(3)); /*TODO improve the readability */
            setFg(calcFG.toFixed(3));
            setAbv(calcAbv.toFixed(2));

            // console.log(`Este é o potêncial do mosto ${maltOG}`);
            // console.log(`Esse é o wortvolume que esta pegando ${props.wortVolume}L`);
            // console.log(`Esse é a efficiency que esta pegando ${props.efficiency}%`);


        }

    }, [maltsState, props.efficiency, props.wortVolume]);


    let malt = null;

    if (maltsState !== null) {
        malt = (

            maltsState.malts.map((malt, index) => {
                return (

                    < Malt
                        clickDelete={() => deleteMaltHandler(index)}
                        maltName={malt.maltName}
                        maltColor={malt.maltColor}
                        maltPot={malt.maltPot}
                        maltAmount={malt.maltAmount}
                        changeName={(event) => maltNameHandler(event, malt.id)}
                        changeColor={(event) => maltColorHandler(event, malt.id)}
                        changePot={(event) => maltPotHandler(event, malt.id)}
                        changeAmount={(event) => maltAmountHandler(event, malt.id)}
                        key={malt.id}
                    />
                )


            })
        );
    }

    return (
        <>
            <div className="fermentablesContainer">
                <div>
                    <div className="results">
                        <h2>Malt list - Original gravity (OG): <span style={{ background: `#b34800`, fontSize: '1.5rem' }} className='ebcColor'>{wortPotential}</span></h2>
                        <h2> FG: <span style={{ background: `#b34800`, fontSize: '1.5rem' }} className='ebcColor'>{fg}</span></h2>
                        <h2>ABV:<span style={{ background: `#b34800`, fontSize: '1.5rem' }} className='ebcColor'>{abv}%</span></h2>
                    </div>


                    <button className="addMaltButton addMaltButton__top" onClick={addMaltHandler}>Add malt</button>
                    <ul className='maltList'>

                        {maltsState.malts.map(malt => {

                            return (
                                <li key={malt.id}>
                                    {malt.maltName} : <strong>{malt.maltPot}</strong> <span style={{ background: `#b34800` }} className='ebcColor'>SRM {malt.maltColor}</span>
                                </li>
                            );
                        }
                        )
                        }
                    </ul>
                    {malt}

                    {/* <button className="addMaltButton" onClick={addMaltHandler}>Add malt</button> */}
                </div>
            </div>
        </>

    );
}

export default Fermentables;
