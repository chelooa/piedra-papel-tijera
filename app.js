
    let piedraUsuario = document.getElementById("piedraMovimiento").addEventListener("click", function() {
        juego("Piedra")});

    let papelUsuario = document.getElementById("papelMovimiento").addEventListener("click", function() {
        juego("Papel")});

    let tijeraUsuario = document.getElementById("tijeraMovimiento").addEventListener("click", function() {
        juego("Tijera")});
 
    function asignarTextoElemento(elemento, texto) {
        let elementoHTML = document.querySelector(elemento);
         elementoHTML.innerHTML = texto;
        return;}

function juego(movimientoUsuario){
    movimientos = ["Piedra","Papel","Tijera"]
    let generarMovimiento = movimientos[Math.floor(Math.random()*3)];
    generarMovimiento;
    if(movimientoUsuario === generarMovimiento){
        asignarTextoElemento('#resultado', 'Has empatado')
        asignarTextoElemento('#parrafoResultado', `Resultado has sacado ${movimientoUsuario} y el sistema ${generarMovimiento}.`)
        
    }else if(movimientoUsuario === "Piedra" && generarMovimiento === "Tijera" ||
             movimientoUsuario === "Papel" && generarMovimiento === "Piedra"  ||
             movimientoUsuario === "Tijera" && generarMovimiento === "Papel"
    ){
        asignarTextoElemento('#resultado', 'Has ganado')
        asignarTextoElemento('#parrafoResultado', `Resultado has sacado ${movimientoUsuario} y el sistema ${generarMovimiento}.`)
    }else{
        asignarTextoElemento('#resultado', 'Has perdido')
        asignarTextoElemento('#parrafoResultado', `Resultado has sacado ${movimientoUsuario} y el sistema ${generarMovimiento}.`)
    }

}
const abrirPopUp = document.querySelectorAll('#piedraMovimiento, #papelMovimiento, #tijeraMovimiento');

const modal = document.getElementById('pop_up');
const cerrarPopUP = document.getElementById('cerrar_pop_up')

abrirPopUp.forEach(element => {
    element.addEventListener('click', () => {
    modal.showModal();
    });
});

cerrarPopUP.addEventListener("click", () =>{
    modal.close();
});
