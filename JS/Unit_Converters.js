window.onload=()=>{
    const button = document.querySelector('button');
const icon = document.querySelector('.icon');
const cross= document.querySelector('#cross');
const line= document.querySelector('#line');
const slidebar=document.querySelector('.slide_bar');

line.style.display='none';

functions = {
    "m to cm": (value) => { return value * 100; },
    "cm to m": (value) => {
        return math.floor(value / 100);
    },
    "m to km": (value) => { return value / 1000; },
    "km to m": (value) => { return value * 1000; },
    "cm to km": (value) => { return value / 10000; },
    "km to cm": (value) => { return value * 10000; },
    "m to foot": (value) => { return value * 3.28084; },
    "cm to foot": (value) => { return value * 0.0328084; },
    "foot to km": (value) => { return value * 3280.84; },
    "km to foot": (value) => { return value / 3280.84; },
    "foot to m": (value) => { return value * 0.3048; },
    "foot to cm": (value) => { return value * 30.48; },
}
cross.onclick = () =>{
    //slidebar.style.display='';console.log("displayed");
        slidebar.style.display='none';
        cross.style.display='none';
        line.style.display='';
}
line.onclick=()=>{
    slidebar.style.display='';
    cross.style.display='';
    line.style.display='none';
}
button.onclick = event => {
    let operation = document.querySelector('input[id="operation"]');
    const obj = document.querySelector('#input1');
    document.querySelector('#conversion').textContent = functions[operation.value](obj.value);

}
}