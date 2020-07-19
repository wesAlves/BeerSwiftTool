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
            // { id: uuid(), maltName: "Sacarose", maltColor: Math.floor(Math.random() * 40), maltPot: 1.04621, maltAmount: Math.floor(Math.random() * 10), maltPercentage: 100, maltColorPercentage: 1 },
        ]
    });
    const [currentAmount, updateCurrentAmount] = useState();
    const [currentColor, updateCurrentColor] = useState();

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

        malt.maltColor = Number(event.target.value);

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

        malt.maltPot = Number(event.target.value);

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

        malt.maltAmount = Number(event.target.value);

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
        const malts = [...maltsState.malts];
        const malt = {
            id: uuid(),
            maltName: 'Sacarose',
            maltColor: Math.floor(Math.random() * 40),
            maltPot: 1.04621,
            maltAmount: Math.floor(Math.random() * 10),
            maltPercentage: 100,
            maltColorPercentage: 1,
        }


        malts.push(malt);
        setMalts({ malts: malts });

    }

   const updateMaltPercentual = useEffect(() => {
        const malts = [...maltsState.malts];
        const amount = [];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        malts.map((malt => {
            const maltAmount = malt.maltAmount;
            amount.push(malt.maltAmount);
            const updateAmount = amount.reduce(reducer);
            malt.maltPercentage = (maltAmount * 100);
            updateCurrentAmount(updateAmount);

            setMalts({ malts: malts })
        }
        ));
        console.log(malts);

    }, [wortPotential]);


    useEffect(() => {
        const malts = [...maltsState.malts];

        malts.map((malt => {
            const maltAmount = malt.maltAmount;
            const maltPotential = malt.maltPot;

            const percentageDBFG = (maltPotential - 1) / 0.04621 * 100;
            const extractPotential = 1 + (percentageDBFG / 100) * 0.04621;
            const maltOG = (maltAmount * percentageDBFG) / props.wortVolume;

            wortUpdatedPotential = wortUpdatedPotential + maltOG;

            const mainOG = (259 / (259 - ((wortUpdatedPotential) * (props.efficiency / 100))));
            const attenuation = 0.75;
            const calcFG = (259 / (259 - ((wortUpdatedPotential) * (props.efficiency * (1 - attenuation) / 100))));
            const calcAbv = (76.08 * (mainOG - calcFG) / (1.775 - mainOG)) * (calcFG / 0.794) //more precise, but its new.

            setWortPotential(mainOG.toFixed(3)); /*TODO improve the readability */
            setFg(calcFG.toFixed(3));
            setAbv(calcAbv.toFixed(2));
        }
        ));


    }, [maltsState, props.efficiency, props.wortVolume]);


    const colorCalculator = () => {
        const malts = [...maltsState.malts];
        const color = [];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        malts.map(malt => {
            malt.maltColor;
            color.push((malt.maltColor / malt.maltColor) * malt.maltPercentage);
            // const colorPercentage = (color.reduce(reducer) / 100) * malt.maltPercentage;
            // console.log(malt.maltColorPercentage);
        });
        console.log(color);
        updateCurrentColor(color.reduce(reducer));
    }

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
                        // maltPercntaul={malt.maltPercentage}
                        // maltPercntaul={`${((malt.maltAmount * 100) / currentAmount).toFixed(1)}%`}
                        maltPercntaul={`${(malt.maltPercentage/currentAmount).toFixed(1)}%`}
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

                </div>
            </div>
            <button onClick={colorCalculator}>Potencial</button>
        </>

    );
}

export default Fermentables;
