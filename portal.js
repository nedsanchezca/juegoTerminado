function Portal(x, y, c){
	this.x = x;
	this.y = y;
	this.c = c;
	var imagen = loadImage("imagenes/portal.png");

	this.show = function() {
		image(imagen, this.x, this.y);
	}
}
