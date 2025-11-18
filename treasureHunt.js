let playerName = "Adventurer";
let coins = 50;
let health = 10;
let score = 0;
let hasKey = false;
let maxRooms = 8;
let roomCounter = 1;
let trapFlag = true;
let finalStatus = "UNDETERMINED";

console.log("=======================================");
console.log("   *** The 100-Line Treasure Hunt *** ");
console.log("=======================================");

while (roomCounter <= maxRooms) {
    console.log(`\n--- Entering Room ${roomCounter} / ${maxRooms} ---`);

    let roomEvent = roomCounter % 6;

    switch (roomEvent) {
        case 0:
            console.log("A friendly **Merchant** appears! Offering wares.");
            if (coins >= 20) {
                console.log("You buy a shield for 20 coins (+3 Health).");
                coins -= 20;
                health += 3;
                score += 5;
            } else {
                console.log("Not enough coins. You politely decline.");
            }
            break;

        case 1:
            console.log("A hidden **Pressure Plate Trap** is triggered!");
            if (trapFlag === true) {
                console.log("You suffer damage! (-5 Health, -10 Score)");
                health -= 5;
                score -= 10;
                trapFlag = false;
            } else {
                console.log("The trap is already sprung. You pass safely.");
            }
            break;

        case 2:
            let treasureBonus = 15;
            console.log(`You find a large **Treasure Chest**! (+${treasureBonus} Coins, +15 Score)`);
            coins += treasureBonus;
            score += 15;
            break;

        case 3:
            console.log("A heavy, **Locked Door** blocks your path. You need a key.");
            if (hasKey === true) {
                console.log("You use your key and open a secret passage! (+50 Score)");
                score += 50;
            } else {
                console.log("You can't open it. You must find another way around.");
            }
            break;

        case 4:
            console.log("A shimmering **Puzzle Room**. Solve it to gain a key.");
            let puzzleAttempt = coins / 10;
            if (puzzleAttempt > 3 && !hasKey) {
                console.log("The solution clicks! A **Bronze Key** materializes!");
                hasKey = true;
                score += 25;
            } else {
                console.log("The puzzle remains unsolved. You move on.");
            }
            break;

        case 5:
            console.log("You discover a hidden **Bonus Room** with a healing potion.");
            health += 4;
            console.log("Health restored! (+4 Health)");
            break;

        default:
            console.log("An unexpected anomaly...");
            break;
    }

    if (health <= 0) {
        console.log("\n*** Your health dropped to zero! Game Over. ***");
        finalStatus = "LOSE (Zero Health)";
        break;
    }

    console.log(`Current Stats: Health: ${health}, Coins: ${coins}, Score: ${score}, Key: ${hasKey}`);

    roomCounter++;
}

if (roomCounter > maxRooms && health > 0) {
    if (score >= 150 && hasKey === true) {
        finalStatus = "WIN (Master Adventurer)";
    } else if (score >= 100) {
        finalStatus = "WIN (Completed Journey)";
    } else {
        finalStatus = "LOSE (Completed but Underperformed)";
    }
}

console.log("\n=======================================");
console.log("   *** Treasure Hunt - Game Summary ***");
console.log("=======================================");
console.log(`Player Name: ${playerName}`);
console.log(`Final Coins: ${coins}`);
console.log(`Final Health: ${health}`);
console.log(`Final Score: ${score}`);
console.log(`Has Key: ${hasKey}`);
console.log(`Status: ${finalStatus}`);
console.log("=======================================");