//Stats for heroes
let heroesArray = [
  {
    id: 0,
    name: "Henriette Healer",
    maxHP: 400,
    currentHP: 400,
    damage: 100,
    alive: true,
  },
  {
    id: 1,
    name: "Ariana archer",
    maxHP: 500,
    currentHP: 500,
    damage: 400,
    alive: true,
  },
  {
    id: 2,
    name: "Wyona Warrior",
    maxHP: 600,
    currentHP: 600,
    damage: 400,
    alive: true,
  },
];

// Dragon object
let dragonObject = {
  name: "Daar Dragon",
  maxHP: 2000,
  currentHP: 2000,
  damage: 200,
  alive: true,
};

// Selecting DOM elements
const healer = document.querySelector(".img-container.healer");
const archer = document.querySelector(".img-container.archer");
const warrior = document.querySelector(".img-container.warrior");
const dragon = document.querySelector(".img-container.dragon-container");

const healerHealth = document.querySelector("#healer-health-txt");
const warriorHealth = document.querySelector("#warrior-health-txt");
const archerHealth = document.querySelector("#archer-health-txt");
const dragonHealth = document.querySelector(".text-container.dragon-health-txt");

// Assigning names to DOM elements
const healerName = document.querySelector("#healer-name-txt").innerHTML = heroesArray[0].name
const archerName = document.querySelector("#archer-name-txt").innerHTML = heroesArray[1].name
const warriorName = document.querySelector("#warrior-name-txt").innerHTML = heroesArray[2].name
const dragonName = document.querySelector("#dragon-name-txt").innerHTML = dragonObject.name

// Constants for hero health values
const healerValue = 400;
const archerValue = 500;
const warriorValue = 600;

// Hero attacks
const healerAttack = () => {
  const healerHero = heroesArray.find(hero => hero.name === "Henriette Healer");
  
  if (healerHero && dragonObject.alive) {
    dragonObject.currentHP -= healerHero.damage;
    alert(`${healerHero.name} has done ${healerHero.damage} damage to ${dragonObject.name}`);
    console.log('Dragon HP: ' + dragonObject.currentHP);
    dragonCounterAttack();
  }
};

const archerAttack = () => {
  const archerHero = heroesArray.find(hero => hero.name === "Ariana archer");

  if (archerHero && dragonObject.alive) {
    dragonObject.currentHP -= archerHero.damage;
    alert(`${archerHero.name} has done ${archerHero.damage} damage to ${dragonObject.name}`);
    console.log('Dragon HP: ' + dragonObject.currentHP);
    dragonCounterAttack();
  }
};

const warriorAttack = () => {
  const warriorHero = heroesArray.find(hero => hero.name === "Wyona Warrior");

  if (warriorHero && dragonObject.alive) {
    dragonObject.currentHP -= warriorHero.damage;
    alert(`${warriorHero.name} has done ${warriorHero.damage} damage to ${dragonObject.name}`);
    console.log('Dragon HP: ' + dragonObject.currentHP);
    dragonCounterAttack();
  }
};

// Dragon counterattack
const dragonCounterAttack = () => {
  if (dragonObject.currentHP <= 0) {
    dragonObject.alive = false;
    dragonHealth.textContent = `0 / ${dragonObject.maxHP} HP` 
    dragon.remove();
    alert(`GG! The mighty dragon ${dragonObject.name} has been defeated.`);
  } else {
    const randomIndex = Math.floor(Math.random() * heroesArray.length);
    if (heroesArray[randomIndex]) {
      heroesArray[randomIndex].currentHP -= dragonObject.damage;
      alert(`${dragonObject.name} has counterattacked ${heroesArray[randomIndex].name} for ${dragonObject.damage} damage.`);
      console.log(heroesArray[randomIndex].name, 'HP: ' + heroesArray[randomIndex].currentHP);
      let hero = heroesArray[randomIndex];
      handleDefeatedHero(hero);
      updateHeroHealthOnScreen(hero);
      dragonHealth.textContent = `${dragonObject.currentHP} / ${dragonObject.maxHP} HP`;
    }
  }
};

// Handle defeated hero
const handleDefeatedHero = (hero) => {
  if (hero.currentHP <= 0) {
    alert(`${hero.name} has been defeated!`)
    hero.alive = false;
    const index = heroesArray.indexOf(hero);
    heroesArray.splice(index, 1);
    removeDefeatedHeroFromDOM(hero);
  }
  checkGameOver();
};

// Check if the game is over
const checkGameOver = () => {
  if (heroesArray.length === 0) {
    alert('GG! The mighty dragon has defeated all the heroes.');
  }
};

// Remove defeated hero from the DOM
const removeDefeatedHeroFromDOM = (hero) => {
  let heroElement;
  let heroHealthValue;

  if (hero.name.toLowerCase() === "henriette healer") {
    heroElement = healer;
    heroHealthValue = healerValue;
  } else if (hero.name.toLowerCase() === "ariana archer") {
    heroElement = archer;
    heroHealthValue = archerValue;
  } else if (hero.name.toLowerCase() === "wyona warrior") {
    heroElement = warrior;
    heroHealthValue = warriorValue;
  } 

  if (heroElement) {
    heroElement.remove();
    heroHealthValue.textContent = `0 / ${heroHealthValue} HP`;
  }
};

// Update hero health on the screen
const updateHeroHealthOnScreen = (hero) => {
  let heroHealthElement;

  if (hero.name.toLowerCase() === "henriette healer") {
    heroHealthElement = healerHealth;
  } else if (hero.name.toLowerCase() === "ariana archer") {
    heroHealthElement = archerHealth;
  } else if (hero.name.toLowerCase() === "wyona warrior") {
    heroHealthElement = warriorHealth;
  } 

  if (heroHealthElement) {
    heroHealthElement.textContent = `${hero.currentHP} / ${hero.maxHP} HP`;
    if(hero.currentHP < 0){
      heroHealthElement.textContent = `0 / ${hero.maxHP} HP`
    }
  }
};

// Event listeners for hero attacks
archer.addEventListener("click", archerAttack);
warrior.addEventListener("click", warriorAttack);
healer.addEventListener("click", healerAttack);

// Test code for logging heroes array
const consolelog = () => {
  console.log(heroesArray);
};
dragon.addEventListener("click", consolelog);
