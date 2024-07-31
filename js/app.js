// Creación de variables
const cantidadInicial = document.getElementById("cantidadInicial");
const monedaEscogida = document.getElementById("monedaEscogida");
const formEntrada = document.getElementById("formEntrada");
const error = document.getElementById("error");
const infoMoneda = document.getElementById("infoMoneda");
const calculoEuros = document.getElementById("calculoEuros")
const calculoLibras = document.getElementById("calculoLibras")
const calculoDolares = document.getElementById("calculoDolares")
const calculoDirhams = document.getElementById("calculoDirhams")
const botonReiniciar = document.getElementById("botonReiniciar")

function cambiarMoneda(event) {
   // Expresion regex para detectar letras 
   if (cantidadInicial.value.match(/[a-zA-Z]/)) {
        console.log("Se ha introducido una letra");
        error.innerText = "La cantidad debe de ser un número.";
        event.preventDefault();
        cantidadInicial.focus();
        return false;
    }
  
    else if (monedaEscogida.value == "0") {
        console.log("No se ha indicado ninguna moneda");
        error.innerText = "Por favor, escoge una moneda.";
        event.preventDefault();
        monedaEscogida.focus();
        return false;
    }

    infoMoneda.innerText = "";
    error.innerText = "";
    const nombreMoneda = monedaEscogida.options[monedaEscogida.selectedIndex].text;
    console.log("La moneda escogida es: " + nombreMoneda);
    infoMoneda.innerText = "La moneda escogida es: " + nombreMoneda;

    const cantidad = parseFloat(cantidadInicial.value)

    if (monedaEscogida.value == "1") { 
        const EurosCalculo = cantidad;
        const EurosLibras = cantidad * 0.87;
        const EurosDolares = cantidad * 1.10;
        const EurosDirhams = cantidad * 4.05;

        calculoEuros.value = EurosCalculo.toFixed(2); // Coger 2 decimales
        calculoLibras.value = EurosLibras.toFixed(2);
        calculoDolares.value = EurosDolares.toFixed(2);
        calculoDirhams.value = EurosDirhams.toFixed(2);
    }
    else if (monedaEscogida.value == "2") { 
        const EurosCalculo = cantidad / 0.87;
        const EurosLibras = cantidad;
        const EurosDolares = EurosCalculo * 1.10;
        const EurosDirhams = EurosCalculo * 4.05;

        calculoEuros.value = EurosCalculo.toFixed(2); 
        calculoLibras.value = EurosLibras.toFixed(2);
        calculoDolares.value = EurosDolares.toFixed(2);
        calculoDirhams.value = EurosDirhams.toFixed(2);
    }
    else if (monedaEscogida.value == "3") { 
        const EurosCalculo = cantidad / 1.10;
        const EurosLibras = EurosCalculo * 0.87;
        const EurosDolares = cantidad;
        const EurosDirhams = EurosCalculo * 4.05;

        calculoEuros.value = EurosCalculo.toFixed(2); 
        calculoLibras.value = EurosLibras.toFixed(2);
        calculoDolares.value = EurosDolares.toFixed(2);
        calculoDirhams.value = EurosDirhams.toFixed(2);
    }
    else if (monedaEscogida.value == "4") { 
        const EurosCalculo = cantidad / 4.05;
        const EurosLibras = EurosCalculo * 0.87;
        const EurosDolares = EurosCalculo * 1.10;
        const EurosDirhams = cantidad;

        calculoEuros.value = EurosCalculo.toFixed(2);
        calculoLibras.value = EurosLibras.toFixed(2);
        calculoDolares.value = EurosDolares.toFixed(2);
        calculoDirhams.value = EurosDirhams.toFixed(2);
    }
    event.preventDefault(); // No envia el form
}

function reinicioForm() {
    cantidadInicial.value = "";
    monedaEscogida.value = "0"; 
    
    // Restablecer campos de resultados
    calculoEuros.value = "";
    calculoLibras.value = "";
    calculoDolares.value = "";
    calculoDirhams.value = "";
    
    infoMoneda.innerText = "";
    error.innerText = "";
}

formEntrada.addEventListener('submit', cambiarMoneda);
botonReiniciar.addEventListener('click', reinicioForm); // No es submit porq no manda formulario ni pollas
