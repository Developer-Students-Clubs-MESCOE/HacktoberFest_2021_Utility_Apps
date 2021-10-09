window.onload=()=>{
    const button = document.querySelector('button');
const cross= document.querySelector('#cross');
const line= document.querySelector('#line');
const slidebar=document.querySelector('.slide_bar');
const obj = document.querySelector('#URL_input');
let operation = document.querySelector('input[id="operation"]');

line.style.display='none';
functions = {
    "Binary To Decimal Converter": (value) => {
        console.log(parseInt(value, 2));
        return parseInt(value, 2);
    },
    "Hex To Decimal Converter": (value) => {
        return parseInt(value, 16);
    },
    "Octal To Decimal Converter": (value) => {
        return parseInt(value, 8);
    },
    "Decimal To Binary Converter": (value) => {
        let bin = 0;
        let rem, i = 1,
            step = 1;
        while (value != 0) {
            rem = value % 2;
            value = parseInt(value / 2);
            bin = bin + rem * i;
            i = i * 10;
        }
        return bin;
    },
    "Hex To Binary Converter": (value) => {
        return ("00000000" + (parseInt(value, 16)).toString(2)).substr(-8);
    },
    "Octal To Binary Converter": (value) => {
        let decimal_value = functions["Octal To Decimal Converter"](value);
        return functions["Decimal To Binary Converter"](decimal_value);
    },
    "Binary To Hex Converter": (value) => {
        let decimal_value = functions["Binary To Decimal Converter"](value);
        return decimal_value.toString(16);
    },
    "Decimal To Hex Converter": (value) => {
        return value.toString(16);
    },
    "Octal To Hex Converter": (value) => {
        let decimal_value = parseInt(value, 8);
        return decimal_value.toString(16);
    },
    "Binary To Octal Converter": (value) => {
        let decimal_value = functions["Binary To Decimal Converter"](value);
        return functions["Decimal To Octal Converter"](decimal_value);
    },
    "Decimal To Octal Converter": (value) => {
        return value.toString(8);
    },
    "Hex To Octal Converter": (value) => {
        let decimal_value = parseInt(functions["Hex To Decimal Converter"](value));
        return decimal_value.toString(8);
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