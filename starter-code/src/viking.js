// Soldier
class Soldier {
constructor(health, strength) {
    this.health=health;
    this.strength=strength;
        }
    attack(){
        return this.strength
    }
    receiveDamage(amount){
        this.health -= amount;
      }
}  

// Viking
// class Viking {}

class Viking extends Soldier { // Does this mean it inherits from Soldier other things
    constructor(name, health, strength) {
      super( health, strength) // We cannot have name here because the prototype which is Soldier doesnt have a name.
       this.name = name;
    }

    // No Need for Attack as it was reimplemented

    receiveDamage(amount){
        this.health -= amount;
        if (this.health <= 0) {
            return this.name + " has died in act of combat";
            ;
          }
          else{
            return this.name + " has received " + amount + " points of damage";
          }
        }
    

    battleCry()
    {
        return "Odin Owns You All!";
    }
}
// Saxon
class Saxon {}




// War
class War {}
