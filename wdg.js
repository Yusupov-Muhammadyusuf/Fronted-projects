const words = [
    "program",
    "computer",
    "internet",
    "book",
    "phone",
    "artificial",
    "intelligence",
    "code",
    "communication",
    "school"
];

// Game introduction
alert("Welcome to the Word Guessing Game! \n\n Let me explain the rules: \n\n 1. The computer will think of a word, and you have to guess it. \n 2. You can also choose to start the game yourself (but that's not available yet!). \n\n If you're ready, let's begin!");

// Ask who should start the game
const choose = prompt("Do you want the computer to start first or you? \n\n Choose: \n Computer \n Yourself");
alert(choose);

if (choose === 'Computer') {

    // Computer selects a random word
    const randomIndex = Math.floor(Math.random() * words.length);
    const chooseWord = words[randomIndex];

    // First guess from the player
    const info = prompt(`Computer: I have selected a word. \n\n Hint: The word has ${chooseWord.length} letters.`);

    // If guessed correctly on first try
    if (info.toLowerCase() === chooseWord) {
        alert("✅ You guessed the word correctly!");
    } else {
        let message = "";

        // Show correct letters in correct position
        for (let i = 0; i < chooseWord.length; i++) {
            if (info[i] === chooseWord[i]) {
                message += info[i] + " ";
            } else {
                message += "* ";
            }
        }

        // First failed attempt
        alert(`In your guess "${info}", some letters might exist in the computer's word.\n\nYou have 2 more attempts left.\n\nResult: ${message}`);

        // Second attempt
        const change = prompt("What's your second guess?");
        if (change.toLowerCase() === chooseWord) {
            alert(`🎉 Congratulations! You guessed the word "${chooseWord}" correctly!`);
        } else {
            let message = "";

            for (let i = 0; i < chooseWord.length; i++) {
                if (change[i] === chooseWord[i]) {
                    message += change[i] + " ";
                } else {
                    message += "* ";
                }
            }

            // Last chance
            alert(`Result: ${message} \n\nThis is your final chance. Think carefully!`);

            const lastChange = prompt("Final guess — give it your best!");

            // Ternary check for final guess
            const finalResult = (lastChange.toLowerCase() === chooseWord)
                ? "🎉 Congratulations! You guessed the word correctly!"
                : `❌ Unfortunately, you lost. The correct word was: "${chooseWord}".`;

            // Final result
            alert(finalResult);
        }
    }

} else if (choose === "Yourself") {
    alert("Sorry! \n\n The 'Yourself' option is currently unavailable.");
} else {
    alert("Please type 'Computer' to start the game.\n\nThis is required to begin the game.");
}