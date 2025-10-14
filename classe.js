class Character {
 
  _life = 1;
  maxLife = 1;
  attack = 0;
  defense = 0;
  special = ""; // <-- Habilidade especial
  specialUsed = false;

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
       this.life = 5000;
       this.attack = 100;
       this.defense = 80;
       this.maxLife = this.life;
       this.special = "Espadada de Ouro"; 
      }
    }
class DragonGelo extends Character {
  constructor() {
    super('Dragon Gelo');
    this.life = 3300;
    this.attack = 85;
    this.defense = 60;
    this.maxLife = this.life;
    this.special = "Sangue congelado"; // Especial único
  }
}

class DragonAncestral extends Character {
  constructor() {
    super('Dragon Ancestral');
    this.life = 6500;
    this.attack = 125;
    this.defense = 60;
    this.maxLife = this.life;
    this.special = "Golpe Único + Mordida da morte"; // Especial único
  }
}
   class Queen extends Character {
      constructor() {
       super('Rainha');
       this.life = 4900;
       this.attack = 80;
       this.defense = 100;
       this.maxLife = this.life;
       this.special = "Espadada de Ferro"; 
      }
    }

      class Humano extends Character {
      constructor() {
       super('Humano');
       this.life = 8000;
       this.attack = 190;
       this.defense = 100;
       this.maxLife = this.life;
       this.special = "Destruir + QI"; 
      }
    }

     class DragonAstefato extends Character {
      constructor() {
       super('Dragão Astefato');
       this.life = 7500;
       this.attack = 120;
       this.defense = 80;
       this.maxLife = this.life;
       this.special = "Volta no tempo + destruir passado"; 
      }
    }

    class Knight extends Character {
      constructor() {
       super('Cavaleiro');
       this.life = 2300;
       this.attack = 30;
       this.defense = 15;
       this.maxLife = this.life;
       this.special = "Capacete enspinhoso"; 
      }
    }

     class DragonEletro extends Character {
      constructor() {
       super('Dragon Elétrico');
       this.life = 3600;
       this.attack = 90;
       this.defense = 10;
       this.maxLife = this.life;
        this.special = "Eletrucação sem chance"; 
      }
    }
  
    class DragonAgua extends Character {
      constructor() {
       super('Dragon Água');
       this.life = 3900;
       this.attack = 95;
       this.defense = 10;
       this.maxLife = this.life;
      this.special = "Afogamento pesado"; 
      }
    }
  
         class DragonTerra extends Character {
      constructor() {
       super('Dragon Terra');
       this.life = 3200;
       this.attack = 60;
       this.defense = 40;
       this.maxLife = this.life;
        this.special = "Escudo"; 
      }
    }
     
      class DragonPlanta extends Character {
      constructor() {
       super('Dragon Planta');
       this.life = 3100;
       this.attack = 70;
       this.defense = 80;
       this.maxLife = this.life;
        this.special = "Aveia cortada"; 
      }
    }

      class DragonFogo extends Character {
      constructor() {
       super('Dragon Fogo');
       this.life = 3700;
       this.attack = 80;
       this.defense = 7;
       this.maxLife = this.life;
       this.special = "Explosão de Chamas"; 
      }
    }


     class MPP extends Character {
      constructor() {
       super('MPP');
       this.life = 9000;
       this.attack = 180;
       this.defense = 70;
       this.maxLife = this.life;
       this.special = "DOMAMENTO + Donaçação eterna"; 
      }
    }

    class DragonElemental extends Character {
      constructor() {
       super('Dragon Elemento');
       this.life = 10000;
       this.attack = 150;
       this.defense = 60;
       this.maxLife = this.life;
       this.special = "Furacão TUDO + Ondas tóxicas"; 
      }
    }
       
      class Kaka extends Character {
      constructor() {
       super('Kaká');
       this.life = 10000;
       this.attack = 200;
       this.defense = 100;
       this.maxLife = this.life;
       this.special = "FORTE + Incrível + Dominação + Poder + Velocidade + Inteligência"; 
      }
    }
         class DragonC extends Character {
      constructor() {
       super('Dragon Comum');
       this.life = 7000;
       this.attack = 190;
       this.defense = 190;
       this.maxLife = this.life;
       this.special = "Clas + Fúria"; 
      }
    }
       

       class DragonVee extends Character {
      constructor() {
       super('Dragon Vento');
       this.life =  3200;
       this.attack = 60;
       this.defense = 50;
       this.maxLife = this.life;
       this.special = "Nuvem Preta + Furacão"; 
      }
    }

    class DragonMisto extends Character {
      constructor() {
       super('Dragon Misto');
       this.life =  4700;
       this.attack = 90;
       this.defense = 50;
       this.maxLife = this.life;
        this.special = "Portal de acabamento + Areia movediça"; 
      }
    }

    class DragonAtaqueForte extends Character {
      constructor() {
       super('Dragon Ataque');
       this.life =  4000;
       this.attack = 115;
       this.defense = 10;
       this.maxLife = this.life;
        this.special = "Espada da fúria"; 
      }
    }
    class DragonDefeseForte extends Character {
      constructor() {
       super('Dragon Defese');
       this.life =  4200;
       this.attack = 75;
       this.defense = 115;
       this.maxLife = this.life;
        this.special = "Escudo seguro"; 
      }
    }


          class DragonMetal extends Character {
      constructor() {
       super('Dragon Metal');
       this.life =  4900;
       this.attack = 99;
       this.defense = 60;
       this.maxLife = this.life;
        this.special = "Explosão de aço"; 
      }
    }

        class Rebeca extends Character {
      constructor() {
       super('Irmã Rebeca');
       this.life =  9500;
       this.attack = 150;
       this.defense = 90;
       this.maxLife = this.life;
        this.special = "Cura + Pirraça + Ânimo + Gracinha"; 
      }
    }

    class DragonApelaoJ extends Character {
      constructor() {
       super('Dragon Apelão Júnior');
       this.life = 5000;
       this.attack = 118;
       this.defense = 99;
       this.maxLife = this.life;
       this.special = "Apelo forte"; 
      }
    }
    class DragonXavierJ extends Character {
      constructor() {
       super('Dragon Chave Xavier Júnior');
       this.life = 5500;
       this.attack = 119;
       this.defense = 99;
       this.maxLife = this.life;
       this.special = "Esperança de TRANCAR"; 
      }
    }
     class DragonDark extends Character {
      constructor() {
       super('Dragon Sombrio Sombras');
       this.life = 3200;
       this.attack = 70;
       this.defense = 30;
       this.maxLife = this.life;
        this.special = "Espada da morte"; 
      }
    }
         
     class DragonApelao extends Character {
      constructor() {
       super('Dragon Apelão');
       this.life = 6000;
       this.attack = 180;
       this.defense = 120;
       this.maxLife = this.life;
      this.special = "Apelo destriuidor + PALANGO"; 
      }
    }

 class DragonFORTE extends Character {
      constructor() {
       super('Dragon FORTE');
       this.life = 7000;
       this.attack = 190;
       this.defense = 130;
       this.maxLife = this.life;
        this.special = "Punhos indestrutivel + Infraco"; 
      }
    }

     class DragonLendario extends Character {
      constructor() {
       super('Dragon Lendário');
       this.life = 7000;
       this.attack = 200;
       this.defense = 100;
       this.maxLife = this.life;
      this.special = "Pegar vida + Morder FORTE";
      }
    }
  class DragonXavier extends Character {
      constructor() {
       super('Dragon Xavier');
       this.life = 8000;
       this.attack = 199;
       this.defense = 99;
       this.maxLife = this.life;
        this.special = "Tranco eterno + chave do Buraco"; 
      }
    }
      class Sorcerer extends Character {
        constructor() {
          super('Mago');
          this.life = 1200;
          this.attack = 50;
          this.defense = 13;
          this.maxLife = this.life;
          this.special = "Magia Pesada"; 
         }
      }
  
   class DragonLight extends Character {
      constructor() {
       super('Dragon Esplandecente Luz');
       this.life = 3200;
       this.attack = 80;
       this.defense = 20;
       this.maxLife = this.life;
      this.special = "Iluminação eterna"; 
      }
    }
      class LittleMonster extends Character {
        constructor() {
            super('Little Monster');
            this.life = 1100;
            this.attack = 35;
            this.defense = 17;
            this.maxLife = this.life;
            this.special = "Amendrontação"; 
           }
      }
  
      class  BigMonster extends Character {
        constructor() {
            super('Big Monster');
            this.life = 1950;
            this.attack = 40;
            this.defense = 20;
            this.maxLife = this.life;
            this.special = " Golpe Atordoante"; 
           }
      }

