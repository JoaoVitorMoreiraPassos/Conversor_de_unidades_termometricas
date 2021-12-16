let escala1 = 1;
let escala2 = 1;
let valor1;
let valor2;


function celToFah(date){return (parseFloat(date) * (9 / 5) + 32).toFixed(2);}
function celToKel(date){return (parseFloat(date) + 273.15).toFixed(2);}
function fahToCel(date){return ((parseFloat(date) - 32) * (5 / 9)).toFixed(2);}
function fahToKel(date){return ((parseFloat(date) - 32) * (5 / 9) + 273.15).toFixed(2);}
function kelToCel(date){return (parseFloat(date) - 273.15).toFixed(2);}
function kelToFah(date){return ((parseFloat(date) - 273.15) * (9 / 5) + 32).toFixed(2);}

function redict1(){
    document.getElementById("input2").value = conversao(`${escala1}${escala2}`, document.getElementById("input1").value);
}
function redict2(){
    document.getElementById("input1").value = conversao(`${escala2}${escala1}`, document.getElementById("input2").value);
}

function mudaEscala1(objeto){
    if (objeto.value == 'Celsius'){
        escala1 = 1;
    }else if(objeto.value == 'Fahrenheit'){
        escala1 = 2;
    }else if (objeto.value == 'Kelvin'){
        escala1 = 3;
    }
    redict2();
}

function mudaEscala2(objeto){
    if (objeto.value == 'Celsius'){
        escala2 = 1;
    }else if(objeto.value == 'Fahrenheit'){
        escala2 = 2;
    }else if (objeto.value == 'Kelvin'){
        escala2 = 3;
    }
    redict1();
}

function conversao(type, value){
    switch(type){
        case "12": return celToFah(value); break;
        case "13": return celToKel(value); break;
        case "21": return fahToCel(value); break;
        case "23": return fahToKel(value); break;
        case "31": return kelToCel(value); break;
        case "32": return kelToFah(value); break;
        default: return value; break;
    }
}
