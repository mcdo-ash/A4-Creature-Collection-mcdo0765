// PROVIDED: use this collection to generate the entries.
const $creatures = [
  {
    "name": "Moss Dragon",
    "description": "A gentle gardener who grows tiny forests wherever it naps.",
    "image": "assets/moss-dragon.svg",
    "alt": "A green dragon with leafy horns and small wings."
  },
  {
    "name": "Cloud Fox",
    "description": "A sky wanderer collecting soft clouds and lost daydreams.",
    "image": "assets/cloud-fox.svg",
    "alt": "A pale blue fox with pointed ears and a fluffy tail."
  },
  {
    "name": "Ember Salamander",
    "description": "A warm little companion that keeps campfires glowing.",
    "image": "assets/ember-salamander.svg",
    "alt": "An orange salamander with a flame at the end of its tail."
  },
  {
    "name": "Moon Owl",
    "description": "A quiet navigator who reads the stories written in stars.",
    "image": "assets/moon-owl.svg",
    "alt": "A purple owl with a crescent moon on its forehead."
  },
  {
    "name": "Crystal Turtle",
    "description": "A patient explorer carrying a sparkling crystal garden.",
    "image": "assets/crystal-turtle.svg",
    "alt": "A mint green turtle with purple crystals on its shell."
  },
  {
    "name": "Mushroom Sprite",
    "description": "A woodland storyteller with a spotted cap and muddy boots.",
    "image": "assets/mushroom-sprite.svg",
    "alt": "A small cream sprite wearing a red spotted mushroom cap."
  }
]

// YOUR WORK: build these features using the supplied HTML, CSS, and data.
// 1. Select the collection and preference controls.

// first I will begin by selecting the different elements, such as the collection where the creature cards will go, the theme select menu, the layout select menu, and the body tag.

const $collection = document.getElementById("collection")

const $themeSelected = document.getElementById("theme")

const $layoutSelected = document.getElementById("layout")

const $bodyTheme = document.querySelector("body")

// 2. Use a loop to generate the creature entries. See START-HERE.md for markup.

// creating a for loop to create the creature cards inserting into the collection with the values in each object in the $creatures array filling the content of the cards

for (const $creature of $creatures){
  $collection.insertAdjacentHTML('beforeend',
    `<article class="creature">
      <img src="${$creature.image}" alt="${$creature.alt}">
      <h3>${$creature.name}</h3>
      <p class="creature-info">${$creature.description}</p>
    </article>`
  )
}

// 3. Listen for changes to each preference control and update the appearance.

// target the change in the theme selection drop down

$themeSelected.addEventListener('change', themeChange)

// function themeChange will change the theme to match the selected theme in the drop down by changing the data-theme to match the value of the option selected in theme menu

function themeChange(){
  const $themeOption = $themeSelected.value
  $bodyTheme.setAttribute('data-theme', $themeOption)
  saveChoices()
}

//target the change in the layout selection drop down

$layoutSelected.addEventListener('change', layoutChange)

//function layoutChange will change the theme to match the selected layout in the drop down by changing the data-layout to match the value of the option selected in layout menu

function layoutChange(){
  const $layoutOption = $layoutSelected.value
  $collection.setAttribute('data-layout', $layoutOption)
  saveChoices()
}

// 4. Save both selected preferences to Local Storage.

//create storage key for saved choices to be accessed through

const $storageKey = "assignment-4-preferences"

//saveChoices function saves the selected theme and layout choices to localStorage

function saveChoices(){
  const $choices = {themeChoice: $themeOption, layoutChoice: $layoutOption}
  try{
    localStorage.setItem($storageKey, JSON.stringify($choices))
    console.log("changes saved")
  } catch(error){
    console.error(error)
  }
}

//loadChoices function loads choices from the localStorage

function loadChoices(){
  try{
    const $savedChoices = localStorage.getItem($storageKey)
    if($savedChoices === null){
      console.log("No saved choices found")
      return
    }
    const $choices = JSON.parse($savedChoices)
    $themeOption = $choices.themeChoice
    $layoutOption = $choices.layoutChoice

    themeChange()
    layoutChange()

  }catch(error){
    console.error(error)
    console.log("Unable to load saved choices.")
  }
}
// 5. Check for saved data on load and restore the controls and appearance.

//calling loadChoices function to load saved choices from localStorage

loadChoices()
// Add short pseudocode comments before writing each feature.
