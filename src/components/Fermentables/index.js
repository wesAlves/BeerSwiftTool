import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4'


import './index.scss';
import Malt from './Malt';
import WortVolume from '../recipeHeader/hooks/wortVolume';
import Efficiency from '../recipeHeader/hooks/efficiency';


const Fermentables = (props) => {

    
    let wortUpdatedPotential = 0;
    //importing efficiency and wortVolume hooks.
    let [{wortVolume}, {wortVolumeState}, wortVolumeHandler] = WortVolume()
    let [{efficiency}, {efficiencyState}, efficiencyHandler] = Efficiency()
    
    

    const [wortPotential, setWortPotential] = useState(0);

    const [maltsState, setMalts] = useState({
        malts: [
            { id: uuid(), maltName: "Sacarose", maltColor: 3, maltPot: 1.04621, maltAmount: 3 },
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
            maltAmount: 3
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
            const maltOG = (maltAmount * percentageDBFG) / Number(wortVolume);

            wortUpdatedPotential = wortUpdatedPotential + maltOG;

            //efficiency addition here.
            const mainOG = (259 / (259 - ((wortUpdatedPotential)*(Number(efficiency)/100)))).toFixed(3); //TODO create the eficiency to calc

            setWortPotential( mainOG); /*TODO improve the readability */

            console.log(`Este é o potêncial do mosto ${maltOG}`);
            console.log(`Esse é o wortvolume que esta pegando ${wortVolume}L`);
            console.log(`Esse é a efficiency que esta pegando ${efficiency}%`);

            
        }

    }, [maltsState]);


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

                    <h2>Malt list - Original gravity (OG): <span style={{ background: `#b34800`, fontSize: '1.5rem' }} className='ebcColor'>{wortPotential}</span></h2>
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

                    <button className="addMaltButton" onClick={addMaltHandler}>Add malt</button>
                </div>
            </div>
        </>
        
    );
}

export default Fermentables;
