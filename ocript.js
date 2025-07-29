

let log = new Log(document.querySelector('.log'));


const player1Type = localStorage.getItem("player1");
const player2Type = localStorage.getItem("player2");

const createCharacter = (type, name = type) => {
  switch (type) {
    case "Knight": return new Knight(name);
    case "Sorcerer": return new Sorcerer(name);
    case "BigMonster": return new BigMonster();
    case "LittleMonster": return new LittleMonster();
    case "DragonDark": return new DragonDark();
    case "DragonLight": return new DragonLight();
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

