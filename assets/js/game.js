// What follows after this is called pseudocode. Pseudocode is a plain-language of the steps that an algorithm or applcation must complete.

// Game States
// "Win" - PLayer robot has defated all enemy-robots
//     * Fight all enemy-robots
//     * Defeat each enemy-robot
// "Lose" - Player robot's health is zero or less
var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {  
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSKip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSKip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died!");

        // award player money for winnning
        playerMoney = playerMoney + 20;
        
        // leave while() loop since enemy is dead
        break;
    } 
    else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked" + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <=0) {
        window.alert(playerName + " has died!")
        break;
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};
// repeat and execute as long as the enemy-robot is alive
}
for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round" + ( i + 1) );
    }
    
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;

    // use a debugger to pause script from running and check what's going on at that moment in the code

    // call fight function with enemy-robot
        fight(pickedEnemyName);
    }
   //else {
    //window.alert("You have lost your robot in battle! Game Over!");
    //break;



