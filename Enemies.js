'use strict';

function Enemy(canvas, randomX) {
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
	this.x = randomX;
	this.y = this.canvas.height;
	this.velocity = 3;
	this.direction = 0;
	this.color = 'blue';
	this.width = 20;
	this.height = 20;
}; 

Enemy.prototype.move = function() {
	this.y = this.y + this.direction * this.velocity;
};

Enemy.prototype.draw = function() {
	this.ctx.fillStyle = this.color;
	this.ctx.fillRect(this.x, this.y, this.width, this.height)
};