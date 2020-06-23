
let wort = document.querySelector("input[name='wort']");
let grain = document.querySelector("input[name='grain']");
let result = document.querySelector("input[name='result']");
let extPot = document.querySelector("input[name='extPot']");
const calc =  document.querySelector("button");
const malt = document.querySelector("select[name='malt']");

function OG(){
   //calcullating DBFG (grain sugar's percent)
   let DBFG = (((Number(extPot.value))-1)/0.04621);
   // calculating Plato degrees using DBFG and grain/water ratio
   let platoDeg = ((DBFG*(Number(grain.value))/Number(wort.value))*100);
   //calculating OG
   let calcOG =   (259/(259-platoDeg)).toFixed(3);
   result.value = calcOG;
}

calc.onclick = function() {
    OG();
}


// Often brewers refer to a malt’s “extract potential.” This is typically expressed as specific gravity that can be achieved with 1.00 pound (455 g) of malt mashed in 1.00 gallon (3.78 L) of water.

// The following formula can be used to calculate extract potential:
// Extract potential (S.G.) = 1 + (DBFG / 100) * 0.04621

// The 0.4621 multiplier in the formula is the extract potential of sucrose (1.04621), against which all extract is measured. For example, a malt with a DBFG value of 80.5% results in a calculated extract potential of 1.0372.

// https://byo.com/article/understanding-malt-spec-sheets-advanced-brewing/