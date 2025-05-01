const imageContainer = document.getElementById('image-container');
const choicesContainer = document.getElementById('choices');
const resultContainer = document.getElementById('result');

// Use any public image URL or replace with your own
const imageURL = "https://drive.google.com/drive/folders/1RbqkAA255sCmdAFPj4Kufp93wHEPc3zu?usp=sharing";

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function generateChoices(correctAnswer) {
  const choices = new Set();
  choices.add(correctAnswer);

  while (choices.size < 5) {
    choices.add(getRandomInt(10));
  }

  return Array.from(choices).sort(() => Math.random() - 0.5); // Shuffle
}

function displayImages(count) {
  imageContainer.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const img = document.createElement('img');
    img.src = imageURL;
    imageContainer.appendChild(img);
  }
}

function displayChoices(choices, correctAnswer) {
  choicesContainer.innerHTML = '';
  resultContainer.textContent = '';

  choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.onclick = () => {
      if (choice === correctAnswer) {
        resultContainer.textContent = "✅ Correct!";
      } else {
        resultContainer.textContent = `❌ Incorrect. It was ${correctAnswer}.`;
      }
      setTimeout(startGame, 2000); // Wait before next round
    };
    choicesContainer.appendChild(button);
  });
}

function startGame() {
  const imageCount = getRandomInt(10);
  const choices = generateChoices(imageCount);

  displayImages(imageCount);
  displayChoices(choices, imageCount);
}

// Start the game on page load
startGame();
