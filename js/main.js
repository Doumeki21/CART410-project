/**
CART410 - Final Project
Olenka Yuen

(short description)
*/

"use strict";
// let template;
// let buttons;

// //Setup the initial screen size to max devce size & reset all game elements.
// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     document.body.style.overflow = 'hidden'
//     // template = new Template();
//     // buttons = new Button();
//     // buttons.createChoiceButtons();
//     // buttons.drawStart();
//     // reset();
//   }

//   //Perform the program.
// function draw() {
//   background(220);
//   template.draw();
//   // buttons.drawChoices();
//   buttons.drawStart();
//   }


// function displayQuestion() {
//   textSize(24);
//   textAlign(CENTER, CENTER);

//   // Display the question
//   text(question, width / 2, height/4);

//   // Display multiple-choice answers
//   for (let i = 0; i < answers.length; i++) {
//     let buttonY = height/2 + i * 80;

//     // Determine the color based on the score
//     let fillColor;
//     if (answers[i] === correctAnswer) {
//       fillColor = color(0, 255, 0); // Green for the correct answer
//     } else if (answers[i].score >= 8) {
//       fillColor = color(255, 165, 0); // Orange for high score
//     } else {
//       fillColor = color(255, 0, 0); // Red for low score
//     }

//     // Draw the colored answer button
//     fill(fillColor);
//     rect(width / 4, buttonY, width / 2, 60);

//     // Draw the answer text
//     fill(0); // Set the text color to black
//     text(answers[i].text, width / 2, buttonY + 30);

//     // Draw the information icon "i"
//     fill(0, 0, 255);
//     ellipse(width * 3 / 4, buttonY + 30, 20, 20);
//   }
// }

let question;
let answers = [];
let correctAnswer;
let userScore = 0;
let carbonEmission = 0;

let selectedAnswer = -1; // -1 indicates no answer selected

function setup() {
  createCanvas(600, 400);
  setupQuestion();
}

function draw() {
  background(220);

  // Display carbon emission bar
  fill(255, 0, 0);
  rect(0, 0, map(carbonEmission, 0, 100, 0, width), 20);
  fill(0);
  text("Carbon Emission", width / 2, 12);

  // Display question and answers
  displayQuestion();
}

function setupQuestion() {
  // Set up your questions and answers here
  question = "What is the primary cause of global warming?";
  answers = [
    { text: "Burning fossil fuels", score: 10, explanation: "Fossil fuels release greenhouse gases, contributing to global warming." },
    { text: "Deforestation", score: 5, explanation: "Deforestation reduces the number of trees that absorb CO2, impacting the climate." },
    { text: "Volcanic activity", score: 1, explanation: "While volcanic activity releases CO2, it is not the primary cause of global warming." }
  ];
  correctAnswer = answers[0];
}

function displayQuestion() {
  textSize(16);
  textAlign(CENTER, CENTER);

  // Display the question
  text(question, width / 2, 50);

  // Display multiple-choice answers
  for (let i = 0; i < answers.length; i++) {
    let yPos = 100 + i * 80;

    // Determine the color based on the score (visible only after user clicks)
    let fillColor;
    if (i === selectedAnswer) {
      if (answers[i] === correctAnswer) {
        fillColor = color(0, 255, 0); // Green for the correct answer
      } else if (answers[i].score >= 8) {
        fillColor = color(255, 165, 0); // Orange for high score
      } else {
        fillColor = color(255, 0, 0); // Red for low score
      }
    } else {
      fillColor = color(50); // Dark grey for unselected answers
    }

    // Apply dim effect on hover
    let isHovered = mouseX > width / 4 && mouseX < width * 3 / 4 && mouseY > yPos && mouseY < yPos + 60;
    if (isHovered && selectedAnswer === -1) {
      fillColor = lerpColor(fillColor, color(100), 0.2); // Dim the color on hover
    }

    // Draw the colored answer button
    fill(fillColor);
    rect(width / 4, yPos, width / 2, 60);

    // Draw the answer text (visible by default)
    fill(0); // Set the text color to black
    text(answers[i].text, width / 2, yPos + 30);

    // Draw the information icon "i" (visible only after user clicks)
    if (selectedAnswer !== -1) {
      fill(0, 0, 255);
      ellipse(width * 3 / 4, yPos + 30, 20, 20);
    }
  }
}

function mouseClicked() {
  // Check if the user clicked on an answer button
  for (let i = 0; i < answers.length; i++) {
    let yPos = 100 + i * 80;
    if (
      mouseX > width / 4 &&
      mouseX < width / 4 + width / 2 &&
      mouseY > yPos &&
      mouseY < yPos + 60
    ) {
      // Update scores and carbon emission
      userScore += answers[i].score;
      carbonEmission += 10 - answers[i].score;

      // Log the user's score
      console.log("User Score: " + userScore);

      // Set the selected answer
      selectedAnswer = i;

      // Set up a new question after a delay
      setTimeout(setupQuestion, 1000);
    }
  }
}

// Add bounce animation on hover
function mouseMoved() {
  let isHovered = mouseX > width / 4 && mouseX < width * 3 / 4;
  for (let i = 0; i < answers.length; i++) {
    let yPos = 100 + i * 80;
    if (isHovered && mouseY > yPos && mouseY < yPos + 60) {
      if (selectedAnswer === -1) {
        // Apply bounce animation
        let bounceFactor = sin(frameCount * 0.1) * 5;
        yPos += bounceFactor;
      }
    }
  }
}
