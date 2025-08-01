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
  
  class King extends Character {
      constructor() {
       super('Rei');
       this.life = 500;
       this.attack = 100;
       this.defense = 80;
       this.maxLife = this.life;
      }
    }

   class Queen extends Character {
      constructor() {
       super('Rainha');
       this.life = 490;
       this.attack = 80;
       this.defense = 100;
       this.maxLife = this.life;
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

    class DragonMisto extends Character {
      constructor() {
       super('Dragon Misto');
       this.life =  470;
       this.attack = 90;
       this.defense = 50;
       this.maxLife = this.life;
      }
    }

    class DragonAtaqueForte extends Character {
      constructor() {
       super('Dragon Ataque');
       this.life =  400;
       this.attack = 115;
       this.defense = 10;
       this.maxLife = this.life;
      }
    }
    class DragonDefeseForte extends Character {
      constructor() {
       super('Dragon Defese');
       this.life =  420;
       this.attack = 75;
       this.defense = 115;
       this.maxLife = this.life;
      }
    }
          class DragonMetal extends Character {
      constructor() {
       super('Dragon Metal');
       this.life =  490;
       this.attack = 99;
       this.defense = 60;
       this.maxLife = this.life;
      }
    }

    class DragonApelaoJ extends Character {
      constructor() {
       super('Dragon Apelão Júnior');
       this.life = 500;
       this.attack = 118;
       this.defense = 99;
       this.maxLife = this.life;
      }
    }
    class DragonXavierJ extends Character {
      constructor() {
       super('Dragon Chave Xavier Júnior');
       this.life = 550;
       this.attack = 119;
       this.defense = 99;
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
         
     class DragonApelao extends Character {
      constructor() {
       super('Dragon Apelão');
       this.life = 600;
       this.attack = 180;
       this.defense = 120;
       this.maxLife = this.life;
      }
    }

 class DragonFORTE extends Character {
      constructor() {
       super('Dragon FORTE');
       this.life = 700;
       this.attack = 190;
       this.defense = 130;
       this.maxLife = this.life;
      }
    }

     class DragonLendario extends Character {
      constructor() {
       super('Dragon Lendário');
       this.life = 700;
       this.attack = 200;
       this.defense = 100;
       this.maxLife = this.life;
      }
    }
  class DragonXavier extends Character {
      constructor() {
       super('Dragon Xavier');
       this.life = 800;
       this.attack = 199;
       this.defense = 99;
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


    doAttack(attacking, attacked) {
  if (attacking.life <= 0 || attacked.life <= 0) {
    this.log.addMessage("Alguém está morto.");
    return;
  }

  let attackFactor = (Math.random() * 2).toFixed(2);
  let defenseFactor = (Math.random() * 2).toFixed(2);

  let actualAttack = attacking.attack * attackFactor;
  let actualDefense = attacked.defense * defenseFactor;

  const somAtaque = document.getElementById('somAtaque');
  const somDefesa = document.getElementById('somDefesa');
  const somMorte = document.getElementById('somMorte');

  if (actualAttack > actualDefense) {
    attacked.life -= actualAttack;
    this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`);
    somAtaque.currentTime = 0;
    somAtaque.play();
  } else {
    this.log.addMessage(`${attacked.name} conseguiu defender...`);
    somDefesa.currentTime = 0;
    somDefesa.play();
  }

  if (attacked.life <= 0) {
    this.log.addMessage(`${attacked.name} foi derrotado!`);
    somMorte.currentTime = 0;
    somMorte.play();
  }

  this.update();

  const attackedEl = attacked === this.fighter1 ? this.fighter1El : this.fighter2El;
  attackedEl.classList.add('fighterFlash');
  setTimeout(() => attackedEl.classList.remove('fighterFlash'), 200);
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

   window.onload = () => {
      let tema = localStorage.getItem("tema");
      if (!tema) {
        tema = "escuro";
        localStorage.setItem("tema", tema);
      }
      document.body.className = tema;
      document.getElementById("temaSelect").value = tema;
    }

function playSomAtaque() {
  const som = document.getElementById("somAtaque");
  if (som) {
    som.currentTime = 0;
    som.play();
  }
}

function playSomDefesa() {
  const som = document.getElementById("somDefesa");
  if (som) {
    som.currentTime = 0;
    som.play();
  }
}

function playSomMorte() {
  const som = document.getElementById("somMorte");
  if (som) {
    som.currentTime = 0;
    som.play();
  }
}

// Verifica ou inicia as moedas no localStorage
let moedas = parseInt(localStorage.getItem("moedas")) || 0;
let passeLiberado = moedas >= 420;

// Exibe no console (ou você pode exibir na tela)
console.log("Moedas:", moedas);
console.log("Passe Dragões Espertos:", passeLiberado);

// Lista de dragões (coloque aqui todos os seus personagens)
const todosOsDragoes = [
  // Dragões do passe
  { nome: "Dragon Apelão", value: "DragonApelao", passe: true },
  { nome: "Dragon FORTE", value: "DragonFORTE", passe: true },
  { nome: "Dragon Lendário", value: "DragonLendario", passe: true },
  { nome: "Dragon Xavier", value: "DragonXavier", passe: true },
  // Adicione os outros 18 aqui, com passe: false
  { nome: "Cavaleiro", value: "Knight", passe: false },
   { nome: "Mago", value: "Sorcerer", passe: false },
    { nome: "Rei", value: "King", passe: false },
     { nome: "Rainha", value: "Queen", passe: false },
      { nome: "Montro Grande", value: "BigMonster", passe: false },
       { nome: "", value: "Knight", passe: false },
        { nome: "Monstro Pequeno", value: "LittleMonster", passe: false },
         { nome: "Dragão Sombrio", value: "DragonDark", passe: false },
          { nome: "Dragão Esplandecente", value: "DragonLight", passe: false },
            { nome: "Dragão Vento", value: "DragonVee", passe: false },
              { nome: "Dragão Elétrico", value: "DragonEletro", passe: false },
                { nome: "Dragão Água", value: "DragonAgua", passe: false },
                   { nome: "Dragão Terra", value: "DragonTerra", passe: false },
                     { nome: "Dragão Planta", value: "DragonPlanta", passe: false },
                     { nome: "Dragão Fogo", value: "DragonFogo", passe: false },
                     { nome: "Dragão Misto", value: "DragonMisto", passe: false },
                     { nome: "Dragão Metal", value: "DragonMetal", passe: false },
                     { nome: "Dragão Ataque Forte", value: "DragonAtaqueForte", passe: false },
                     { nome: "Dragão Defese Forte", value: "DragonDefeseForte", passe: false },
                     { nome: "Dragão Apelão J.", value: "DragonApelaoJ", passe: false },
                     { nome: "Dragão Xavier J.", value: "DragonXavierJ", passe: false },
];  

// Função para preencher o <select> com os personagens
function preencherSelectComDragoes(idSelect) {
  const seletor = document.getElementById(idSelect);
  if (!seletor) return;

  todosOsDragoes.forEach(dr => {
    const opt = document.createElement("option");
    opt.value = dr.value;
    opt.textContent = dr.nome;

    if (dr.passe && !passeLiberado) {
      opt.disabled = true;
      opt.textContent += " 🔒 (Passe)";
    }

    seletor.appendChild(opt);
  });
}

// Chamar isso assim que a página carregar
preencherSelectComDragoes("player1-select");
preencherSelectComDragoes("player2-select");

// Função que você chama quando a luta termina
function fimDaLuta(vencedor, jogadorEscolhido) {
  let ganho = (vencedor === jogadorEscolhido) ? 25 : 10;
  moedas += ganho;
  localStorage.setItem("moedas", moedas);
  alert(`Você ganhou ${ganho} moedas! Total: ${moedas}`);
}


  const dragõesPasse = [
    "DragonApelao", 
    "DragonFORTE", 
    "DragonLendario", 
    "DragonXavier",
 
  ];

  const bloquearDragõesDoPasse = () => {
    let moedas = parseInt(localStorage.getItem("coins") || "0");

    // Função pra desabilitar opções de passe se moedas < 420
    if (moedas < 420) {
      [ "player1-select", "player2-select" ].forEach(id => {
        const select = document.getElementById(id);
        Array.from(select.options).forEach(opt => {
          if (dragõesPasse.includes(opt.value)) {
            opt.disabled = true;
            opt.text += " (Bloqueado - Passe)";
          }
        });
      });
    }
  };

  bloquearDragõesDoPasse();


