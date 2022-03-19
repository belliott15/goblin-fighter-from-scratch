## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
![wireframe for goblin fighter](/assets/Wireframe.png "wireframe for goblin fighter app")
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

### HTML skeleton
-template head, body (header, body, footer)
-body - 3 sections created by grid template columns 2fr 1fr 3fr
  -section 1 
    -has dropdown selector (add but not function until end)
      -why? to be able to change character
    -div to hold character image
    -div for HP display
  -section 2
    -div to hold goblins defeated
    -div to fill extra space or give extra data(stretch goals)
  -section 3
    -form to hold input and button
      -input for goblin info
      -submit button to display goblin info
    -div for displaying goblins

## state to track
-character HP
-goblins defeated
-goblin hp

## events
button to add goblin
on goblin click hit goblin, hit character, miss goblin, miss character
(optional) change character.



Task	Points
** Deploy Requirements **	
Main branch deployed to Netlify	1
Open PR from dev branch with Netlify deploy preview	1
** Acceptance Requirements **	
Users see HP and two default goblins	2
Users can add a new goblin with default HP and name	2
Goblin click handler	6
- Uses Math.random() function to determine hits	
- Alerts user whether they hit the goblin or not and updates HP	
- Alerts user whether the goblin hit them or not and updates HP	
Show number of vanquished goblins	1
Display goblins differently and disable clicking when defeated	1
Disable all functionality when the game is over	2
Functions	
PURE: renderGoblin(goblin) : return DOM node`	2
IMPURE: displayGoblins() : clears DOM and appends goblin data to goblin list DOM node`	2


Stretch goal ideas
Change the player image to something stronger-looking every time they hit a new threshold (killed first goblin, killed three goblins, etc).
Change the player image based on their current health to show how worse-for-the-wear they've become.
Give goblins a random 'strength' property that determines how much damage they do to the player.
Give goblins a random 'agility' property that determines how often the play can hit them.
Give goblins a random 'dexterity' property that determines how often they hit the player.
Give the player a 'strength' property starting at 1 that determines how much damage they do to goblins. Every time a goblin dies, increment this property.
Add different kinds of monsters and render them differently by adding a 'type' property to the monster.