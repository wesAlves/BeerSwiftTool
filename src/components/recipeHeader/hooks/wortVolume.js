import { useState } from 'react'



const WortVolume = () => {
  let [wortVolume, setwortVolume] = useState('60');
  let wortVolumeState = { wortVolume };
  
  const wortVolumeHandler = (event) => {
    
    wortVolumeState = event.target.value;
    setwortVolume(wortVolumeState);
    console.log({wortVolumeState})
  };
  
  return [{ wortVolume }, { wortVolumeState }, wortVolumeHandler];
}
export default WortVolume
