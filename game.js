// Guardamos las imagenes dos veces en un array y despues cambios su orden aleatoriamente
var images = [
  'img/cat00.jpg',
  'img/cat00.jpg',
  'img/cat01.jpg',
  'img/cat01.jpg',
  'img/cat02.jpg',
  'img/cat02.jpg',
  'img/cat03.jpg',
  'img/cat03.jpg',
  'img/cat04.jpg',
  'img/cat04.jpg',
  'img/cat05.jpg',
  'img/cat05.jpg',
  'img/cat06.jpg',
  'img/cat06.jpg',
  'img/cat07.jpg',
  'img/cat07.jpg'
];
randomizeImages();

// get images, place them in an array & randomize the order
/*for (var i = 0; i < 8; i++) { 
  var img = 'img/cat0' + i + '.jpg';
  images.push(img);
  images.push(img);
}*/


// Ordenaremos las imagenes en una tabla y ocultaremos su visibilidad (boca abajo)
var output = "<ol>"; 
for (var i = 0; i < 16; i++) { 
  output += "<li>";
  output += "<img style='display:none' src = '" + images[i] + "'/>";
  output += "</li>";
}
output += "</ol>";
document.getElementById("container").innerHTML = output;

var guess1 = "";
var guess2 = "";
var count = 0;

NodeList.prototype.addEventListener = function(event, func) {
    this.forEach(function(content, item) {
       content.addEventListener(event, func);
    });
}

function voltearCarta() {
  if(count < 2 && this.children[0].className != 'match') {
    console.log(this);
    console.log(this.children[0].className);
    count ++;
    this.children[0].style.display = "block";
    this.children[0].className = "face-up";
    console.log();

    // Intento 1
    if(count === 1) {
      guess1 = this.children[0].getAttribute("src");
    }
    // Intento 2
    else {
      guess2 = this.children[0].getAttribute("src");
      // Apartir del segundo intento, comenzamos a revisar si son iguales

      // Acierto!
      if(guess1 == guess2) {
        console.log("Match :)");
        var correct = document.querySelectorAll('img[src="' + this.children[0].getAttribute("src") + '"]');
        correct[0].className = "match";
        correct[1].className = "match";

      }
      // No acertó :(
      else {
        // Buscamos todos las imagenes que no hayan acertado
        var incorrect = document.querySelectorAll('img:not(.match)');
        // Y las ocultamos
        incorrect.forEach(function(el){ 
          el.style.display = "none";
          el.classList.remove("face-up");
        });
      }
      // Reiniciamos
      count = 0;
    }
  }
}

var elements = document.querySelectorAll("li");
elements.addEventListener("click", voltearCarta);

// randomize array of images
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
}