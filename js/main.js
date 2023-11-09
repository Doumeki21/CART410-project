/**
CART410 - Final Project
Olenka Yuen

(short description)
*/

"use strict";
let template;
let buttons;

//Setup the initial screen size to max devce size & reset all game elements.
function setup() {
    createCanvas(windowWidth*0.95, windowHeight*0.95);
    template = new Template();
    buttons = new Button();
    buttons.createChoiceButtons();
    buttons.drawStart();
    // reset();
  }

  //Perform the program.
function draw() {
  background(220);
  template.draw();
  // buttons.drawChoices();
  buttons.drawStart();
  }