'use strict';

function main() {
	
	var mainElement = document.querySelector('#main-page');

  function buildDom(html){
      mainElement.innerHTML = html;
      return mainElement;
  };

  function createSplashScreen(){
		
		var splashScreen = buildDom(`
      <section>
        <h1>Foodie Yoshi</h1>
        <h3>Instructions</h3>
				<p>1- Collect 3 Coins to Save Yoshi!</p>
				<p>2- Do not let the Eggs touch you!</p>
        <button>Start Game</button>
      </section>
    `);
    
    var startButton = splashScreen.querySelector('button');
    startButton.addEventListener('click', createGameScreen);
    };

  function createGameScreen(){
        
    var gameScreen = buildDom(`
      <section>
        <canvas class="canvas" width="750" height="900"></canvas>
      </section>
    `);
		
		var canvasElement = document.querySelector('canvas');
    var gameInstance = new Game(canvasElement);
    gameInstance.gameOverCallback(createGameOverScreen);
        
		gameInstance.startGame();
		
    document.addEventListener('keyright', function(event){
    	if(event.key === 'ArrowRight'){
    		gameInstance.player.setDirection(1);
    		} else if(event.key === 'ArrowLeft'){
 				gameInstance.player.setDirection(-1);
    		}
  	});
        
  };
        
  function createGameOverScreen(){

    var gameOverScreen = buildDom(`
      <section>
      	<h1>Game Over</h1>
      	<button>Restart</button>
      </section>
    `);
                
    var buttonRestart = gameOverScreen.querySelector('button');
    buttonRestart.addEventListener('click', createGameScreen);
  };
            
    createSplashScreen(); 
};

window.addEventListener('load', main);



















window.addEventListener('load', main);