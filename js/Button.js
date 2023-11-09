class Button {
  constructor() {
    //A string of phrases.
    this.choices = [];
    this.start = {      
        x: width/2,
        y: height * 0.65,
        w: width*0.15,
        h: 100,
        positionBeforeX: 0,
        positionBeforeY: 0
    }
  }

  drawStart() {
    push();
    fill(`black`);
    rectMode(CENTER)
    //last value is rounded corners 
    rect(this.start.x, this.start.y, this.start.w, this.start.h, 50);
    //TEXT
    textAlign(CENTER,CENTER);
    textSize(48);
    fill(255);
    text("Start", this.start.x, this.start.y);
    pop();
}

  // for loop function tht keeps creating until it reaches 4 buttons.
  createChoiceButtons() {
    for (let i = 0; i < 4; i++) {
      this.choices.push( {
        x: i*(width*0.125) + (width*0.3),
        y: height * 0.65,
        w: width*0.10,
        h: 50,
      });
    }
}

drawChoices() {
    push();
    fill(`black`);
    rectMode(CENTER)
    //"let" objects here can be called anything to identify the shapes created in choices array.
    for (let button of this.choices) {
      rect(button.x, button.y, button.w, button.h, 50);
    }
    pop();
  }
}
