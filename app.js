import { renderGoblins } from "./render-utils.js";
// import functions and grab DOM elements
const characterDisplayEl = document.querySelector('#character-display');
const characterHPEl = document.querySelector('#character-hp');
// const characterDropdownEl = document.querySelector('#character-selector');

const goblinsDefeatedEl = document.querySelector('#goblins-defeated');

const goblinInputEl = document.getElementById('goblin-input');
const goblinSubmitButton = document.getElementById('submit-button');
// const goblinFormEl = document.getElementById('submit');
const goblinDisplayEl = document.getElementById('display-goblins');

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
goblinSubmitButton.addEventListener('submit', (e) => {
//dont forget prevent default
    e.preventDefault(); 
// use form data
    const data = new FormData(goblinSubmitButton);
    
    const newGoblin = {
        name: data.get('goblin-name'), 
        hp: Math.floor(Math.random() * 10)
    };
//push new goblin to goblin array
    goblinArr.unshift(newGoblin);
// display goblin function
    displayGoblins();
// clear the input values
    goblinInputEl.textContent = '';
});

function displayGoblins() {
  //clear goblin dom
    goblinDisplayEl.textContent = '';
  //render goblin function goes somewhere in here
    for (let goblin of goblinArr){
        const newGoblin = renderGoblins(goblin);
        if (goblin.hp > 0){
            newGoblin.addEventListener('click', () => {
        //create random hit posibilies for both character and goblin
                if (Math.random() < .33){
                    alert(`${goblin.name} has hit you`);
                    characterHP--;
                } else {
                    alert(`You dodged ${goblin.name}'s attack!`);
                }

                if (Math.random() >.5) {
                    alert (`You hit ${goblin.name}!`)
                    goblin.hp--;
                } else {
                    alert(`${goblin.name} was able to dodge your attack.`);
                }
        // if goblin hits 0 increase goblin defeated count
                if (goblin.hp === 0){
                    defeatedGoblinCount++;
                    // goblin.classList.add('defeated');
                }
        
        // if character hp hits 0 announce game over
                if (characterHP === 0){
                    alert('GameOver');
                    characterDisplayEl.classList.add('defeated');
                }
                characterHPEl.textContent = `HP: ${characterHP}`;
                goblinsDefeatedEl.textContent = `You have defeated ${defeatedGoblinCount} goblins!`;

                displayGoblins();
            });
        }
        goblinDisplayEl.append(newGoblin);
    }}

displayGoblins();
console.log(goblinArr);
  // append to goblin display
  // add event listener to the goblin div


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state