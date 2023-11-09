//Event: Player will first land on this state when starting the program.

//Calling all properties to perform this event.
//Extends: includes sound effect of mouse clicked from the State class.
class Title extends State {
    constructor() {
      super();
      //A string of phrases.
      this.titleString = `UNDER Welcome to the SustainaWeb Academy`;
      this.subtitleString = `You are challenged to build a sustainable web design. Your goal is to limit the amount of computation energy through critical design choices.`;
    }
  
    //Perform the program
    draw() {
      
    }
  
    //Display the title.
    displayTitle() {
      push()
      noStroke();
      fill(255);
      textSize(50);
      textAlign(CENTER);
      text(this.titleString, width / 2, height / 2);
      pop();
  
      push()
      noStroke();
      fill(255);
      textSize(30);
      textAlign(CENTER);
      text(this.subtitleString, width / 2, height / 2 + 100);
      pop();
    }
  
    //Switch from the title screen to the stress game after clicking on the mouse.
    mouseClicked() {
      super.mouseClicked();
      currentState = new StressGame();
    }
  }