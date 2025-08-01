

let log = new Log(document.querySelector('.log'));


const player1Type = localStorage.getItem("player1");
const player2Type = localStorage.getItem("player2");

const createCharacter = (type, name = type) => {
  switch (type) {
    case "Knight": return new Knight(name);
    case "Sorcerer": return new Sorcerer(name);                 
    case "King": return new King(name);
    case "Queen": return new Queen(name);
    case "BigMonster": return new BigMonster();
    case "LittleMonster": return new LittleMonster();
    case "DragonDark": return new DragonDark();
    case "DragonLight": return new DragonLight();
    case "DragonVee": return new DragonVee(); 
    case "DragonEletro": return new DragonEletro();
    case "DragonAgua": return new DragonAgua();
    case "DragonTerra": return new DragonTerra();
    case "DragonPlanta": return new DragonPlanta();
    case "DragonFogo": return new DragonFogo();
    case "DragonMisto": return new DragonMisto();
    case "DragonMetal": return new DragonMetal();
    case "DragonAtaqueForte": return new DragonAtaqueForte();
    case "DragonDefeseForte": return new DragonDefeseForte();
    case "DragonApelao": return new DragonApelao();
    case "DragonFORTE": return new DragonFORTE();
    case "DragonXavier": return new DragonXavier();
    case "DragonLendario": return new DragonLendario();
    case "DragonApelaoJ": return new DragonApelaoJ();
    case "DragonXavierJ": return new DragonXavierJ();
    default: return new Knight(name);
  }
};


let char = createCharacter(player1Type, "Jogador 1");
let monster = createCharacter(player2Type, "Jogador 2");

const stage = new Stage(
  char,
  monster,
  document.querySelector('#char'),
  document.querySelector('#monster'),
  log
);

stage.start(); 

//


