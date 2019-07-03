'use strict';

function Box(canvas, randomX, isPoison) {
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
	this.x = randomX;
	this.y = 0;
	this.velocity = 5;
	this.direction = 1;
	this.color = 'green';
	this.width = 90;
	this.height = 90;
	this.isPoison = isPoison;
};

Box.prototype.move = function() {
	this.y = this.y + this.direction * this.velocity;
};

Box.prototype.draw = function() {
	var pizza = new Image();
  this.type === 'pizza';
  pizza.src = 'images/pizza.png';
  
  this.ctx.drawImage(pizza, this.x, this.y, this.width, this.height);
};
