class Template {
  constructor() {
    // super();
    //A string of phrases.
    this.titleString = ` Welcome to the SustainaWeb Academy`;
    this.subtitleString = `You are challenged to build a sustainable web design. Your goal is to limit the amount of computation energy through critical design choices.`;
  }
  draw() {
    // Draw a rectangle with rounded corners
    push();
    textAlign(CENTER);
    rectMode(CENTER);
    //x,y, width, height, rounded corners
    rect(width / 2, height / 2, width * 0.7, height * 0.7, 40);
    text(this.titleString,width/2, height*0.25);
    // Set colors
    fill(204, 101, 192);
    stroke(127, 63, 120);
    pop();
  }
}
