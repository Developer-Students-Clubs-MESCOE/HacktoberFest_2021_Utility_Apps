window.onload=()=>{
    const obj = document.querySelectorAll('.rgb-control');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');

const cross= document.querySelector('#cross');
const line= document.querySelector('#line');
const slidebar=document.querySelector('.slide_bar');

line.style.display='none';

function componentToHex(c) {
    c = Number(c);
    let hex = c.toString(16);
    if (hex < 10) return '0' + hex;
    return hex;
}

function rgbToHex(red, blue, green) {
    return "#" + componentToHex(red) + componentToHex(blue) + componentToHex(green);
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return `red: ${parseInt(result[1], 16)},green: ${parseInt(result[2], 16)},blue: ${parseInt(result[3], 16)}`;
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
button1.onclick = event => {
    if (obj[0].value[0] != "#") {
        document.querySelector("#colorbox1").style.backgroundColor = '#' + obj[0].value;
    } else {
        document.querySelector("#colorbox1").style.backgroundColor = obj[0].value;
    }
    document.querySelector('#Rgb_color_code').textContent = hexToRgb(obj[0].value);
}
button2.onclick = event2 => {
    document.querySelector('#Hex_color_code').textContent = rgbToHex(obj[1].value, obj[2].value, obj[3].value);
    document.querySelector("#colorbox2").style.backgroundColor = rgbToHex(obj[1].value, obj[2].value, obj[3].value);
}
}