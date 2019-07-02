'use strict';

function Game(canvas) {
	this.player = null;
	this.boxes = null;
	this.enemies = [];
	this.isGameOver = false;
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
	this.onGameOver = null;
	this.coins = 0;
};

Game.prototype.startGame = function() {
	this.player = new Player(this.canvas);

	var loop = () => {    

		if(Math.random() > 0.99) {
			var randomX = Math.random() * this.canvas.height - 20;   
			var newEnemy = new Enemy(this.canvas, randomX);
			this.enemies.push(newEnemy);
		};
		if(Math.random() > 0.99) {
		var randomX = Math.random() * this.canvas.height - 20;   
		var newBox = new Box(this.canvas, randomX);
		this.boxes.push(newBox);
		};
		


		this.update();
		this.clear(); 
		this.draw();
		this.checkCollisions();
		if(!this.isGameOver) {
			requestAnimationFrame(loop);
		} else {
			this.onGameOver();
		};


	
		
	};
	loop();
};

Game.prototype.update = function() {
	this.player.move();
	this.enemies.forEach(function(enemy) {
		enemy.move();
	});
};

Game.prototype.clear = function() {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function() {
	this.player.draw();
	this.enemies.forEach(function(enemy) {
		enemy.draw();
	});
	/*this.boxes.forEach(function(box){
		box.draw();
	});*/

};

Game.prototype.checkCollisions = function() {
	this.enemies.forEach((enemy, index) => {

		var rightLeft = this.player.x + this.player.width >= enemy.x;
		var leftRight = this.player.x <= enemy.x + enemy.width;
		var bottomTop = this.player.y + this.player.height >= enemy.y;
		var topBottom = this.player.y <= enemy.y + enemy.height;

		if (rightLeft && leftRight && bottomTop && topBottom){
			this.enemies.splice(index, 1);
			this.player.lives--;
			if(this.player.lives === 0) {
				this.isGameOver = true;
			}
		};
	});
	
	return true || false 

};

	
Game.prototype.checkScore = function(){
	

	var scoreText = document.querySelector('#score');
  scoreText.innerHTML = `Score = ${this.score}`;
};



Game.prototype.gameOverCallback = function(callback) {
	this.onGameOver = callback;
};