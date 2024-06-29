let NumeroSecreto = 0;
let Intentos = 0;
let ListaNumerosSorteados = [];
let NumeroMaximo = 10;

function AsignarTextoElemento(elemento, texto) {
    let ElementoHTML = document.querySelector(elemento);
    ElementoHTML.innerHTML = texto;
    return;
}

function VerificarIntento(){
    let NumeroUsuario = parseInt(document.getElementById('ValorUsuario').value);
    
    console.log(Intentos);

    if (NumeroSecreto === NumeroUsuario) {
        AsignarTextoElemento('p',`Acertaste el numero en ${Intentos} ${(Intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(NumeroUsuario > NumeroSecreto) {
            AsignarTextoElemento('p','El numero secreto es menor');
        } else {
            AsignarTextoElemento('p','El numero secreto es mayor');
        }
        Intentos ++;
        LimpiarCaja();
    }
    return;
}

function LimpiarCaja() {
    document.querySelector('#ValorUsuario').value = '';
}

function GenerarNumeroSecreto() {
    let NumeroGenerado = Math.floor(Math.random() * NumeroMaximo) + 1;

    if (ListaNumerosSorteados.length == NumeroMaximo) {
        AsignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

    } else {

        if (ListaNumerosSorteados.includes(NumeroGenerado)) {
            return GenerarNumeroSecreto();
        } else {
            ListaNumerosSorteados.push(NumeroGenerado);
            return NumeroGenerado;
        }
    } 
}

function CondicionesIniciales() {
    AsignarTextoElemento('h1','Juego del numero secreto');
    AsignarTextoElemento('p',`Indica un numero del 1 al ${NumeroMaximo}:`);
    NumeroSecreto = GenerarNumeroSecreto();
    Intentos = 1;
}

function ReiniciarJuego() {

    // Limpiar caja
    LimpiarCaja();
    // Indicar mensaje de intervalo de numeros
    // Generar el numero aleatorio
    // Inicializar el numero de intentos
    CondicionesIniciales();
    // Deshabilitar el boton de nuevo juego  
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

CondicionesIniciales();