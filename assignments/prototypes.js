/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
function GameObject(initData){
  this.createdAt = initData.dimensions;
  this.dimensions = initData.dimensions;
}
GameObject.prototype.destroy = function (){
  return `${this.name} was removed from the game.`;
}
function CharacterStats(initData){
  GameObject.call(this, initData);
  this.hp = initData.hp;
  this.name = initData.name;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function (){
  return `${this.name} took damage`;
}

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid (initData){
  CharacterStats.call(this, initData);
  this.faction = initData.faction;
  this.weapons = initData.weapons;
  this.language = initData.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function (){
  return `${this.name} offers a greeting in ${this.language}`;
};
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by uncommenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Bruce',
    faction: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Toungue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 15,
    name: 'Sir Mustachio',
    faction: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Toungue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 10,
    name: 'Lilith',
    faction: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.hp); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.faction); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

  function Villian(initData){
    Humanoid.call(this, initData);
    this.monologue = initData.monologue;
  }
  Villian.prototype = Object.create(Humanoid.prototype);
  Villian.prototype.explain = function (targetHero){
    console.log(this.monologue);
    targetHero.bore(this.monologue, this);
  }

  function Hero(initData){
    Humanoid.call(this, initData);
    this.constitution = initData.constitution;
  }
  Hero.prototype = Object.create(Humanoid.prototype);
  Hero.prototype.bore = function (monologue, aVillian) {
    console.log(`No! Not a monologue! Damn you ${aVillian.name}!`);
    this.takeDamage(monologue.length/this.constitution);
  }


  
let jacob = new Villian({name: "Jacob",
monologue: `
Ah! My arch-nemesis, finally we meet, after all these years. Are your shackles too tight? Keep in mind they have to be somewhat tight, so as not to defeat the purpose, but I don’t want them to be too tight. How do you like my underground cavern lair? Is it too dark? How do you like the blacklights?

I admit I would be lying if I said I am not happy to see you. It has been a pleasure doing combat with you all these many years, in our little game of cat and mouse, often aided by explosives, or flying machines, or houses of mirrors. You have been a most worthy foe. In some ways, I will regret destroying something so extraordinary. In some ways, I will really enjoy it. Killing you will be like destroying a beautiful butterfly. A beautiful butterfly who murdered my father and poured acid on my face.
The brand-new edition Boots Riley’s Sorry to Bother You—originally published in 2014, in McSweeney's 48—is available now. Now a major motion picture, Sorry to Bother You offers a raucous view...

You may laugh, but we are not so different, you and I. OK, actually, do not laugh. Let me continue, please. Stop it. Guard, show our friend what happens when we laugh too much. That’s right, we lose television privileges. You’re not laughing so much now, are you?

Like I said, we are not so different. We both lost our parents at a young age. We both seek out the darkness and shun the light. We both have secret identities. We both keep secrets, and have lost loved ones because of these secrets.

Oh crap. That’s my phone. Excuse me, I have to take this.

We have both gotten in trouble for keeping secrets with people who think that secrets are rude.
Since the 2016 election, reading the news each day can send even the most placid among us into a paralyzing apoplexia. We are enraged, we are bewildered, and then we get nothing done all day. We go...

We both are left handed. We both wear eyepatches. We both are aided by vaguely British, elderly manservants who many people erroneously think share a homoerotic relationship with us. Why can’t two men be longtime companions without it being intimated that it is something more than that, I ask you? We both wear our hair short on the sides and back but slightly longer at the front, styled with molding gel. We both went to small, liberal arts colleges in the Midwest, majoring in English. Except that I went to an evil small liberal arts college, and you went to a small liberal arts college that fought for justice.

Can you touch your tongue to your nose? Do it. I can too! I’ve never met anyone else who can do that! Is your family Irish? Oh, you’re Scottish? Close enough. Let me ask you this: were you picked last always in gym class? Oh.

But look: we are wearing the same outfit.

There are some crucial differences, and this is why we fight on two different sides of the law. Obviously, your shoes are nicer than mine are, just because you can go shopping in the city’s finest stores under your unassuming alter ego. Whereas my facial disfigurement keeps me from venturing out in daylight, forcing me to put together clothes from what I find in the gutter. No, it’s okay, really.
`
});
let theHero = new Hero({name: "Luis' Zoom meeting", constitution: 100, hp: 10});
jacob.explain(theHero);