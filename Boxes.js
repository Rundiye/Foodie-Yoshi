'use strict';

function Box(canvas, randomX, isPoison) {
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
	this.x = randomX;
	this.y = 0;
	this.velocity = 5;
	this.direction = 1;
	this.color = 'green';
	this.width = 70;
	this.height = 70;
	this.isPoison = isPoison;
};

Box.prototype.move = function() {
	this.y = this.y + this.direction * this.velocity;
};

Box.prototype.draw = function() {
	var surprise = new Image();
  this.type === 'surprise';
  surprise.src = 'images/UIHere.png';
  this.ctx.drawImage(surprise, this.x, this.y, this.width, this.height);
};
