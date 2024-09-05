
    const piedraUsuario = document.getElementById("piedraMovimiento").addEventListener("click", function() {
        juego("Piedra")});

    const papelUsuario = document.getElementById("papelMovimiento").addEventListener("click", function() {
        juego("Papel")});

    const tijeraUsuario = document.getElementById("tijeraMovimiento").addEventListener("click", function() {
        juego("Tijera")});
 
    function asignarTextoElemento(elemento, texto) {
        let elementoHTML = document.querySelector(elemento);
         elementoHTML.innerHTML = texto;
        return;}

    const score = {
        ganadas: 0,
        perdidas: 0,
        empates: 0
    };

function juego(movimientoUsuario){
    movimientos = ["Piedra","Papel","Tijera"]
    let generarMovimiento = movimientos[Math.floor(Math.random()*3)];
    generarMovimiento;
    if(movimientoUsuario === generarMovimiento){
        score.empates += 1;
        asignarTextoElemento('#resultado', 'Has empatado');
        asignarTextoElemento('#parrafoResultado', `Resultado has sacado ${movimientoUsuario} y el sistema ha sacado ${generarMovimiento}.`);
            asignarTextoElemento('#parrafoScore', `Partidas Ganadas: ${score.ganadas} Partidas Perdidas ${score.perdidas} Empates ${score.empates}` );
        
    }else if(movimientoUsuario === "Piedra" && generarMovimiento === "Tijera" ||
             movimientoUsuario === "Papel" && generarMovimiento === "Piedra"  ||
             movimientoUsuario === "Tijera" && generarMovimiento === "Papel"
    ){
        score.ganadas += 1;
        asignarTextoElemento('#resultado', 'Has ganado');
        asignarTextoElemento('#parrafoResultado', `Resultado has sacado ${movimientoUsuario} y el sistema ha sacado ${generarMovimiento}.`);
            asignarTextoElemento('#parrafoScore', `Partidas Ganadas: ${score.ganadas} Partidas Perdidas ${score.perdidas} Empates ${score.empates}` );
    }else{
        score.perdidas += 1;
        asignarTextoElemento('#resultado', 'Has perdido');
        asignarTextoElemento('#parrafoResultado', `Resultado has sacado ${movimientoUsuario} y el sistema ha sacado ${generarMovimiento}.`);
        asignarTextoElemento('#parrafoScore', `Partidas Ganadas: ${score.ganadas} Partidas Perdidas ${score.perdidas} Empates ${score.empates}` );
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
