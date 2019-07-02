'use strict';

function Box(canvas, randomX) {
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
	this.x = randomX;
	this.y = this.canvas.height;
	this.velocity = 2;
	this.direction = 1;
	this.color = 'green';
	this.width = 20;
	this.height = 20;


};

Box.prototype.move = function() {
	this.y = this.y + this.direction * this.velocity;
};

Box.prototype.draw = function() {
	
	var pizza = new Image();
  this.type === 'pizza';
  egg.src = 'images/pizza.png';
  
  this.ctx.drawImage(pizza, this.x, this.y, this.width, this.height);
};
