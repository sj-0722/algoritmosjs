function suma(){
    let A = 0;
    let B = 0;
    let S = 0;

    alert("Por favor ingrese el primer valor");
    A = parseInt(prompt(""));
    alert("Por favor ingrese el segundo valor"); //Alert no permite saltos de línea en el texto
    B = parseInt(prompt(""));
    S = A + B;
    let R = A - B;
    let M =A * B;
    let D = A / B;
    alert("La suma es: "+S);
}

function Operaciones(){
    let A = 0;
    let B = 0;
    let S = 0;
    let R = 0;
    let M = 0;
    let D = 0;
    alert ("Por favor ingrese primer valor");
    A = parseInt(prompt(""));
    alert ("Por favor ingrese segundo valor");
    B = parseInt(prompt(""));
    S = A + B;
    R = A - B;
    M = A * B;
    D = A / B;

    alert("La Suma es: "+S+"\nLa Resta es: "+R+"\nLa Multiplicación "+M+"\nLa División es: "+D);
}

function Mayor(){
    let A = 0
    alert("Por favor ingrese el primer valor");
    A = parseInt(prompt(""));
    let B = 0
    alert ("Por favor ingrese el segundo valor");
    B = parseInt(prompt(""));

    if (A>B){
        alert("EL número mayor es: "+A);
    }
    else if (B>A){
        alert("EL número mayor es: "+B);
    }
    else{
        alert("Los números son iguales");
    }
}

function Menor(){
    let A = 0;
    let B = 0;
    let C = 0;
    let M;
    alert("Por favor ingrese el primer valor");
    A = parseInt(prompt(""));
    alert("Por favor ingrese el segundo valor");
    B = parseInt(prompt(""));
    alert("Por favor ingrese el tercer valor");
    C = parseInt(prompt(""));
    if (A>=B){
        M=B;
    }
    else {
        M=A;
    }
    if (C<M){
        M=C;
    }
    alert("El número menor es "+M);
}

function Par(){
    let A = 0;
    alert("Por favor ingrese número");
    A = parseInt(promt(""));
    if (A==0){
        alert("El número cero no es par ni impar");
    }
    else if (A%2){
        alert("El número es impar");
    }
    else{
        alert("El número es par");
    }
    alert("El número menor es "+M);
}

function Cuadrado(){
    let A = 0;
    alert("Ingrese valor a calcular");
    A = parseInt(prompt(""));
    alert("El cuadrado del número ingresado es: "+A**2);
}

function Area(){
    let A = 0;
    let B = 0;
    alert("Por favor ingrese la altura del triángulo");
    A = parseInt(prompt(""));
    alert("Por favor ingrese la base del triangulo");
    B = parseInt(prompt(""));
    alert("El área del triángulo es: "+A*B/2);
}

function Convercion(){
    let A = 0
    alert("Ingrese valor de la longitud en metros") 
    A = parseInt(prompt(""));
    alert("El valor de la longitud en centimetros es : "+A*100+"\nEl valor de la longitud en pulgadas es: "+A*39.3701);
}
function Edad(){
    let A = 0;
    let B = 0; 
    let N = 0; 
    alert("Por favor ingrese el primer valor");
    A = parseInt(prompt(""));
    alert("Por favor ingrese el segundo valor");
    B = parseInt(prompt(""));
    N = A - B;
    alert("Su año de nacimiento es: " + N);
}
function Capital(){
    let A = 0;
    let C = 0;
    let I = 1.7;
    let GM =0;
    let GA =0;
    alert("Por favor ingrese el numero de años que desee");
    A = parseInt(prompt(""));
    alert("Por favor ingrese el capital que desee invertir");
    C = parseInt(prompt(""));
    GM = C * I / 100;
    alert("Su ganancia mensual es: " + GM);
    GA = GM * 12 * A; 
    alert("Su ganancia total es: " + GA);

}
function Colegio(){
    let E ="";
    let M ="";
    let N1 = 0;
    let N2 = 0;
    let N3 = 0;
    let N4 = 0;
    let N5 = 0;
    let N6 = 0;
    let N7 = 0;
    let Nota =0;
    alert("Por favor ingrese el nombre del alumno");
    E = parseInt(prompt(""));
    alert("Por favor ingrese la materia");
    M = ("");
    alert("Por favor ingrese las 7 Notas");
    N1,N2,N3,N4,N5,N6,N7 = parseInt(prompt(""));
    Nota = N1+N2+N3+N4+N5+N6+N7/7;
    if (Nota>6.1){
        alert("El alumno aprobo con la nota: " + Nota);
    }
    else if (Nota<6.1){
        alert("El alumno reprobo con la nota: " + Nota);
    }
}

function Manzanas(){
    let peso = 0;
    const precio = 4500;
    let dto = 0;
    let subtotal = 0;
    let descuento = 0;
    let total = 0;

    peso=parseFloat(prompt("Ingrese el peso de las manzanas: "));

    if(peso >0 && peso <=2)
    dto = 0.0;

    else if(peso >=3 && peso <=5)
    dto = 0.1;

    else if(peso >=6 && peso <=10)
    dto = 0.15;

    else if(peso >=11)
    dto = 0.2;

    subtotal = peso*precio;
    descuento = peso*precio*dto;
    total = peso*precio*(1-dto);

  
    alert("Manzanas 1Kg: $4500  "+ 
    "\n" + "Manzanas " + peso + "Kg: $" + subtotal + "\n" + "Descuento(" + "-" + dto + ") $-" + 
    + descuento + "\n" + "Total a pagar $: " + total);
}


function Salario (){
    let horas = 0;
    const salario = 10000;
    const extras = 20000;

    horas = parseInt(prompt("Ingrese las horas laboradas: "));

    let pago = "";
    let horas1 = 0;
    let horasExtras = 0;
    let pagoExtras = 0;
    let total = 0;

    if (horas <= 40) {
        pago = horas * salario;
        horas1 = horas;
        total = pago * 1;
    } 
    else if (horas > 40) {
        pago = 40 * salario;
        pagoExtras = (horas - 40) * extras;
        total = pago + pagoExtras;
        horasExtras = horas - 40;
        horas1 = 40;
    }
    
    alert("- Horas legales laboradas: " + horas1 + "\n" + "- Horas extras: " + horasExtras +
        "\n" + "- Salario: $" + pago + "\n" + "- Pago extras: $" + pagoExtras + "\n" + "- Total: $" + total);
}
