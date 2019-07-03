'use strict';

function main() {
	
	var mainElement = document.querySelector('#main-page');

  function buildDom(html){
      mainElement.innerHTML = html;
      return mainElement;
  };

  function createSplashScreen(){
		
		var splashScreen = buildDom(`
      <section id = "screen">
        <h1>Foodie Yoshi</h1>
        <h3>Instructions</h3>
        <p>1- With each Pizza you can either lose a life or Win a Coin.</p>
        <p>Collect 5 Coins to WIN!</p>
				<p>2- Do not let the Eggs touch you!</p>
        <button>Start Game</button>
      </section>
    `);
    
    var startButton = splashScreen.querySelector('button');
    startButton.addEventListener('click', createGameScreen);
    };

  function createGameScreen(){
        
    var gameScreen = buildDom(`
      <section id = "screen">
      <p id="coinCount"> Coin Score : 0</p>
      <p id="liveCount"> Lives : 3</p>
				<canvas class="canvas" width="700" height="800">
				</canvas>
				
			</section>
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
    });
    //setTimeout(createGameWinScreen, 3000);
  };
	

  function createGameOverScreen(){

    var gameOverScreen = buildDom(`
      <section id = "screen">
      	<h1>Game Over</h1>
      	<button>Restart</button>
      </section>
    `);
                
    var buttonRestart = gameOverScreen.querySelector('button');
    buttonRestart.addEventListener('click', createGameScreen);
  };
            
    createSplashScreen(); 

  function createGameWinScreen(){

    var gameWinScreen = buildDom(`
      <section id = "screen">
      <h1>YOU WON A PIZZA!!</h1>
      <button>Restart</button>
      </section>
      `);
                  
    var buttonRestart = gameWinScreen.querySelector('button');
    buttonRestart.addEventListener('click', createGameScreen);
    };
              
    createSplashScreen(); 
    
};


window.addEventListener('load', main);





