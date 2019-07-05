'use strict';

function Game(canvas) {
	this.player = null;
	this.boxes = [];
	this.pizza = [];
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
	this.startGameSong = new Audio('sounds/ringtones-super-mario-bros.mp3');
	this.gameOverSong = new Audio('sounds/mario-bros game over.mp3');
	this.coinSong = new Audio('sounds/mario-bros-coin.mp3');
	this.liveSong = new Audio('sounds/mario-bros vida.mp3');
	this.ouchYoshi = new Audio('sounds/yoshi-owowowow.mp3');
};


Game.prototype.startGame = function() {

	this.player = new Player(this.canvas);

	var loop = () => {    
		this.startGameSong.play();

		this.cont++;
		if(Math.random() > 0.97) {
			var randomX = Math.random() * this.canvas.width - 50;
			var newEnemy = new Enemy(this.canvas, randomX);
			this.enemies.push(newEnemy);
		};
	
		if(this.cont===200) {
			var randomX = Math.random() * this.canvas.width - 80;   
			var newPizza = new Pizza(this.canvas, randomX);
			this.pizza.push(newPizza);
		};

		if(this.cont===300) {
			var randomX = Math.random() * this.canvas.width - 70;   
			var isPoison = Math.random() > 0.6 ? true : false;
			var newBox = new Box(this.canvas, randomX, isPoison);
			this.boxes.push(newBox);
			this.cont = 0;
		};
		
		this.update();
		this.clear(); 
		this.draw();
		this.checkCollisions();
		this.checkCollisionsBox();
	
	this.checkCollisionsPizza();

	if(this.isGameOver) {
		this.onGameOver();
		this.startGameSong.pause();
		this.gameOverSong.play();
	} else if(this.isWin) {
		this.onWin();
	} else {
		requestAnimationFrame(loop);
	};

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
	this.pizza.forEach(function(pizza){
		pizza.move();
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
	this.pizza.forEach(function(pizza){
		pizza.draw();
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
			this.ouchYoshi.play();
			
			var liveScore = document.querySelector('#liveCount');
				liveScore.innerHTML = 'Lives : '  + this.player.lives;

			if(this.player.lives === 0) {
				this.isGameOver = true;
			};
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
			this.boxes.splice(index, 1);

			if(box.isPoison){
				this.player.lives--;
				var liveScore = document.querySelector('#liveCount');
				liveScore.innerHTML = 'Lives : '  + this.player.lives;
				if(this.player.lives === 0) {
					this.isGameOver = true;
				}
			} else {
				this.coins++;
				this.coinSong.play();
					if(this.coins === 7) {
						this.isWin = true;
					}

			var coinCount = document.querySelector('#coinCount');
			coinCount.innerHTML = 'Coin Score : ' + this.coins;				
			};
		};
	});	
};


Game.prototype.checkCollisionsPizza = function() {
	this.pizza.forEach((pizza, index) => {

		var rightLeft = this.player.x + this.player.width >= pizza.x;
		var leftRight = this.player.x <= pizza.x + pizza.width;
		var bottomTop = this.player.y + this.player.height >= pizza.y;
		var topBottom = this.player.y <= pizza.y + pizza.height;

		if (rightLeft && leftRight && bottomTop && topBottom){
			this.pizza.splice(index, 1);

			this.player.lives++;
			this.liveSong.play();
			
			var liveScore = document.querySelector('#liveCount');
				liveScore.innerHTML = 'Lives : '  + this.player.lives;

			if(this.player.lives === 0) {
				this.isGameOver = true;
			};
		};
	});	
};


Game.prototype.gameOverCallback = function(callback) {
	this.onGameOver = callback;
};

Game.prototype.gameWinCallback = function(callback) {
	this.onWin = callback;
};