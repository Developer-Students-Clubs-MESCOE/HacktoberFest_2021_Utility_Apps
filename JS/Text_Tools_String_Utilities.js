window.onload=()=>{
    const button = document.querySelector('button');
const cross= document.querySelector('#cross');
const line= document.querySelector('#line');
const slidebar=document.querySelector('.slide_bar');
let operation = document.querySelector('input[id="operation"]');
const obj = document.querySelector('#URL_input');

line.style.display='none';

functions = {
    "split": (string) => {
        const char = document.querySelector("#splitchar")
        return string.split(char.value);
    },
    "To Uppercase": (string) => { return string.toUpperCase() },
    "To Lowercase": (string) => { return string.toLowerCase() },
    "Reverse": (string) => { return string.split().reverse().join() },
    "word count": (string) => {
        return (string.split("")).length;
    },
    "character count": (string) => {
        return (string.split()).length;
    }
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

    document.querySelector('#URL_output').textContent = functions[operation.value](obj.value);
}
}