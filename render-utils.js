export function renderGoblins(goblin) {
/* <div id="goblin">
    <h2>goblin name</h2>
    <p>goblin image</p>
    <p>goblin hp</p>
</div>  */
    const goblinDiv = document.createElement('div');
    const goblinName = document.createElement('h2');
    const goblinImg = document.createElement('p');
    const goblinHP = document.createElement('p');

    goblinDiv.classList.add('goblin');

    goblinName.textContent = goblin.name;
    goblinHP.textContent = goblin.hp;

    if (goblin.hp === 5) {
        goblinImg.textContent = ''; 
    }
    if (goblin.hp === 4) {
        goblinImg.textContent = ''; 
    }
    if (goblin.hp === 3) {
        goblinImg.textContent = ''; 
    }
    if (goblin.hp === 2) {
        goblinImg.textContent = ''; 
    }
    if (goblin.hp === 1) {
        goblinImg.textContent = ''; 
    }
    if (goblin.hp === 0) {
        goblinImg.textContent = ''; 
    }

    return goblinDiv;
}
