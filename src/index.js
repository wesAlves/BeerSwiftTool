
let water = document.querySelector("input[name='water']");
let grain = document.querySelector("input[name='grain']");
let result = document.querySelector("input[name='result']");
let grainConv = document.querySelector("input[name='grain-conversion']");
const calc =  document.querySelector("button");
const sacarose = 0.04621;

const malt = document.querySelector("select[name='malt']");

function OG(){
    let calcConv = ((Number(grainConv.value)-1)*100/4).toFixed(3);   
    let calcOG =   ((((calcConv)*Number(grain.value)/Number(water.value))*4/10)+1).toFixed(3);
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