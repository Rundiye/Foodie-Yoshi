'use strict';

function Game(canvas) {
	this.player = null;
	this.boxes = [];
	this.enemies = [];
	this.isGameOver = false;
	this.isWin = false;
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
	this.onGameOver = null;
	this.onWin = null;
	this.coins = 0;
	this.cont = 0;
	this.coinScore = 0;
	this.liveCount = 0;
};

Game.prototype.startGame = function() {
	this.player = new Player(this.canvas);

	var loop = () => {    

		this.cont++;
		if(Math.random() > 0.99) {
			var randomX = Math.random() * this.canvas.height - 20;   
			var newEnemy = new Enemy(this.canvas, randomX);
			this.enemies.push(newEnemy);
		};
		if(this.cont===200) {

		var randomX = Math.random() * this.canvas.height - 20;   
		var isPoison = Math.random() > 0.4 ? true : false;
		var newBox = new Box(this.canvas, randomX, isPoison);
		this.boxes.push(newBox);
		this.cont = 0;
		};
		
		this.update();
		this.clear(); 
		this.draw();
		this.checkCollisions();
		this.checkCollisionsBox();
		if(!this.isGameOver) {
			requestAnimationFrame(loop);
		} else {
			this.onGameOver();
		};
/*
		if(!this.isWin) {
			requestAnimationFrame(loop);
		} else {
			this.onWin();
		};
*/
	};
	loop();
};

Game.prototype.update = function() {
	this.player.move();
	this.enemies.forEach(function(enemy) {
		enemy.move();
	});
	this.boxes.forEach(function(box){
		box.move();
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
	this.boxes.forEach(function(box){
		box.draw();
	});

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
			
			var liveScore = document.querySelector('#liveCount');
				liveScore.innerHTML = 'Lives : '  + this.player.lives;

			if(this.player.lives === 0) {
				this.isGameOver = true;
			}
		};
	});	
	
};


Game.prototype.checkCollisionsBox = function() {
	this.boxes.forEach((box, index) => {

		var rightLeft = this.player.x + this.player.width >= box.x;
		var leftRight = this.player.x <= box.x + box.width;
		var bottomTop = this.player.y + this.player.height >= box.y;
		var topBottom = this.player.y <= box.y + box.height;

		if (rightLeft && leftRight && bottomTop && topBottom){
			console.log(box.isPoison);

			if(box.isPoison){

				this.player.lives--;

				var liveScore = document.querySelector('#liveCount');
				liveScore.innerHTML = 'Lives : '  + this.player.lives;

				if(this.player.lives === 0) {
					this.isGameOver = true;
				}

			} else {
				this.coins++;
				
				var coinCount = document.querySelector('#coinCount');
				coinCount.innerHTML = 'Coin Score : ' + this.coins;

				if(this.coinScore === 2) {
					this.isWin = true;
				}
				this.boxes.splice(index, 1);
			};

			}
		
	});	
	
};


Game.prototype.gameOverCallback = function(callback) {
	this.onGameOver = callback;
};


Game.prototype.gameWinCallback = function(callback) {
	this.onWin = callback;
};