class Stage {
  constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;
    this.log = logObject;

    this.specialBtn1 = null;
    this.specialBtn2 = null;
  }

  start() {
    this.update();
    if (typeof atualizarImagensDoCombate === "function") {
      atualizarImagensDoCombate(this.fighter1.name, this.fighter2.name);
    }

    // Botões de ataque normal
    this.fighter1El.querySelector('.attackButton')
      .addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
    this.fighter2El.querySelector('.attackButton')
      .addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

    // Botões de ESPECIAL
    this.specialBtn1 = document.createElement('button');
    this.specialBtn1.className = 'specialButton';
    this.specialBtn1.textContent = this.fighter1.special ? `Usar Especial: ${this.fighter1.special}` : 'Especial indisponível';
    this.specialBtn1.disabled = !this.fighter1.special || this.fighter1.specialUsed;
    this.specialBtn1.addEventListener('click', () => this.usarEspecial(this.fighter1, this.fighter2));
    this.fighter1El.appendChild(this.specialBtn1);

    this.specialBtn2 = document.createElement('button');
    this.specialBtn2.className = 'specialButton';
    this.specialBtn2.textContent = this.fighter2.special ? `Usar Especial: ${this.fighter2.special}` : 'Especial indisponível';
    this.specialBtn2.disabled = !this.fighter2.special || this.fighter2.specialUsed;
    this.specialBtn2.addEventListener('click', () => this.usarEspecial(this.fighter2, this.fighter1));
    this.fighter2El.appendChild(this.specialBtn2);
  }

  update() {
    // Painel 1
    this.fighter1El.querySelector('.name').innerHTML = `
      ${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP
      <br><small>Especial: ${this.fighter1.special || 'Nenhum'} ${this.fighter1.special && this.fighter1.specialUsed ? '(usado)' : ''}</small>`;
    const f1Pct = Math.max(0, (this.fighter1.life / this.fighter1.maxLife) * 100);
    this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

    // Painel 2
    this.fighter2El.querySelector('.name').innerHTML = `
      ${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP
      <br><small>Especial: ${this.fighter2.special || 'Nenhum'} ${this.fighter2.special && this.fighter2.specialUsed ? '(usado)' : ''}</small>`;
    const f2Pct = Math.max(0, (this.fighter2.life / this.fighter2.maxLife) * 100);
    this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;

    // Atualiza disponibilidade do botão especial
    if (this.specialBtn1) this.specialBtn1.disabled = !this.fighter1.special || this.fighter1.specialUsed || this.fighter1.life <= 0;
    if (this.specialBtn2) this.specialBtn2.disabled = !this.fighter2.special || this.fighter2.specialUsed || this.fighter2.life <= 0;
  }

  doAttack(attacking, attacked) {
    if (attacking.life <= 0 || attacked.life <= 0) {
      this.log.addMessage("A luta acabou!");
      return;
    }

    const attackFactor = Number((Math.random() * 2).toFixed(2));   // 0.00–2.00
    const defenseFactor = Number((Math.random() * 2).toFixed(2));  // 0.00–2.00
    const tipo = getMultiplicador(attacking, attacked);

    const actualAttack = attacking.attack * attackFactor * tipo;
    const actualDefense = attacked.defense * defenseFactor;

    const somAtaque = document.getElementById('somAtaque');
    const somDefesa = document.getElementById('somDefesa');

    if (actualAttack > actualDefense) {
      attacked.life -= actualAttack;
      this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}${tipo !== 1 ? ` (x${tipo})` : ''}.`);
      if (somAtaque) { somAtaque.currentTime = 0; somAtaque.play(); }
      this._flashAtacado(attacked);
      this._checarMorte(attacked);
    } else {
      this.log.addMessage(`${attacked.name} conseguiu defender...`);
      if (somDefesa) { somDefesa.currentTime = 0; somDefesa.play(); }
    }

    this.update();
  }

  usarEspecial(attacker, defender) {
    if (attacker.life <= 0 || defender.life <= 0) return;
    if (!attacker.special) return; // só checa se tem especial, sem bloquear por uso

    // dano especial BEM forte + tipo + variação
    const rand = 2.1 + Math.random() * 4.8;  // variação aleatória
    const tipo = getMultiplicador(attacker, defender);  // 0.75 / 1 / 1.5 ...
    const danoEspecial = Math.round(attacker.attack * 3.0 * rand * tipo);

    defender.life -= danoEspecial;

    const somAtaque = document.getElementById('somAtaque');
    if (somAtaque) { somAtaque.currentTime = 0; somAtaque.play(); }

    this.log.addMessage(`${attacker.name} usou **${attacker.special}** e causou ${danoEspecial} de dano${tipo !== 1 ? ` (x${tipo})` : ''}!`);

    this._flashAtacado(defender);
    this._checarMorte(defender);
    this.update();
}


  _flashAtacado(personagem) {
    const el = (personagem === this.fighter1) ? this.fighter1El : this.fighter2El;
    el.classList.add('fighterFlash');
    setTimeout(() => el.classList.remove('fighterFlash'), 200);
  }

  _checarMorte(atacado) {
    if (atacado.life > 0) return;

    atacado.life = 0;
    this.log.addMessage(`${atacado.name} foi derrotado!`);

    const somMorte = document.getElementById('somMorte');
    if (somMorte) { somMorte.currentTime = 0; somMorte.play(); }

    // desativa botões
    const btns = [
      this.fighter1El.querySelector('.attackButton'),
      this.fighter2El.querySelector('.attackButton'),
      this.specialBtn1,
      this.specialBtn2
    ].filter(Boolean);
    btns.forEach(b => b.disabled = true);

    // chama fim de luta (se existir)
    const vencedor = atacado === this.fighter1 ? "player2" : "player1";
    if (typeof fimDaLuta === "function") {
      fimDaLuta(vencedor);
    }
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

// ✅ Inicializa moedas e status dos passes
let moedas = parseInt(localStorage.getItem("moedas")) || 0;
let passeLiberado = moedas >= 1500;
let passe2Liberado = moedas >= 4000;

// ✅ Inicializa status de compra do passe 2
if (localStorage.getItem("passe2Comprado") === null) {
  localStorage.setItem("passe2Comprado", "false");
}
let passe2Comprado = localStorage.getItem("passe2Comprado") === "true";

// ✅ Lista de dragões
const todosOsDragoes = [
  // Dragões do Passe 1
  { nome: "Dragon Apelão", value: "DragonApelao", passe: true },
  { nome: "Dragon FORTE", value: "DragonFORTE", passe: true },
  { nome: "Dragon Lendário", value: "DragonLendario", passe: true },
  { nome: "Dragon Xavier", value: "DragonXavier", passe: true },

  // Dragões do Passe 2
  { nome: "Humano", value: "Humano", passe2: true },
  { nome: "Dragão Astefato", value: "DragonAstefato", passe2: true },
  { nome: "MPP", value: "MPP", passe2: true },
  { nome: "Dragão Elemental", value: "DragonElemental", passe2: true },
  { nome: "Kaká", value: "Kaka", passe2: true },
  { nome: "Dragão", value: "DragonC", passe2: true },
  { nome: "Irmã Rebeca", value: "Rebeca", passe2: true },

  // Dragões sem passe
  { nome: "Cavaleiro", value: "Knight" },
  { nome: "Mago", value: "Sorcerer" },
  { nome: "Rei", value: "King" },
  { nome: "Rainha", value: "Queen" },
  { nome: "Montro Grande", value: "BigMonster" },
  { nome: "Monstro Pequeno", value: "LittleMonster" },
  { nome: "Dragão Sombrio", value: "DragonDark" },
  { nome: "Dragão Esplandecente", value: "DragonLight" },
  { nome: "Dragão Vento", value: "DragonVee" },
  { nome: "Dragão Elétrico", value: "DragonEletro" },
  { nome: "Dragão Água", value: "DragonAgua" },
  { nome: "Dragão Terra", value: "DragonTerra" },
  { nome: "Dragão Planta", value: "DragonPlanta" },
  { nome: "Dragão Fogo", value: "DragonFogo" },
  { nome: "Dragão Misto", value: "DragonMisto" },
  { nome: "Dragão Metal", value: "DragonMetal" },
  { nome: "Dragão Ataque Forte", value: "DragonAtaqueForte" },
  { nome: "Dragão Defese Forte", value: "DragonDefeseForte" },
  { nome: "Dragão Apelão J.", value: "DragonApelaoJ" },
  { nome: "Dragão Xavier J.", value: "DragonXavierJ" },
  { nome: "Dragão Gelo", value: "DragonGelo" },
  { nome: "Dragão Ancestral", value: "DragonAncestral" }
];

// ✅ Função para preencher os <select> com dragões
function preencherSelectComDragoes(idSelect) {
  const seletor = document.getElementById(idSelect);
  if (!seletor) return;

  todosOsDragoes.forEach(dr => {
    const opt = document.createElement("option");
    opt.value = dr.value;
    opt.textContent = dr.nome;

    if ((dr.passe && !passeLiberado) || (dr.passe2 && !passe2Comprado)) {
      opt.disabled = true;
      opt.textContent += dr.passe ? " 🔒 (Passe 1)" : " 🔒 (Passe 2)";
    }

    seletor.appendChild(opt);
  });
}

// ✅ Função para bloquear dragões após a luta
function bloquearDragoesDoPasse() {
  const moedasAtualizadas = parseInt(localStorage.getItem("moedas") || "0");

  const dragoesPasse1 = todosOsDragoes.filter(dr => dr.passe).map(dr => dr.value);
  const dragoesPasse2 = todosOsDragoes.filter(dr => dr.passe2).map(dr => dr.value);

  ["player1-select", "player2-select"].forEach(id => {
    const select = document.getElementById(id);
    if (!select) return;

    Array.from(select.options).forEach(opt => {
      if (moedasAtualizadas < 1500 && dragoesPasse1.includes(opt.value)) {
        opt.disabled = true;
        opt.text += " (Bloqueado - Passe 1)";
      }
      if (moedasAtualizadas < 4000 && dragoesPasse2.includes(opt.value)) {
        opt.disabled = true;
        opt.text += " (Bloqueado - Passe 2)";
      }
    });
  });
}

// ✅ Inicialização ao carregar a página
window.onload = () => {
  console.log("Moedas:", moedas);
  console.log("Passe 1 liberado:", passeLiberado);
  console.log("Passe 2 comprado:", passe2Comprado);
  console.log("Lista de dragões:", todosOsDragoes);

  preencherSelectComDragoes("player1-select");
  preencherSelectComDragoes("player2-select");
  bloquearDragoesDoPasse();
};

const recompensa = Math.floor(Math.random() * 100000) + 20;
moedas += recompensa;
Log.innerHTML += `<li>💰 Você ganhou ${recompensa} moedas!</li>`;

document.body.classList.add('fim-da-luta');
setTimeout(() => document.body.classList.remove('fim-da-luta'), 2000);

function pegarImagemDoDragao(nome) {
  nome = nome
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, ""); // remove espaços

  const imagens = {
    eletro: 'eletro.png',
    eletrico: 'eletro.png',
    lendario: 'lendariopasse.png',
    xavier: 'xavierpasse.png',
    dark: 'sombra.png',
    sombrio: 'sombra.png',
    agua: 'agua.png',
    light: 'luz.png',
    esplandecente: 'luz.png',
    apelao: 'apelaopasse.png',
    fogo: 'fogo.png',
    planta: 'planta.png',
    metal: 'metal.png',
    misto: 'misto.png',
    forte: 'forte.png',
    terra: 'terra.png',
    cavaleiro: 'cava.png',
    vento: 'vee.png',
    littlemonster: 'lmonster.png',
    bigmonster: 'bmonster.png',
    mago: 'sor.png',
    rainha: 'q.png',
    rei: 'rei.png',
    dragondefese: 'def.png',
     dragonataque: 'at.png',
     gelo: 'gelo.png',
   ancestral: 'ancestral.png',
   astefato: 'as.png',
   mpp: 'mpp.icon.png',
    elemento: 'elemental.png',
   kaka: 'kaka.png',
    dragonc: 'dragao.png',
    comum:'dragao',
   humano: 'hum.png',
    rebeca: 'rebeca.png'
  };

  for (let chave in imagens) {
    if (nome.includes(chave)) {
      return imagens[chave];
    }
  }
  return 'erro.png';
}


function atualizarImagensDoCombate(nome1, nome2) {
  const img1 = document.getElementById("imgChar");
  const img2 = document.getElementById("imgMonster");

  img1.src = pegarImagemDoDragao(nome1);
  img2.src = pegarImagemDoDragao(nome2);
}

function getMultiplicador(atacante, defensor) {
  const tipos = {
    DragonFogo:        { forte: ["DragonPlanta"],   fraco: ["DragonAgua"] },
    DragonAgua:        { forte: ["DragonFogo"],     fraco: ["DragonTerra"] },
    DragonPlanta:      { forte: ["DragonAgua"],     fraco: ["DragonFogo"] },
    DragonTerra:       { forte: ["DragonFogo"],     fraco: ["DragonAgua"] },
    DragonEletro:      { forte: ["DragonAgua"],     fraco: ["DragonTerra"] },
    DragonVee:         { forte: ["DragonTerra"],    fraco: ["DragonFogo"] },
    DragonMisto:       { forte: ["DragonDark"],     fraco: ["DragonLight"] },
    DragonAtaqueForte: { forte: ["DragonPlanta"],   fraco: ["DragonMetal"] },
    DragonDefeseForte: { forte: ["DragonFogo"],     fraco: ["DragonAtaqueForte"] },
    DragonMetal:       { forte: ["DragonAtaqueForte"], fraco: ["DragonVee"] },
    DragonApelaoJ:     { forte: ["DragonPlanta"],   fraco: ["DragonDefeseForte"] },
    DragonXavierJ:     { forte: ["DragonFogo"],     fraco: ["DragonMisto"] },
    DragonDark:        { forte: ["DragonLight"],    fraco: ["DragonMisto"] },
    DragonApelao:      { forte: ["DragonVee"],      fraco: ["DragonMetal"] },
    DragonFORTE:       { forte: ["DragonApelao"],   fraco: ["DragonLendario"] },
    DragonLendario:    { forte: ["DragonFORTE"],    fraco: ["DragonXavier"] },
    DragonXavier:      { forte: ["DragonLendario"], fraco: ["DragonApelaoJ"] },
    DragonLight:       { forte: ["DragonDark"],     fraco: ["DragonMisto"] },
    DragonGelo:        { forte: ["DragonFogo"],     fraco: ["DragonMetal"] },
    DragonPrimitivo:   { forte: ["DragonMetal"],    fraco: ["DragonLight"] },
     DragonAstefato:    { forte: ["Humano"],  fraco: ["DragonBlack"] },
    MPP:           { forte: [],     fraco: ["Kaka"] },
    Kaka:        { forte: [],     fraco: ["Humano"] },
    Rebeca:        { forte: ["Humano"],     fraco: ["Kaka"] },
    DragonElemental:   { forte: ["DragonXavier"],    fraco: ["DragonMisto"] },
     DragonC:    { forte: ["Humano"],  fraco: ["MPP"] },
    Humano:     { forte: [],                   fraco: ["DragonFORTE"] },
    LittleMonster:     { forte: [], fraco: [] },
    BigMonster:        { forte: [], fraco: [] },
    King:              { forte: [], fraco: [] },
    Queen:             { forte: [], fraco: [] },
    Knight:            { forte: [], fraco: [] },
    Sorcerer:          { forte: [], fraco: [] }
  };

  const a = atacante.constructor.name;
  const d = defensor.constructor.name;
  const info = tipos[a];
  if (!info) return 1;

  if (info.forte && info.forte.includes(d)) return 5.55;  // forte
  if (info.fraco && info.fraco.includes(d)) return 2.75; // fraco
  return 2; // neutro
}



//