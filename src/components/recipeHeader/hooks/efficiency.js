import { useState } from 'react'



const Efficiency = () => {

    let [efficiency, setefficiency] = useState('50');
    let efficiencyState = { efficiency };

    const efficiencyHandler = (event) => {

        efficiencyState = event.target.value;
        setefficiency(efficiencyState);
    };

    return [{ efficiency }, { efficiencyState }, efficiencyHandler];
}
export default Efficiency
