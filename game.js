//Denne JS-koden er laget klar for deg. Den trenger du ikke endre på.

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

let dragonObject = {
  name: "Daar Dragon",
  maxHP: 2000,
  currentHP: 2000,
  damage: 2000,
  alive: true,
};

// select the DOM

const healer = document.querySelector(".img-container.healer");
const archer = document.querySelector(".img-container.archer");
const warrior = document.querySelector(".img-container.warrior");
const dragon = document.querySelector(".img-container.dragon-container");

const healerHealth = document.querySelector("#healer-health-txt");
const warriorHealth = document.querySelector("#warrior-health-txt");
const archerHealth = document.querySelector("#archer-health-txt");
const dragonHealth = document.querySelector(".text-container.dragon-health-txt");


// start attack

const HealerAttack = () => {
  const healerHero = heroesArray.find(hero => hero.name === "Henriette Healer");
  
  if (healerHero && dragonObject.alive && healerHero.alive) {
    dragonObject.currentHP -= healerHero.damage;
    alert(`${healerHero.name} has done ${healerHero.damage} damage to ${dragonObject.name}`);
    console.log('Dragon HP: ' + dragonObject.currentHP);
    dragonCounterAttack();
    handleDefeatedHero(healerHero);
    healerHealth.innerHTML = healerHero.currentHP;
  } else {
    alert("No healers available for attack!");
  }
};

const ArcherAttack = () => {
  const archerHero = heroesArray.find(hero => hero.name === "Ariana archer");

  if (archerHero && dragonObject.alive && archerHero.alive) {
    dragonObject.currentHP -= archerHero.damage;
    alert(`${archerHero.name} has done ${archerHero.damage} damage to ${dragonObject.name}`);
    console.log('Dragon HP: ' + dragonObject.currentHP);
    dragonCounterAttack();
    handleDefeatedHero(archerHero);
    archerHealth.innerHTML = archerHero.currentHP;
  } else {
    alert("No archers available for attack!");
  }
};

const WarriorAttack = () => {
  const warriorHero = heroesArray.find(hero => hero.name === "Wyona Warrior");

  if (warriorHero && dragonObject.alive && warriorHero.alive) {
    dragonObject.currentHP -= warriorHero.damage;
    alert(`${warriorHero.name} has done ${warriorHero.damage} damage to ${dragonObject.name}`);
    console.log('Dragon HP: ' + dragonObject.currentHP);
    dragonCounterAttack();
    handleDefeatedHero(warriorHero);
    warriorHealth.innerHTML = warriorHero.currentHP;
  } else {
    alert("No warriors available for attack!");
  }
};


const dragonCounterAttack = () => {
  const randomAttack = Math.floor(Math.random() * heroesArray.length);

  if (heroesArray[randomAttack].alive) {
    heroesArray[randomAttack].currentHP -= dragonObject.damage;
    alert(
      `${dragonObject.name} has counterattacked ${heroesArray[randomAttack].name} for ${dragonObject.damage} damage.`
    );

    console.log(heroesArray[randomAttack].name, 'HP: ' + heroesArray[randomAttack].currentHP);

    handleDefeatedHero(heroesArray[randomAttack], randomAttack);

    dragonHealth.innerHTML = dragonObject.currentHP;
  }
};


// evaluate & remove hero



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

const checkGameOver = () => {
  if (heroesArray.length === 0) {
    alert('GG! The mighty dragon has defeated all the heroes.');
  }
};

const removeDefeatedHeroFromDOM = (hero) => {
  let heroElement;

  if (hero.name.toLowerCase() === "henriette healer") {
    heroElement = healer;
  } else if (hero.name.toLowerCase() === "ariana archer") {
    heroElement = archer;
  } else if (hero.name.toLowerCase() === "wyona warrior") {
    heroElement = warrior;
  }

  if (heroElement) {
    heroElement.remove();
  }
};



archer.addEventListener("click", ArcherAttack);
warrior.addEventListener("click", WarriorAttack);
healer.addEventListener("click", HealerAttack);



// test code

const consolelog = () => {
  console.log(heroesArray)
}

dragon.addEventListener("click", consolelog);
