var pantalla = document.getElementById("pantalla");
const numeros = document.getElementsByClassName("numero");
const clear = document.getElementById("clear");
const igual = document.getElementById("igual");
const operador = document.getElementsByClassName("operador");
const git = document.getElementById("GitHub");
const link = document.getElementById("Linkedin");
var opActual = '', opAnterior = '', op;



//concatena los numeros en pantalla de calculadora
for(let i=0; i <= numeros.length-1; i++) {
    numeros[i].addEventListener('click', function() {
        pantalla.textContent += numeros[i].innerText;
        opActual += numeros[i].innerText;//concatena los numeros en el operando actual     
    });
};



//toma el operador
for(let i = 0; i < operador.length; i++) {
    operador[i].addEventListener("click", function(){
        op = operador[i].innerText;
        switchOp(op); //llama a la funcion para cambiar de operando
        pantalla.textContent += op;
    });
};



function switchOp(){
    //reemplaza el operando anterior por el actual y vacia el actual para almacenar otro operando
    opAnterior = opActual;
    opActual = ''
}



function calculo() {
    //definicion de variable para almacenar resultado
    var resultado;

    //variables donde deposita el numero
    const numAnterior = parseFloat(opAnterior);
    const numActual = parseFloat(opActual);
 
    //calculos
    switch(op){
        case "+":
            resultado = numAnterior + numActual;
            break;
        case "-":
            resultado = numAnterior - numActual;
            break;
        case "x":
            resultado = numAnterior * numActual;
            break;
        case "/":
            resultado = numAnterior / numActual;
            break;    
    }
        
        pantalla.textContent = resultado; //añade el resultado a la pantalla
        
        opActual = resultado; //reemplaza operando actual por el resultado 
        opAnterior = ''; //limpia la variable
        op = undefined; //limpia el operador
 
}


//limpia la pantalla, operador y operando
clear.addEventListener('click',function(){
    pantalla.replaceChildren();
    opActual = '';
    opAnterior = '';
    operador = undefined;
});


//eventos al hacer click en botones especiales
igual.addEventListener('click',function(){
    calculo();
});
