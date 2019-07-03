'use strict';

function Enemy(canvas, randomX) {
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
	this.x = randomX;
	this.y = 0;
	this.velocity = 6;
	this.direction = 1;
	this.color = 'blue';
	this.width = 50;
	this.height = 50;
}; 

Enemy.prototype.move = function() {
	this.y = this.y + this.direction * this.velocity;
	this.x = this.x + 0.5;
};

Enemy.prototype.draw = function() {
	var egg = new Image();
  this.type === 'egg';
  egg.src = 'images/egg.png';
  
  this.ctx.drawImage(egg, this.x, this.y, this.width, this.height);
};