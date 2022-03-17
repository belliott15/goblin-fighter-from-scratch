export function renderGoblins(goblin) {
/* <div id="goblin">
    <h2>goblin name</h2>
    <p>goblin image</p>
    <p>goblin hp</p>
</div>  */
    const goblinDiv = document.createElement('div');
    const goblinImg = document.createElement('img');
    const goblinName = document.createElement('h2');
    const goblinHP = document.createElement('p');

    goblinDiv.classList.add('goblin');

    goblinName.textContent = goblin.name;
    goblinHP.textContent = goblin.hp;

    if (goblin.hp === 10) {
        goblinImg.src = '/assets/boss-goblin.png'; 
    }
    if (goblin.hp === 9) {
        goblinImg.src = '/assets/boss-goblin.png'; 
    }
    if (goblin.hp === 8) {
        goblinImg.src = '/assets/boss-goblin.png'; 
    }
    if (goblin.hp === 7) {
        goblinImg.src = '/assets/big-goblin.png'; 
    }
    if (goblin.hp === 6) {
        goblinImg.src = '/assets/big-goblin.png'; 
    }
    if (goblin.hp === 5) {
        goblinImg.src = '/assets/big-goblin.png'; 
    }
    if (goblin.hp === 4) {
        goblinImg.src = '/assets/goblin.png'; 
    }
    if (goblin.hp === 3) {
        goblinImg.src = '/assets/small-goblin.png'; 
    }
    if (goblin.hp === 2) {
        goblinImg.src = '/assets/small-goblin.png'; 
    }
    if (goblin.hp === 1) {
        goblinImg.src = '/assets/small-goblin.png'; 
    }
    if (goblin.hp === 0) {
        goblinImg.src = '/assets/skull.png'; 
    }

    goblinDiv.append(goblinImg, goblinName, goblinHP);

    return goblinDiv;
}
