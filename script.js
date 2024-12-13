let pantalla = document.getElementById('pantalla');
let operador = '';
let valorAnterior = '';

function agregarValor(valor) {
    pantalla.value += valor;
}

function operar(op) {
    if (pantalla.value !== '') {
        valorAnterior = pantalla.value;
        operador = op;
        pantalla.value = '';
    }
}

function calcular() {
    if (valorAnterior !== '' && operador !== '' && pantalla.value !== '') {
        let resultado;
        let valorActual = parseFloat(pantalla.value);

        switch (operador) {
            case '+':
                resultado = parseFloat(valorAnterior) + valorActual;
                break;
            case '-':
                resultado = parseFloat(valorAnterior) - valorActual;
                break;
            case '*':
                resultado = parseFloat(valorAnterior) * valorActual;
                break;
            case '/':
                resultado = valorActual !== 0 ? parseFloat(valorAnterior) / valorActual : 'Error';
                break;
        }
        pantalla.value = resultado;
        operador = '';
        valorAnterior = '';
    }
}

function limpiar() {
    pantalla.value = '';
    operador = '';
    valorAnterior = '';
}

function eliminar() {
    pantalla.value = pantalla.value.slice(0, -1);
}