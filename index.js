//Parcial

//1.
var ancho;
var largo;
var per;

ancho = prompt("Ingrese el ancho del rectangulo(cm)", "1");
largo = prompt("Ingrese el largo del rectangulo(cm)", "1");

ancho = parseInt(ancho);
largo = parseInt(largo);

per = (ancho * 2) + (largo * 2);

alert("El perimetro del rectangulo es: " + per + " cm");

//2.
function mostrar(){
    var nombre;
    var localidad;

    nombre = document.getElementById("elNombre").value;
    localidad = document.getElementById("laLocalidad").value;

    alert("Usted es " + nombre + " y vive en la localidad " + localidad);
}

//3.
function mostrar(){
    var precio;
    var porcentaje;
    var precioFinal;

    precio = prompt("Ingrese el precio", "1");
    porcentaje = prompt("Ingrese el porcentaje", "1");

    precio = parseInt(precio);
    porcentaje = parseInt(porcentaje);

    precioFinal = precio * porcentaje / 100;
    precioFinal = precio - precioFinal;

    document.getElementById("elPrecioFinal").value = precioFinal;
}

//4.
function mostrar(){
    var num1;
    var num2;
    var res;

    num1 = prompt("Ingrese un numero", "1");
    num2 = prompt("Ingrese un numero", "1");

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    

    if(num1 == num2)
        alert("Los 2 numeros son iguales");
    else if(num1 > num2){
        res = num1 - num2;
        alert("La resta es " + res);
    }
    else if(num1 < num2){
        res = num1 + num2;
    
        if(res > 10){
            alert("La suma es " + res + " y supero el 10");
        }else{
            alert("La suma es " + res);
        }
    }
}

//5.
function mostrar(){
    var planeta;

    planeta = prompt("Ingrese un planeta", "tierra");

    switch (planeta) {
        case "tierra":
            alert("Aca vivimos");
            break;

        case "mercurio":
            alert("Aca hace mas calor");
            break;

        case "venus":
            alert("Aca hace mas calor");
            break;
        
        case "marte":
            alert("Aca hace mas frio");
            break;

        case "neptuno":
            alert("Aca hace mas frio");
            break;

        case "saturno":
        alert("Aca hace mas frio");
        break;

        case "jupiter":
        alert("Aca hace mas frio");
        break;

        default:
            alert("No es un planeta valido");
            break;
    }
}

//6.
function mostrar(){
    var hora;

    hora = document.getElementById('laHora').value;
    hora = parseInt(hora);

    switch (hora) {
        case 6:
            alert("Es de mañana");
            break;

        case 12:
            alert("Es de tarde");
            break;
    
        default:
            if(hora < 0 || hora > 24){
                alert("Hora no valida");
            }
            else if(hora > 19 && hora < 24){
                alert("Es de noche");
            }
            else if(hora > 1 && hora < 6){
                alert("Es de noche");
            }
                
            break;
    }
}

