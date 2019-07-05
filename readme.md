# FOODIE YOSHI 

## Description

Foodie Yoshi is a 2D game created with HTML, CSS and JavaScript. The elements of the game are based on the mythical Mario game.

It is a one player game and the objective of the game is to collect 7 coins to win. For that, the player has to survive, avoiding the enemies until it achieves the objective.

## MVP (DOM - CANVAS)

The game consists of 4 screens which includes the splashScreen, gameScreen, gameOverScreen and gameWinScreen.

The player is only allowed to move to the right and to the left, boundaries are set for the player, which are the borders of the Canvas.

Player has 3 lives by default and loses a live if it collides with an enemy or surprise Box. Every Pizza collected adds a live to the live counter. 
The coins can be collected after colliding with a Box, but if no luck, it can also be a poisoned Box and rest a live.  

Two counters are set in the game, one for the coins collected and one for the lives left. 

As soon as the player reaches the coin goal wins, and when it has no more lives left, loses.


## Backlog

1- Game start song and sounds for collisions
2- Images 
3- Create diferent enemies
4- Create levels

## Data structure:

### Classes 

Game, Player, Enemies, Boxes, Pizzas.

### Methods

Game: this.startGame(), this.update(), this.clear(), this.checkLives(), this.checkCollisions(), this.checkCollisionsBox(), this.checkCollisionsPizza(),this.gameOverCallback(), this.gameWinCallback(). 

Player: this.move(), this.draw(), this.setDirection().

Enemies: this.move(), this.draw().

Boxes: this.move(), this.draw().

Pizza: this.move(), this.draw().


## States y States Transitions 

splashScreen: Starting screen with a start button which redirects the user to the gameScreen.

gameScreen: A screen with the game canvas and the coin/lives counter. When the user loses, it switches to the gameOverScreen, on the contrary, if there is a win, it goes to yhe gameWinScreen.

gameOverScreen: There is a button to restart the game, which redirects the user to the gameScreen. The game starts directly.

gameWinScreen: There is a button to restart the game, which redirects the user to the gameScreen. The game starts directly.


## Task

 1- Create 3 screens
 2- Transition of screens
 3- Create Game Loop
 4- Create Player
 5- Create Enemies
 6- Create Boxes and Pizzas(extra lives)
 7- Coin counter and lives counter
 8- Apply images and sounds
 9- Set boundaries
 10- Apply styles with css


## Links 

### Git

[Link Repo] https://github.com/Rundiye/Foodie-Yoshi
[Link Deploy] https://rundiye.github.io/Foodie-Yoshi/

### Slides

URls for the project presentation: 