class Template {
  constructor() {
    //A string of phrases.
    this.titleString = ` Welcome to the SustainaWeb Academy`;
    this.subtitleString = `You are challenged to build a sustainable web design.\nYour goal is to limit the amount of computation energy through critical design choices.`;
  }
  draw() {
    //FRAME
    push();
    rectMode(CENTER);
    //x,y, width, height, rounded corners
    fill(30);
    rect(width / 2, height / 2, width * 0.7, height * 0.7, 50);
    stroke(217);
    // StrokeWeight(2);
    // pop();
    
    //TEXT
    textAlign(CENTER);
    textSize(48);
    fill(255);
    text(this.titleString,width/2, height*0.3);
    textSize(24);
    text(this.subtitleString, width/2, height*0.4);
    pop();
  }

  mouseClicked() {

  }
}
