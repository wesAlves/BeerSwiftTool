
let wort = document.querySelector("input[name='wort']");
let efficiency = document.querySelector("input[name='efficiency']");

let grain = document.querySelector("input[name='grain']");
let origGravity = document.querySelector("input[name='result']");
let fgGravity = document.querySelector("input[name='fg']");
let extPot = document.querySelector("input[name='extPot']");

let alphaAcid = document.querySelector("input[name='alpha-acid']");
let hopMass = document.querySelector("input[name='hop-mass']");
let boilTime = document.querySelector("input[name='boil-time']");
let ibu = document.querySelector("input[name='IBU']");

const gravityCalc =  document.querySelector("button[name='OG']");
const ibuCalc =  document.querySelector("button[name='IBU']");
const malt = document.querySelector("select[name='malt']");

function OGFG(){
   //calcullating DBFG (grain sugar's percent)
   let DBFG = (((Number(extPot.value))-1)/0.04621);
   // calculating Plato degrees using DBFG and grain/water ratio
   let platoDeg = (((DBFG*(Number(grain.value))/Number(wort.value))*100)*(Number(efficiency.value)/100));
   //calculating OG
   let calcOG =   (259/(259-platoDeg)).toFixed(3);
   origGravity.value = calcOG;

    let attenuation = 0.75;
    let fgPlatoDeg = platoDeg*(1 - attenuation);
    let calcFg = (259/(259-fgPlatoDeg)).toFixed(3);
    fgGravity.value = calcFg;
}



gravityCalc.onclick = function() {
    OGFG();
   
}

//calculating IBU'S based o Tinseth's fórmula (the most accurate till now)
function IBU(){
    //calculation Hop utilization
    let hopUtil = (1.65*Math.pow(0.000125, ((Number(origGravity.value)-1)*1.1))*(1-Math.exp(-0.04*boilTime.value))/4.15);
    //Calculating Mg/L of alpha acid
    let mgPerL = (((Number(alphaAcid.value))/100)*((Number(hopMass.value))*1000))/Number(wort.value);
    //Calculating IBS
    let calcIbu = Math.round(hopUtil*mgPerL);
     
    ibu.value = calcIbu;
    // TODO flameout hop additions calculation
}



ibuCalc.onclick = function () {
   IBU()
}



//Flameout hop additions:
// Calculating hop bitterness in the whirlpool is similar to calculating it in the boil. Hop bitterness is a function of boil (or steep) time, amount of hops used, boil volume, boil gravity, and the alpha acid percentage of the hops. The same basic relationships apply to the whirlpool.

// The only major difference is that in the whirlpool, the hops are at a lower temperature, so the isomerization process takes place at a much slower pace. In fact, below boiling it drops off very rapidly. As a result the temperature and time of your whirlpool additions are very important.
// If we calculate the hop utilization for an equivalent boil hop using the time, volume and gravity of the wort for the addition, we can then apply the “whirlpool utilization” to this number to estimate the overall hop utilization. Here’s a look at the whirlpool utilization with temperature assuming 100% would be an equivalent boil hop:

// Formula: Utilization = 2.39 * 10^11 * e^(-9773/T) where T is in Kelvin
// Boiling: 100 C (212 F) – Utilization is 100%
// At 90 C (194 F) – Utilization is 49%
// At 80 C (176 F) – Utilization is 23%
// At 70 C (158 F) – Utilization is 10%
// At 60 C (140 F) – Utilization is 4.3%
// At 50 C (122 F) – Utilization is 1.75%
