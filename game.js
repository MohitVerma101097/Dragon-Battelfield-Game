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
  if (dragonObject.alive && heroesArray[0].alive) {
    dragonObject.currentHP -= heroesArray[0].damage;

    alert(
      `${heroesArray[0].name} has done ${heroesArray[0].damage} damage to ${dragonObject.name} `
    );

    console.log(dragonObject.currentHP);

    dragonCounterAttack();

    handleDefeatedHero(heroesArray[0]);
  }
};

const ArcherAttack = () => {
  if (dragonObject.alive && heroesArray[1].alive) {
    dragonObject.currentHP -= heroesArray[1].damage;

    alert(
      `${heroesArray[1].name} has done ${heroesArray[1].damage} damage to ${dragonObject.name}`
    );

    console.log(dragonObject.currentHP);

    dragonCounterAttack();

    handleDefeatedHero(heroesArray[1]);
  }
};

const WarriorAttack = () => {
  if (dragonObject.alive && heroesArray[2].alive) {
    dragonObject.currentHP -= heroesArray[2].damage;

    alert(
      `${heroesArray[2].name} has done ${heroesArray[2].damage} damage to ${dragonObject.name}`
    );

    console.log(dragonObject.currentHP);

    dragonCounterAttack();

    handleDefeatedHero(heroesArray[2], 2);
  }
};

const dragonCounterAttack = () => {
  const randomAttack = Math.floor(Math.random() * heroesArray.length);
  const randomHero = heroesArray[randomAttack];

  if (randomHero.alive) {
    randomHero.currentHP -= dragonObject.damage;
    alert(
      `${dragonObject.name} has counterattacked ${randomHero.name} for ${dragonObject.damage} damage.`
    );
    console.log(randomHero.currentHP);

    handleDefeatedHero(randomHero, heroesArray.indexOf(randomHero));
  }
};

// evaluate & remove hero

const handleDefeatedHero = (hero, index) => {
  if (hero.currentHP <= 0) {
    alert(`${hero.name} has been defeated!`)
    hero.alive = false;
    heroesArray.splice(index, 1);
    removeDefeatedHeroFromDOM(hero);
  }
};


const removeDefeatedHeroFromDOM = (hero) => {
  const heroElement = document.querySelector(`.img-container.${hero.name}`);

  if (heroElement) {
    heroElement.remove();
  }
};



archer.addEventListener("click", ArcherAttack);
warrior.addEventListener("click", WarriorAttack);
healer.addEventListener("click", HealerAttack);


