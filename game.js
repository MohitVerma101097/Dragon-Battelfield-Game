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
  damage: 200,
  alive: true,
};

// select the DOM

const healer = document.querySelector(".img-container.healer");
const archer = document.querySelector(".img-container.archer");
const warrior = document.querySelector(".img-container.warrior");
const dragon = document.querySelector(".img-container.dragon-container");




// start attack

const HealerAttack = () => {
  let healerHero = heroesArray.find(hero => hero.name === "Henriette Healer")  

  if (dragonObject.alive && heroesArray[0].alive) {
    dragonObject.currentHP -= heroesArray[0].damage;

    alert(
      `${heroesArray[0].name} has done ${heroesArray[0].damage} damage to ${dragonObject.name} `
    );

    console.log('Dragon HP: '+dragonObject.currentHP);

    dragonCounterAttack();

    handleDefeatedHero(healerHero)

    //handleDefeatedHero(heroesArray[0]);
  }
};

const ArcherAttack = () => {
  let archerHero = heroesArray.find(hero => hero.name === "Ariana archer")
   
  if (dragonObject.alive && heroesArray[1].alive) {
    
    dragonObject.currentHP -= heroesArray[1].damage;

    alert(
      `${heroesArray[1].name} has done ${heroesArray[1].damage} damage to ${dragonObject.name}`
    );

    console.log('Dragon HP: '+dragonObject.currentHP);

    dragonCounterAttack();

    handleDefeatedHero(archerHero)

    //handleDefeatedHero(heroesArray)
  }
};

const WarriorAttack = () => {
  let warriorHero = heroesArray.find(hero => hero.name === "Wyona Warrior")
  if (dragonObject.alive && heroesArray[2].alive) {

    dragonObject.currentHP -= heroesArray[2].damage;

    alert(
      `${heroesArray[2].name} has done ${heroesArray[2].damage} damage to ${dragonObject.name}`
    );

    console.log('Dragon HP: '+dragonObject.currentHP);

    dragonCounterAttack();

    handleDefeatedHero(warriorHero)
    
    //handleDefeatedHero(heroesArray[2]);

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
  }
};


// evaluate & remove hero

/*const handleDefeatedHero = (hero, index) => {
  if (hero.currentHP <= 0) {
    alert(`${hero.name} has been defeated!`)
    hero.alive = false;
    heroesArray.splice(index, 1);
    removeDefeatedHeroFromDOM(hero);
  }
}; */

const handleDefeatedHero = (hero) => {
  if (hero.currentHP <= 0) {
    hero.alive = false;
    const index = heroesArray.indexOf(hero);
    heroesArray.splice(index, 1);
    removeDefeatedHeroFromDOM(hero);
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

const domArry = [healer, archer, warrior];

if (domArry.length === 0) {
  alert('GG! The mighty dragon has defeated all the heroes.');
}


archer.addEventListener("click", ArcherAttack);
warrior.addEventListener("click", WarriorAttack);
healer.addEventListener("click", HealerAttack);



// test code

const consolelog = () => {
  console.log(heroesArray)
}

dragon.addEventListener("click", consolelog);