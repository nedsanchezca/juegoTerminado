
function Personaje(){
	this.x = 50;
	this.y = 50;
	this.xspeed = 0;
	this.yspeed = 0;

	var char = loadImage("imagenes/Sonic01.png")

	this.dir = function(x, y){
		this.xspeed = x;
		this.yspeed = y;
	}

	this.colision = function(varx, vary){
		this.x = varx;
		this.y = vary;
	}

	this.update = function (){
		if(this.x >= 800 - 15){
			this.x = this.x-10;
		} else if(this.y >= 400 - 15){
			this.y = this.y-10;
		} else if(this.x <= 15){
			this.x = this.x + 10;
		} else if(this.y <= 15){
			this.y = this.y + 10;
		}
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;

	}

	this.show = function (){
		fill (255);
		image(char, this.x, this.y);
	}

}
