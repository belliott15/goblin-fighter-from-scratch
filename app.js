import { renderGoblins } from "./render-utils.js";
// import functions and grab DOM elements
const characterDisplayEl = document.querySelector('#character-display');
const characterHPEl = document.querySelector('#character-hp');
// const characterDropdownEl = document.querySelector('#character-selector');

const goblinsDefeatedEl = document.querySelector('#goblins-defeated');

const goblinInputEl = document.getElementById('goblin-input');
const goblinSubmitButton = document.getElementById('submit-button');
const goblinDisplayEl = document.getElementById('display-goblins');

console.log(characterDisplayEl, characterHPEl, goblinsDefeatedEl, goblinInputEl, 
    goblinSubmitButton, displayGoblinsEl);
// let state
let characterHP = 10;
let defeatedGoblinCount = 0;

let goblinArr = [
    {
        name: 'Cody',
        hp: 10
    },
    {
        name: 'Justin',
        hp: 7
    }, 
    {
        name: 'Susan',
        hp: 7
    }
];

// set event listeners 
goblinSubmitButton.addEventListener('submit', (event) => {
//dont forget prevent default
    event.preventDefault(); 
// use form data
    const data = new FormData(goblinSubmitButton);
    
    const newGoblin = {
      name: data.get('goblin-name'), 
      hp: Math.floor(Math.random() * 10);
    }
// display goblin function
// clear the input values
    goblinInputEl.textContent = '';
});

function displayGoblins() {
  //clear goblin dom
  goblinDisplayEl.textContent = '';
  //render goblin function goes somewhere in here
  for (let goblin of goblinArr){
    const newGoblin = renderGoblins(goblin);
  }
  // add event listener to the goblin div
}

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
