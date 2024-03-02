const d = document;

const bS = d.getElementById('S');
const bM = d.getElementById('M');
const bL = d.getElementById('L');

const bWh = d.getElementById('Wh');
const bYe = d.getElementById('Ye');
const bGr = d.getElementById('Gr');

const yellow = d.getElementById('yellow');
const white = d.getElementById('white');
const green = d.getElementById('green');

white.style.display='none';
green.style.display='none';

bM.addEventListener('click', ()=>{
    changeColor(bM);
    defaultColor(bS, bL);
})

bS.addEventListener('click', ()=>{
    changeColor(bS);
    defaultColor(bM, bL);
})

bL.addEventListener('click', ()=>{
    changeColor(bL);
    defaultColor(bS, bM);
})

bWh.addEventListener('click', ()=>{
    changeColor(bWh);
    defaultColor(bYe, bGr);
    tsVisible(white);
    tsInvisible(yellow, green);
})

bGr.addEventListener('click', ()=>{
    changeColor(bGr);
    defaultColor(bYe, bWh);
    tsVisible(green);
    tsInvisible(yellow, white);
})
bYe.addEventListener('click', ()=>{
    changeColor(bYe);
    defaultColor(bWh, bGr);
    tsVisible(yellow);
    tsInvisible(white, green);
})
function tsVisible(e){
    e.style.display = '';
}
function tsInvisible(e,z){
    e.style.display ='none';
    z.style.display ='none';
}

function changeColor(e){
    e.style.borderColor='#CB0101';
}

function defaultColor(e, z){
    e.style.borderColor = '#767676';
    z.style.borderColor = '#767676';
}