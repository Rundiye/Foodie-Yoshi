'use strict';

function Enemy(canvas, randomX) {
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
	this.x = randomX;
	this.y = 0;
	this.velocity = 6;
	this.direction = 1;
	this.color = 'blue';
	this.width = 30;
	this.height = 30;
}; 

Enemy.prototype.move = function() {
	this.y = this.y + this.direction * this.velocity;
	/*this.x = this.x + 5;*/
};

Enemy.prototype.draw = function() {
	this.ctx.fillStyle = this.color;
	this.ctx.fillRect(this.x, this.y, this.width, this.height)
};