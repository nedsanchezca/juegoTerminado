var personaje;
var direction = 90;
var bombitas = [];
var portales = [];
var movx = 0;
var movy = 0;
var puntuacion = 0;
var vida = 10;
var fondo;
var bool;

function setup() {
  createCanvas(800,400);
  for (var i = 0; i < 4; i++) {
  	var x = floor(random(0, width ));
  	var y = floor(random(0, height));
  	portales[i] = new Portal(x, y, 255);
  }
  for(var i = 0; i < 6; i++){
  	var aux = floor(random(0, width/2));
  	var auy = floor(random(0, width/2));
  	bombitas[i] = new Bomba(aux, auy);
  }
  personaje = new Personaje();
  fondo = loadImage("imagenes/prado.jpg");
}

function draw() {
  background(fondo);
  personaje.update();
  personaje.show();
  translate(0, 0);
  for (var i = portales.length - 1; i >= 0; i--) {
  	portales[i].show();
  }

  for (var i = bombitas.length - 1; i >= 0; i--) {
  	bombitas[i].show();
  }
  text("Puntos: " + puntuacion, 600, 70);
  text("Vida: " + vida, 600, 80);

  personajeRebotaPortal();
  personajeChocaBomba();

}

function personajeRebotaPortal(){
	for(var i = 0; i < portales.length; i++ ){
		if(personaje.x + 15 >= portales[i].x - 15 && personaje.x + 15 <= portales[i].x + 50){	 
			if(personaje.y + 15 >= portales[i].y - 15 && personaje.y + 15 <= portales[i].y + 50){	
				var aux = floor(random(0, width));
				var auy = floor(random(0, length));
				personaje.colision(aux,  auy);
				puntuacion = puntuacion + 1;
			}
	 	}
	}
}

function personajeChocaBomba(){
	for(var i = 0; i < bombitas.length; i++){
		if(personaje.x + 35 >= bombitas[i].x && personaje.x + 35 <= bombitas[i].x + 80){	 
			if(personaje.y + 50 >= bombitas[i].y && personaje.y + 50 <= bombitas[i].y + 80){
				var aux = floor(random(0, width));
				var auy = floor(random(0, length));
				personaje.colision(aux, auy);
				vida = vida -5;
				if(vida <= 0){
					textSize(100);
					text("Ha perdido", 100, 200);
					delay(5000);
				}
			}
	 	}
	}	
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		personaje.dir(0, -2);
	} else if(keyCode === DOWN_ARROW){
		personaje.dir(0, 2);
	} else if(keyCode === RIGHT_ARROW){
		personaje.dir(2, 0);
	} else if(keyCode === LEFT_ARROW){
		personaje.dir(-2, 0);
	}
}
