'use strict';

function Pizza(canvas, randomX) {
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
	this.x = randomX;
	this.y = 0;
	this.velocity = 5;
	this.direction = 1;
	this.width = 65;
	this.height = 65;
};

Pizza.prototype.move = function() {
	this.y = this.y + this.direction * this.velocity;
};

Pizza.prototype.draw = function() {
  var pizza = new Image();
  this.type === 'pizza';
  pizza.src = 'images/pizza.png';
  
  this.ctx.drawImage(pizza, this.x, this.y, this.width, this.height);
};