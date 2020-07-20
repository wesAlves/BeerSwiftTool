import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4'


import HopForm from './HopForm';

import './index.scss';


const Hops = (props) => {


    let hopUpdateUtilization = 0;

    const [ibu, setIbu] = useState(0);

    const [hopsState, setHops] = useState({
        hops: [
            {
                id: uuid(),
                hopName: "Hop name",
                hopAlphaAcid: 13,
                hopAdditionType: "Boil",
                hopAdditionTime: 60,
                hopAmount: 0
            },
        ]
    });

    const hopNameHandler = (event, id) => {
        const hopIndex = hopsState.hops.findIndex(hop => {
            return hop.id === id;
        });

        const hop = {
            ...hopsState.hops[hopIndex]
        };

        hop.hopName = event.target.value;

        const hops = [...hopsState.hops];
        hops[hopIndex] = hop;

        setHops({ hops: hops });
    }

    const hopAlphaAcidHandler = (event, id) => {
        const hopIndex = hopsState.hops.findIndex(hop => {
            return hop.id === id;
        });

        const hop = {
            ...hopsState.hops[hopIndex]
        };

        hop.hopAlphaAcid = event.target.value;

        const hops = [...hopsState.hops];
        hops[hopIndex] = hop;

        setHops({ hops: hops });
    }

    const hopAdditionTypeHandler = (event, id) => {
        const hopIndex = hopsState.hops.findIndex(hop => {
            return hop.id === id;
        });

        const hop = {
            ...hopsState.hops[hopIndex]
        };

        hop.hopAdditionType = event.target.value;

        if (event.target.value == 'Flame out' || event.target.value == "Dry hop") {

            hop.hopAdditionTime = 0;
        }
        else {
            hop.hopAdditionTime = 60;
        }

        const hops = [...hopsState.hops];
        hops[hopIndex] = hop;

        setHops({ hops: hops });
    }

    const hopAdditionTimeHandler = (event, id) => {
        const hopIndex = hopsState.hops.findIndex(hop => {
            return hop.id === id;
        });

        const hop = {
            ...hopsState.hops[hopIndex]
        };

        hop.hopAdditionTime = event.target.value;

        const hops = [...hopsState.hops];
        hops[hopIndex] = hop;

        setHops({ hops: hops });
    }

    const hopAmountHandler = (event, id) => {
        const hopIndex = hopsState.hops.findIndex(hop => {
            return hop.id === id;
        });

        const hop = {
            ...hopsState.hops[hopIndex]
        };

        hop.hopAmount = event.target.value;

        const hops = [...hopsState.hops];
        hops[hopIndex] = hop;

        setHops({ hops: hops });
    }

    const deleteHopHandler = (hopIndex) => {
        const hops = [...hopsState.hops];
        hops.splice(hopIndex, 1);
        setHops({ hops: hops });
    }

    const addHopHandler = () => {

        const hop = {

            id: uuid(),
            hopName: "Hop name",
            hopAlphaAcid: 13,
            hopAdditionType: "Boil",
            hopAdditionTime: 60,
            hopAmount: 0
        }

        const hops = [...hopsState.hops];
        hops.push(hop);
        setHops({ hops: hops });

    }

    useEffect(() => {
        const hopUtil = [...hopsState.hops];

        for (let i = 0; i < hopsState.hops.length; i++) {

            const hopAmount = Number(hopUtil[i].hopAmount);
            const hopAdditionTime = Number(hopUtil[i].hopAdditionTime);
            const hopAdditionType = hopUtil[i].hopAdditionType;
            const hopAlphaAcid = Number(hopUtil[i].hopAlphaAcid);
            //Using average hop utilization assuming the wort took 20 minutes to drop from 100 ° C to 80 ° C
            const hopUtilizationFlameout = (1.65 * Math.pow(0.000125, (Number(props.wortPotential) - 1)) * (1 - Math.exp(-0.04 * 20)) / 4.15) * 0.36;

            if (hopAdditionType == "Boil") {

                //calculation Hop utilization
                const hopUtilizationUnit = (1.65 * Math.pow(0.000125, (Number(props.wortPotential) - 1)) * (1 - Math.exp(-0.04 * hopAdditionTime)) / 4.15);

                //Calculating mg/L of alpha acid
                let mgPerL = (((Number(hopAlphaAcid)) / 100) * ((Number(hopAmount)) * 1000)) / Number(props.wortVolume);
                //calculating mg/L of non-isomerized alpha acid on Flame out
                let mgPerlFlameout = (1 - hopUtilizationUnit) * (((Number(hopAlphaAcid)) / 100) * ((Number(hopAmount)) * 1000)) / Number(props.wortVolume)

                //Calculating Hop specific IBU                
                const hopIbu = (hopUtilizationUnit * mgPerL + mgPerlFlameout * hopUtilizationFlameout);
                //Updating the hops utilization
                hopUpdateUtilization = hopUpdateUtilization + hopIbu;
            }

            if (hopAdditionType == "FWH") {

                //calculation Hop utilization unit with 10% more utilization
                const hopUtilizationUnit = 1.1 * (1.65 * Math.pow(0.000125, (Number(props.wortPotential) - 1)) * (1 - Math.exp(-0.04 * hopAdditionTime)) / 4.15);
                
                //Calculating mg/L of alpha acid
                let mgPerL = (((Number(hopAlphaAcid)) / 100) * ((Number(hopAmount)) * 1000)) / Number(props.wortVolume);

                //calculating mg/L of non-isomerized alpha acid on Flame out
                let mgPerlFlameout = (1 - hopUtilizationUnit) * (((Number(hopAlphaAcid)) / 100) * ((Number(hopAmount)) * 1000)) / Number(props.wortVolume)

                //Calculating Hop specific IBU                
                const hopIbu = (hopUtilizationUnit * mgPerL + mgPerlFlameout * hopUtilizationFlameout);

                //Updating the hops utilization
                hopUpdateUtilization = hopUpdateUtilization + hopIbu;
            }

            if (hopAdditionType == "Flame out") {                      

                //Calculating mg/L of alpha acid
                let mgPerL = (((Number(hopAlphaAcid)) / 100) * ((Number(hopAmount)) * 1000)) / Number(props.wortVolume);
                
                //Calculating Hop specific IBU                
                const hopIbu = (hopUtilizationFlameout * mgPerL);
                
                //Updating the hops utilization
                hopUpdateUtilization = hopUpdateUtilization + hopIbu;
            }

            if (hopAdditionType == "Dry hop") {

                //For dry hoping, the hop utilization is 0
                const hopUtilizationUnit = 0;

                //Calculating mg/L of alpha acid
                let mgPerL = (((Number(hopAlphaAcid)) / 100) * ((Number(hopAmount)) * 1000)) / Number(props.wortVolume);

                //Calculating Hop specific IBU                
                const hopIbu = (hopUtilizationUnit * mgPerL);
                //Updating the hops utilization

                hopUpdateUtilization = hopUpdateUtilization + hopIbu;
            }

            //Seting IBU state
            setIbu(hopUpdateUtilization.toFixed(2));

        }

    }, [hopsState, props.wortVolume, props.wortPotential]);


    let hop = null;

    if (hopsState !== null) {
        hop = (

            hopsState.hops.map((hop, index) => {
                return (

                    < HopForm
                        clickDelete={() => deleteHopHandler(index)}
                        hopName={hop.hopName}
                        hopAdditionType={hop.hopAdditionType}
                        hopAdditionTime={hop.hopAdditionTime}
                        hopAlphaAcid={hop.hopAlphaAcid}
                        hopAmount={hop.hopAmount}
                        changeName={(event) => hopNameHandler(event, hop.id)}
                        changeHopAdditionType={(event) => hopAdditionTypeHandler(event, hop.id)}
                        changeHopAdditionTime={(event) => hopAdditionTimeHandler(event, hop.id)}
                        changeHopAlphaAcid={(event) => hopAlphaAcidHandler(event, hop.id)}
                        changeAmount={(event) => hopAmountHandler(event, hop.id)}
                        key={hop.id}
                    />
                )


            })
        );
    }

    return (
        <>
            <div className="hopsContainer">
                <div>
                    <div className="results">
                        <h2>Hops - IBU: <span style={{ background: `#b34800`, fontSize: '1.5rem' }} className='ebcColor'>{ibu}</span></h2>
                    </div>


                    <button className="addHopButton addHopButton__top" onClick={addHopHandler}>Add hop</button>
                    {/* <ul className='hopList'>

                        {hopsState.hops.map(hop => {

                            return (
                                <li key={hop.id}>
                                    {hop.hopName} : <strong>{hop.hopPot}</strong> <span style={{ background: `#b34800` }} className='ebcColor'>SRM {hop.hopColor}</span>
                                </li>
                            );
                        }
                        )
                        }
                    </ul> */}
                    {hop}

                    {/* <button className="addhopButton" onClick={addhopHandler}>Add hop</button> */}
                </div>
            </div>
        </>

    );
}

export default Hops;