//7.
    function mostrar(){
        var aNotas = []
        var aGenero = []
        var cont = 0;
        var nota = 10;
        var generoNota;
        var alumnos = 2;
        var acumNotas = 0;
        var promedio;

        for (let index = 0; index < alumnos; index++) {
            aNotas[index] = prompt("Ingrese la nota", "10");
            aGenero[index] = prompt("Ingrese el genero", "m");
            
            aNotas[index] = parseInt(aNotas[index]);

            if(aNotas[index] >= 6 && aGenero[index] == "m")
                cont++;

            if(aNotas[index] < nota){
                nota = aNotas[index];
                generoNota = aGenero[index];
            }

            acumNotas += aNotas[index]
                
        }

        promedio = acumNotas / alumnos;

        alert("a. " + promedio + " b. " + nota + generoNota + " c. " + cont);
    }

    //8.
    function mostrar(){
        var letra = [];
        var num = [];
        var cont = 0;
        var contPares = 0;
        var contImpares = 0;
        var acumPositivos = 0;
        var contPositivos = 0;
        var acumNegativos = 0;
        var max = -100;
        var min = 100;
        var lMax;
        var lMin;
        var promedio;
        var respuesta;

        do{
            letra[cont] = prompt("Ingrese una letra", "d");

            num[cont] = prompt("Ingrese un numero entre -100 y 100", "-50");

            if(num[cont] < -100 || num[cont] > 100){
                alert("Numero invalido");
                continue;
            }
                

            num[cont] = parseInt(num[cont]);

            //punto a y b
            if(num[cont] % 2 == 0)
                contPares++;
            else
                contImpares++;
            
            //cantidad de 0?

            if(num[cont] > 0){
                acumPositivos += num[cont];
                contPositivos++;
            }
                
            else
                acumNegativos += num[cont];
            
            if(num[cont] > max){
                max = num[cont];
                lMax = letra[cont];
            }
                

            if(num[cont] < min){
                min = num[cont];
                lMin = letra[cont];
            }
            
            cont++;
            respuesta = prompt("Seguir ingresando datos", "s");
        }while(respuesta != "n");
        promedio = acumPositivos / contPositivos;
        document.write("a." + contPares + "\n");
        document.write(`a. ${contPares}\n`);
        document.write("b." + contImpares + "\n");
        document.write("c." + cont + "\n");
        document.write("d." + promedio + "\n");
        document.write("e." + acumNegativos + "\n");
        document.write("f. Max: " + max + lMax + "min: " + min + lMin);
        
        // ( d , -150(mal) , -50(bien))
        // ( z , 0)
        // ( g , 20)
        // ( a , 150(mal) , 0(bien))
        // ( b , 3)
        // ( k , 7)
    }

    //9
    function mostrar(){
        var marca = [];
        var peso = [];
        var temperatura = [];
        var max = 1;
        var min = 100;
        var contPares = 0;
        var marcaPesada;
        var contTemperatura = 0;
        var acumPeso = 0;
        var cont = 0;

        do {
            marca[cont] = prompt("Ingresar marca");


            peso[cont] = prompt("Ingresar peso menor a 100 y mayor a 1");
            while(isNaN(peso[cont]) || peso[cont] >= 100 ||  peso[cont] <= 1)
            {
                alert("Error");
                peso[cont] = prompt("Ingresar peso menor a 100 y mayor a 1");
            }

            temperatura[cont] = prompt("Ingresar temperatura menor a 30 y mayor a -30");
            while(isNaN(temperatura[cont]) || temperatura[cont] >= 30 ||  temperatura[cont] <= -30)
            {
                alert("Error");
                temperatura[cont] = prompt("Ingresar temperatura menor a 30 y mayor a -30");
            }

            if(temperatura[cont] % 2 == 0){
                contPares++;
            }

            if(max < peso[cont]){
                max = peso[cont];
                marcaPesada = marca[cont];
            }

            if(min > peso[cont]){
                min = peso[cont];
            }

            temperatura[cont] = parseInt(temperatura[cont]);
            peso[cont] = parseInt(peso[cont]);

            if(temperatura[cont] < 0){
                contTemperatura++;
            }

            acumPeso += peso[cont];

            cont++;
            var respuesta = prompt("Seguir ingresando datos", "s/n");
        } while (respuesta != "n");

        var promedio = acumPeso / cont;

        document.write("A." + " " + contPares + "\n");
        document.write("B." + " " + marcaPesada + "\n");
        document.write("C." + " " + contTemperatura + "\n");
        document.write("D." + " " + promedio + "\n");
        document.write("F." + " " + max + " " + min + "\n");

        // Testeo con los siguientes valores
        // (m=pepito;p = 50; t =-300(mal) ,-30(bien) )
        // (m=teem;p = 10; t =0 )
        // (m=llut;p = 150(mal), 15(bien); t =-13 )
        // (m=fpy;p = 45; t =-12 )

        //a. 3 b. pepito c. 3 d. 30 f. 50 y 10
    }

