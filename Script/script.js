var btnMenu=document.getElementById("btnmenu");
var varNav=document.getElementById("header__nav");

/**
 * 
 *Funcion para que aparezca y desaparezca una clase determinada
 */
function claseMostrar() {
    varNav.classList.toggle("mostrar");

}

btnMenu.addEventListener("click",claseMostrar);