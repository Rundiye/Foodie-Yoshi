'use strict';

function Player(canvas) {
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
	this.height = 100;
	this.width = 100;
	this.x = (this.canvas.width/2);;   
	this.y = (this.canvas.height) - (this.height /2) - this.height;
	this.lives = 3;
	this.direction = 1;
	this.velocity = 5;
	this.color = 'orange';

	
};

Player.prototype.move = function() {
	this.x = this.x + this.direction * this.velocity;

 if (this.x + this.width >= this.canvas.width) {
	return this.direction = -1;

 } else if (this.x < 0) {
	return this.direction = 1;
 }

};

Player.prototype.draw = function() {
	
var yoshi = new Image();
  this.type === 'yoshi';
  yoshi.src = 'images/Yoshi.jpg';
  this.y = (this.canvas.height) - (this.height /2) - this.height;

  this.ctx.drawImage(yoshi, this.x, this.y, this.width, this.height);
};

Player.prototype.setDirection = function(newDirection) {
	this.direction =  newDirection;
};


