'use strict';

function main() {
	
	var mainElement = document.querySelector('#main-page');

  function buildDom(html){
    mainElement.innerHTML = html;
    return mainElement;
  };


  function createSplashScreen(){
		
		var splashScreen = buildDom(`
      <section id="screen" class="main-page">

      
      <section class="instructions"> 
        <h2 class="typing">Happy Birthday David! ♥</h2>
        <h2 class="dark-grey">Follow the instructions to win the game and collect your gifts!</h2>
        <h3 class="underline">Instructions</h3>
        <p>1. Collect 7 Coins to WIN!</p>
        <p>2. Do not let the <img src="images/brick2.png" width="25px"> touch you! You'll lose 1 life</p>
        <p>3. Earn extra lifes eating <img src="images/pizza.png" width="35px"> :) </p>
        <p>4. With each <img src="images/UIHere.png" width="30px"> you can either lose a life or Win a Coin</p>
        <p class="good-luck">GOOD LUCK!</p>
        <div class="command"><img src="images/commands.png" class="commands"></div>
        </section>
        <button class="button-start">PLAY</button>
      </section>
    `);
    
    var startButton = splashScreen.querySelector('button');
    startButton.addEventListener('click', createGameScreen);
    };


  function createGameScreen(){
        
    var gameScreen = buildDom(`
      <section id="screen" class="game-screen">
      <ul class="score">
      <li id="coinCount"> Coin Score : 0</li>
      <li id="liveCount">Life : 3</li>
      </ul>
				<canvas class="canvas" width="600" height="550">
				</canvas>
    `);
	
		var canvas = document.querySelector('canvas');
    var gameInstance = new Game(canvas);

    gameInstance.gameOverCallback(createGameOverScreen);
    gameInstance.gameWinCallback(createGameWinScreen);
        
    gameInstance.startGame();
    
    
		document.addEventListener('keyup', function(event){
			gameInstance.player.setDirection(0);
		});
		
    document.addEventListener('keydown', function(event){
		
    	if(event.key === 'ArrowRight'){
    		gameInstance.player.setDirection(1);
    		} else if(event.key === 'ArrowLeft'){
 				gameInstance.player.setDirection(-1);
        };	
        event.preventDefault();
    });
  };
	

  function createGameOverScreen(){

    var gameOverScreen = buildDom(`

      <section id="screen" class="game-over">
      	<button class="button-over">Try again</button>
      </section>
    `);
                
    var buttonRestart = gameOverScreen.querySelector('button');
    buttonRestart.addEventListener('click', createGameScreen);
  };
            
    createSplashScreen(); 


  function createGameWinScreen(){

    var gameWinScreen = buildDom(`
      <section id="" class="win-screen">
      <div class="win-text">
        <h2 class="white">YOU WON!</h2>
        <h3 class="dark-grey">I feel very lucky that you have chosen to celebrate your birthday with me!</h3>
        <h3 class="dark-grey">Now click on the gift! Hope you like it!</h3>
        <br>
        <h3>Love, Jundi <img src="images/heart.png" width="30px"></h3>
      </div>
      <div class=win-gift>
        <a href="https://rundiye.github.io/birthday-david/" class="no-style" target="_blank" title="CLICK ME!">
          <img src="images/gift.png" width="135px">
        </a>
        <button>Play again</button>
      </div>
      </section>
    `);
                  
    var buttonRestart = gameWinScreen.querySelector('button');
    buttonRestart.addEventListener('click', createGameScreen);
    };
              
    createSplashScreen(); 
};


window.addEventListener('load', main);





