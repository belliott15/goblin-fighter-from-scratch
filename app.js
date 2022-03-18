import { renderGoblins, renderPotions } from './render-utils.js';
// import functions and grab DOM elements
const characterDisplayEl = document.querySelector('#character-display');
const characterHPEl = document.querySelector('#character-hp');
const characterDropdownEl = document.querySelector('#character-selector');
const characterEl = document.getElementById('character');

const goblinsDefeatedEl = document.querySelector('#goblins-defeated');

const goblinFormEl = document.getElementById('submit');
const goblinDisplayEl = document.getElementById('display-goblins');

// let state
let characterHP = 10;
let defeatedGoblinCount = 0;
let potionCount = 1;

let goblinArr = [
    {
        name: 'Dani',
        hp: 10
    },
    {
        name: 'Madden',
        hp: 7
    }, 
    {
        name: 'Pete',
        hp: 7
    }
];

// set event listeners 

characterDropdownEl.addEventListener('change', () => {
  //increment waterCount
  // call function to change character photo
    let value = characterDropdownEl.value;
    characterEl.src = `assets/character-${value}.jpg`;
});

goblinFormEl.addEventListener('submit', (e) => {
//dont forget prevent default
    e.preventDefault(); 
// use form data
    const data = new FormData(goblinFormEl);
    
    const newGoblin = {
        name: data.get('goblin-name'), 
        hp: Math.ceil(Math.random() * 10)
    };
//push new goblin to goblin array
    goblinArr.unshift(newGoblin);

    if (goblinArr.length >= 6) {
        alert('You\'re being overrun take one damage');
        characterHP--;
    }
// display goblin function
    displayGoblins();
// clear the input values
    goblinFormEl.reset();
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

                if (Math.random() > .5) {
                    alert (`You hit ${goblin.name}!`);
                    goblin.hp--;
                } else {
                    alert(`${goblin.name} was able to dodge your attack.`);
                }
        // if goblin hits 0 increase goblin defeated count
                if (goblin.hp === 0){
                    defeatedGoblinCount++;
                    potionCount++;
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
                displayPotion();
            });
        }
        goblinDisplayEl.append(newGoblin);
        characterHPEl.textContent = `Character Health Points: ${characterHP}`;
    }}

displayGoblins();


const potionDisplay = document.getElementById('potions');

function displayPotion(){
    potionDisplay.textContent = '';
    for (let i = 0; i < potionCount; i++){
        const potionImg = renderPotions();
        potionImg.addEventListener('click', () => {
            potionCount--;
            characterHP++;
            displayPotion();
            characterHPEl.textContent = `Character Health Points: ${characterHP}`;
        });
        potionDisplay.append(potionImg);
    }
    
}

displayPotion();


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state