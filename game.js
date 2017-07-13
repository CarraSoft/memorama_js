/*// Creamos un arreglo para guarda las imagenes (2 veces c/u) y despues cambios su orden aleatoriamente
var images = [];
for (var i = 0; i < 8; i++) { 
  var img = 'img/cat0' + i + '.jpg';
  images.push(img);
  images.push(img);
}
randomizeImages();

// Ordenaremos las imagenes en una lista y ocultaremos su visibilidad (boca abajo)
var lista = "<ol>"; 
for (var i = 0; i < 16; i++) { 
  lista += "<li>";
  lista += "<img style='display:none' src = '" + images[i] + "'/>";
  lista += "</li>";
}
lista += "</ol>";
document.getElementById("container").innerHTML = lista;

//
NodeList.prototype.addEventListener = function(event, func) {
    this.forEach(function(content, item) {
       content.addEventListener(event, func);
    });
}

// Agregamos un escuchador de eventos a cada tarjeta
var elements = document.querySelectorAll("li");
elements.addEventListener("click", voltearCarta);

var guess1 = "";
var guess2 = "";
var count = 0;

function voltearCarta() {
  if(count < 2 && this.firstChild.className != 'match') {
    count ++;
    this.firstChild.style.display = "block";
    this.firstChild.className = "face-up";

    // Intento 1
    if(count === 1) {
      guess1 = this.firstChild.getAttribute("src");
    }
    // Intento 2
    else {
      guess2 = this.firstChild.getAttribute("src");
      // Apartir del segundo intento, comenzamos a revisar si son iguales

      // Acierto!
      if(guess1 == guess2) {
        console.log("Match :)");
        var correct = document.querySelectorAll('img[src="' + this.firstChild.getAttribute("src") + '"]');
        correct[0].className = "match";
        correct[1].className = "match";

      }
      // No acertó :(
      else {
        console.log("No Match :(");
        // Buscamos todos las imagenes que no hayan acertado
        var incorrect = document.querySelectorAll('img:not(.match)');
        // Y las ocultamos
        setTimeout(function() {
        incorrect.forEach(function(el){ 
          el.style.display = "none";
          el.classList.remove("face-up");
        });
        }, 1000);
      }
      // Reiniciamos
      count = 0;
    }
  }
}

// Reordenar aleatoriamente las imagenes
function randomizeImages(){
  Array.prototype.randomize = function() {
    var i = this.length, j, temp;
    while ( --i )
    {
      j = Math.floor( Math.random() * (i - 1) );
      temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    }
  };  
  images.randomize();
}*/