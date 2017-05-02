function Bomba(x, y){
	this.x = x;
	this.y = y;
	var img = loadImage("imagenes/Mina01.png");

	this.show = function() {
		image(img, x, y);
	}
}
