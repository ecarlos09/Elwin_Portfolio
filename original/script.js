//Declare function that displays welcome message when user is ready to play
//Assign to a constant variable called displayName
const displayName = () => {
    //Target user input and store to variable
    let name = document.getElementById("playerName").value;
    //Display a personalised welcome message when the user submits their name
    //Use string interpolation to access the name variable inside the string
    begin_game.innerHTML = `Welcome ${name}!  Click "Show Statements" to view my three statements.  Select the one that you think is false.  If you are correct, there might be a little reward (or punishment) waiting for you ...  Good luck!`;
  }
  
  //Declare function that display/hides content on button click
  const showAndHide = (elementId) => {
    //Target element to be hidden/displayed when mouse click is activated
    let element = document.getElementById(`${elementId}`);
    //Define logic that toggles the display status of the style attribute
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
  
  //Declare answer checking function
  const answerCheck = () => {
    //Target radio buttons and store them to variables
    let correct = document.getElementById("statementOne");
    let incorrectOne = document.getElementById("statementTwo");
    let incorrectTwo = document.getElementById("statementThree");
    //Target the congratulations and commiserations messages and store them to variables
    const congrats = document.getElementById("correct");
    const unlucky = document.getElementById("incorrect");
    //Define logic that displays congratulations message when correct answer is selected, and a commiserations message when the incorrect answer is selected.
      //Display congratulations message when correct answer is shown and make sure commiserations message is hidden
    if (correct.checked) {
      congrats.style.display = 'block';
      unlucky.style.display = 'none';
      //Display commiserations message when incorrect answer is shown and make sure congratulations message is hidden
    } else if (incorrectOne.checked) {
      congrats.style.display = 'none';
      unlucky.style.display = 'block';
      //Display commiserations message when incorrect answer is shown and make sure congratulations message is hidden
    } else if (incorrectTwo.checked){
      congrats.style.display = 'none';
      unlucky.style.display = 'block';
      //Define default case that hides both the congratulations and commiserations messages if something goes wrong!
    } else {
      congrats.style.display = 'none';
      unlucky.style.display = 'none';    
    }
  } /*Experimented with using case/switch but have not yet figured a way to use it properly for this scenario */