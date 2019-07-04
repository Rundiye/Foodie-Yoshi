'use strict';

function main() {
	
	var mainElement = document.querySelector('#main-page');

  function buildDom(html){
      mainElement.innerHTML = html;
      return mainElement;
  };

  function createSplashScreen(){
		
		var splashScreen = buildDom(`
      <section id="screen"class="main-page">
      <h1>Foodie Yoshi</h1> 
      <section class="instructions"> 
        
        <h3>Instructions</h3>
        <p>1- With each Surprise Box you can either lose a life or Win a Coin.</p>
        <p>2- Do not let the Eggs touch you!</p>
        <p>3- Earn extra Lives eating the Pizzas</p>
        <p>4- Collect 7 Coins to WIN!</p>
        </section>
        <button>Start Game</button>
      </section>
    `);
    
    var startButton = splashScreen.querySelector('button');
    startButton.addEventListener('click', createGameScreen);
    };

  function createGameScreen(){
        
    var gameScreen = buildDom(`
      <section id = "screen" class="game-screen">
      <ul class ="score">
      <li id="coinCount"> Coin Score : 0</li>
      <li id="liveCount"> Lives : 3</li>
      </ul>
				<canvas class="canvas" width="700" height="800">
				</canvas>
				
			</ul>
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

    //setTimeout(createGameWinScreen, 3000);
  };
	

  function createGameOverScreen(){

    var gameOverScreen = buildDom(`

      <section id="screen" class="game-over">

      	<button class="button-over">Restart</button>
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





