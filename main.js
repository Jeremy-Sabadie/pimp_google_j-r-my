let centre = document.getElementById('centre')/*appel de "centre" pour définir la variable "centre"*/
let buton = document.getElementById("click")/*appel de "click" pour définir la variable "buton"*/

function afficher(){
  centre.style.display='block'
  buton.style.display='none'
}
//fonction qui affiche "centre" et pas "buton".

buton.onclick = function(){
  afficher();
  setTimeout(popUp,10000);
}
//méthode qui appelle la fonction "afficher" et qui appellera la fonction "popUp" après 10000ms à partir du chargement de la page. 

function popUp(){
  alert( "Hey le site xxxvidsxxx est trop bien. Viens dessus stp please")
}
//fonction qui lance l'alerte.

