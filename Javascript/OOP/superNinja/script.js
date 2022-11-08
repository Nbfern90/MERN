class Ninja {
  constructor(name, health, speed = 3, strength = 3){
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
      }
      sayName (){
        console.log(this.name)
      }
      showStats() {
        console.log(this.name,this.health,this.speed,this.strength)
      }
      drinkSake () {
        this.health += 10;
      }
  }

class Sensei extends Ninja {
  constructor(name,health,speed, strength,wisdom){
    super(name,health=200,speed=10,strength=10)
    this.wisdom = wisdom;
  }

  speakWisdom () {
   return super.drinkSake()
  }
  
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

 