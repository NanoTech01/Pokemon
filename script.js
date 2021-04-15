//sets the game to play
let gameState = 1;
//sets the pokemon selection stage to true so you could choose your pokemon
let menu = true;
//creates empty variables for when the game ends and if you want to play again
let victory, restart;
//sets array for the player's properties
var player = ['health', 'energy'];
//sets array for the pokemon's attack names
var pokemon = ['atk1', 'atk2', 'atk3'];
//sets array for the enemy's health
var com = ['health'];
//tells the player the pokemons and the corsponding numbers to enter
  alert("Pokemon: CHARIZARD(1) ,BULBASAUR(2) ,SQURITLE(3)");
//executes everything in the brackets until the player stops the program
while(gameState === 1){
//executes everything in the bracket until the player chooses their pokemon
  while(menu){
//asks what pokemon the player wants to play as
  var choice = prompt("Choose your pokemon.");
//makes the player's choice into lowercase format to help with the comparison under this line
  choice = choice.toLowerCase();
//sets the player's health, energy, damage and names of attacks depending on the pokemon they choose. if the choice is invalid, it will ask what pokemon to use again

  while(choice != "1" && choice != "2" && choice != "3"){
    alert("That's not in your inventory.")
    choice = prompt("Choose your pokemon.");
  }

  if(choice === '1'){
    player[0] = 78;
    player[1] = 288; 
    player[2] = 40;
    pokemon[0] = 'scratch';
    player[3] = 40;
    pokemon[1] = 'ember';
    player[4] = 95;
    pokemon[2] = 'flamethrower';
    choice = "charizard";
  } else if(choice === '2'){
    player[0] = 60;
    player[1] = 267;
    player[2] = 35;
    pokemon[0] = 'tackle';
    player[3] = 35;
    pokemon[1] = 'vine whip';
    player[4] = 90;
    pokemon[2] = 'take down';
    choice = "bulbasaur";
  } else if(choice === '3'){
    player[0] = 44;
    player[1] = 300;
    player[2] = 50;
    pokemon[0] = 'tackle';
    player[3] = 40;
    pokemon[1] = 'water gun';
    player[4] = 40;
    pokemon[2] = 'bubble'; 
    choice = "squirtle";
  }
//tells your pokemon's name
  alert('Your pokemon is ' + choice.toUpperCase() + '.');
//lists the attack names and corsponding numbers for their pokemon
  alert("Moves: " + pokemon[0].toUpperCase() + ' (1), ' + pokemon[1].toUpperCase() + ' (2) and ' + pokemon[2].toUpperCase() + ' (3).')
//sets a random number between 40 and 70 for the health of the enemy
  com[0] = Math.floor(Math.random() * 70 + 40);
//tells the player the enemy's health
  alert("Your enemy: " + com[0]);
//sets menu to false so that you could continue to the battle
  menu = false;
}
//executes everything in the bracket until game is over
while(gameState !== 2){
//asks the user what attack to use
  var attack = prompt("choose an attack.");
//makes the player's choice into a number datatype to help with the comparison under this line
  attack = parseInt(attack);
//checks if the player's input is invalid, if it is, it will ask for a attack again
  while(attack != 1 && attack != 2 && attack != 3){
    alert(choice + " doesn't know that move.");
    attack = prompt("choose an attack.");
  }
//makes the player's choice into a number datatype to help with the comparison under this line
  attack = parseInt(attack);
//if the player's choice is equal to this pokemon's attack name, it will subtract the enemy's heath with the pokemon's damage value and then displays the enemy's health after the attack
  if(attack === 1){
    com[0] -= player[2];
    player[1] -= 35;
    alert(choice.toUpperCase() + " used " + pokemon[0].toUpperCase() + '.');
    alert("Enemy HP:" + com[0]);
  } else if(attack === pokemon[0] && player[1] < 35){
    alert(choice.toUpperCase() + "does not have enough energy for that.")
    attack = prompt("choose an attack.");
  }
//if the player's choice is equal to this pokemon's attack name, it will subtract the enemy's heath with the pokemon's damage value and then displays the enemy's health after the attack  
  if(attack === 2){
    com[0] -= player[3];
    player[1] -= 25;
    alert(choice.toUpperCase() + " used " + pokemon[1].toUpperCase() + '.');
    alert("Enemy HP:" + com[0]);
  } else if(attack === pokemon[1] && player[1] < 25){
    alert(choice.toUpperCase() + "does not have enough energy for that.")
    attack = prompt("choose an attack.");
  }
//if the player's choice is equal to this pokemon's attack name, it will subtract the enemy's heath with the pokemon's damage value and then displays the enemy's health after the attack
  if(attack === 3){
    com[0] -= player[4];
    player[1] -= 15;
    alert(choice.toUpperCase() + " used " + pokemon[2].toUpperCase() + '.');
    alert("Enemy HP:" + com[0]);
  } else if(attack === pokemon[2] && player[1] < 15){
    alert(choice.toUpperCase() + "does not have enough energy for that.")
    attack = prompt("choose an attack.");
  }
//after every attack, it checks if the enemy's health is equal or lower then 0, if it is, then it stops the playing stage and sets victory to true
  if(com[0] <= 0){
    alert("The enemy fainted.");
    gameState = 2;
    victory = true;
  } else{
    //if not, then the enemy generates a random number...
    var ranAttack = Math.floor(Math.random() * 3 + 1);
    //...and then uses the number to "choose" an attack and then display the player's health after the attack
    if(ranAttack === 1){
      player[0] = player[0] - 40;
      alert("The enemy attacks");
      alert(choice.toUpperCase() + " HP:" + player[0]);
    } else if(ranAttack === 2){
      player[0] = player[0] - 20;
      alert("The enemy attacks");
      alert(choice.toUpperCase() + " HP:" + player[0]);
    }else if(ranAttack === 3){
      player[0] = player[0] - 70;
      alert("The enemy attacks");
      alert(choice.toUpperCase() + " HP:" + player[0]);
    }
//if the player's health is equal or lower then 0, then it stops the playing stage and sets victory to false. if not, then it asks what attack to use
    if(player[0] <= 0){
      alert(choice.toUpperCase() + " fainted.");
      gameState = 2;
    }
  }
}
//when the game is over and if the victory is set to true, then it will congradulate the player. if victory is false, then it will tell the player they lose
  if(gameState === 2 && victory === true){
    alert("You win!");
  }else{
    alert("You lose!");
  }
//asks if the player wants to play again
  restart = confirm("Do you want to play again?");
//if the player answers yes, then it will bring the player back to the pokemon selection stage and sets the game back to play
  if(restart === true){
    gameState = 1;
    menu = true;
    victory = null;
    restart = null;
  }
}