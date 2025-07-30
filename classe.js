class Character {
 
 
    _life = 1;
    maxLife = 1;
    attack = 0
    defense = 0;
  
    constructor(name) {
      this.name = name;
    }
  
   get life() {
     return this._life;
   }
  
    set life(newLife) {
     this._life = newLife < 0 ? 0 : newLife;
     }
  }
  
  class Knight extends Character {
      constructor() {
       super('Cavaleiro');
       this.life = 230;
       this.attack = 30;
       this.defense = 15;
       this.maxLife = this.life;
      }
    }

     class DragonEletro extends Character {
      constructor() {
       super('Dragon Elétrico');
       this.life = 360;
       this.attack = 90;
       this.defense = 10;
       this.maxLife = this.life;
      }
    }
  
    class DragonAgua extends Character {
      constructor() {
       super('Dragon Água');
       this.life = 390;
       this.attack = 95;
       this.defense = 10;
       this.maxLife = this.life;
      }
    }
  
         class DragonTerra extends Character {
      constructor() {
       super('Dragon Terra');
       this.life = 320;
       this.attack = 60;
       this.defense = 40;
       this.maxLife = this.life;
      }
    }
     
      class DragonPlanta extends Character {
      constructor() {
       super('Dragon Planta');
       this.life = 310;
       this.attack = 70;
       this.defense = 80;
       this.maxLife = this.life;
      }
    }

      class DragonFogo extends Character {
      constructor() {
       super('Dragon Fogo');
       this.life = 370;
       this.attack = 80;
       this.defense = 7;
       this.maxLife = this.life;
      }
    }

       class DragonVee extends Character {
      constructor() {
       super('Dragon Vento');
       this.life =  320;
       this.attack = 60;
       this.defense = 50;
       this.maxLife = this.life;
      }
    }

     class DragonDark extends Character {
      constructor() {
       super('Dragon Sombrio Sombras');
       this.life = 320;
       this.attack = 70;
       this.defense = 30;
       this.maxLife = this.life;
      }
    }
      class Sorcerer extends Character {
        constructor() {
          super('Mago');
          this.life = 120;
          this.attack = 50;
          this.defense = 13;
          this.maxLife = this.life;
         }
      }
  
   class DragonLight extends Character {
      constructor() {
       super('Dragon Esplandecente Luz');
       this.life = 320;
       this.attack = 80;
       this.defense = 20;
       this.maxLife = this.life;
      }
    }
      class LittleMonster extends Character {
        constructor() {
            super('Little Monster');
            this.life = 110;
            this.attack = 35;
            this.defense = 17;
            this.maxLife = this.life;
           }
      }
  
      class  BigMonster extends Character {
        constructor() {
            super('Big Monster');
            this.life = 195;
            this.attack = 40;
            this.defense = 20;
            this.maxLife = this.life;
           }
      }


      class Stage {
       constructor(fighter1, fighter2,  fighter1El,  fighter2El, logObject)  {
         this.fighter1 = fighter1;
         this.fighter2 = fighter2;
         this.fighter1El = fighter1El;
         this.fighter2El = fighter2El;
         this.log = logObject;
       };
     
     start() {
        this.update();

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2) );
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1) );
     }
       
     update() {
       this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)}  HP`;
       let f1Pct = (this.fighter1.life / this.fighter1.maxLife) *100;
       this.fighter1El.querySelector('.bar').style.width = `${f1Pct}% `;

       this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)}  HP`;
       let f2Pct = (this.fighter2.life / this.fighter2.maxLife) *100;
       this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%` ;
     }


      doAttack(attacking, attacked)  {
       if(attacking.life  <= 0 || attacked.life <= 0) {
        this.log.addMessage("Alguém está morto.");
        return;
       }
        
       let attackFactor = (Math.random() * 2).toFixed(2);
       let defenseFactor = (Math.random() * 2).toFixed(2);

       let actualAttack = attacking.attack * attackFactor;
       let actualDefense = attacked.defense * defenseFactor;
       
    
       if(actualAttack > actualDefense) {
          attacked.life -= actualAttack;
          this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`);
       } else {
        this.log.addMessage(`${attacked.name} coseguiu defender...`)
       }

       
       
        this.update();

        }
   }

   class Log {
    list = [];
   
    constructor(listEl) {
       this.listEl = listEl;
    }


    addMessage(msg) {
      this.list.push(msg);
      this.render();

       }

       render() {
         this.listEl.innerHTML = '';

          for(let i in this.list) {
             this.listEl.innerHTML += `<li>${this.list[i]}</li>`;

            
            }
       }
   }