let eredetiY;
let ugrik = false;
let ugrasiMagassag = 120;
let ugrasiSebesseg = 0; 
let gravitacio = 0.2; 
let hossz = 400;
let jatekVege = false;
let karakter = new Karakter(hossz / 2, hossz - 25, 50);
let palya = [
  new Akadaly(hossz - hossz / 5, hossz - hossz / 5, hossz / 5, 2),
  //new Akadaly(1.5 * hossz, hossz - hossz / 10, hossz / 10, 2),
  //new Akadaly(2 * hossz, hossz - hossz / 10, hossz / 10, 2),
  //new Akadaly(2.5 * hossz, hossz - hossz / 10, hossz / 10, 2),
];

function setup() {
  createCanvas(hossz, hossz);
  eredetiY = karakter.korY;
}

function draw() {
  if (jatekVege) {
    //background("red");
    textSize(30);
    fill("black");
    text("Játék vége!", hossz / 3.5, hossz / 1.8);
    return;
  }
  background(220);
  for (let i = 0; i < palya.length; i = i + 1) {
    palya[i].mozgat();
    palya[i].rajzol();
  }

  if (ugrik) {
        karakter.korY += ugrasiSebesseg; 
    ugrasiSebesseg += gravitacio;   

    if (karakter.korY >= eredetiY) {
      karakter.korY = eredetiY;
      ugrasiSebesseg = 0;  
      ugrik = false;       
    }
  }
  karakter.rajzol();
  talaj(karakter, palya);
  vegeVanE(karakter, palya);
  if (karakter.korY < 255) {
    //jatekVege= true
  }
}

function mousePressed() {
  if (karakter.korY >= eredetiY) {
    ugrik = true;
   ugrasiSebesseg = -Math.sqrt(2 * gravitacio * ugrasiMagassag);
  }
}
// kör paraméterei, akadály paraméterei, ütközött e vagy nem return,
function utkozes(kar, akd) {
  if (
    kar.jobbOldal() > akd.akdX &&
    kar.balOldal() < akd.akdX + akd.akd &&
    kar.also() > akd.akdY &&
    kar.felso() < akd.akdY + akd.akd
  ) {
    return true;
  } else {
    return false;
  }
}
function rajta(kar, akd) {
  if (
    kar.also() <= akd.akdY + 5 &&
    kar.jobbOldal() >= akd.akdX &&
    kar.balOldal() <= akd.akdX + akd.akd
  ) {
    return true;
  } else {
    return false;
  }
}
function holVagyunk(kar, akd) {
  console.log(akd, kar);
  let helyzet;
  if (rajta(kar, akd) == true) {
    helyzet = "rajta";
  } else if (utkozes(kar, akd) == true) {
    helyzet = "benne";
  } else {
    helyzet = "kivul";
  }
  console.log(helyzet);
  return helyzet;
}
function talaj(kar, paly) {
  let rajtaVanE = false;
  for (let i = 0; i < paly.length; i = i + 1) {
    if (holVagyunk(kar, paly[i]) == "rajta") {
      eredetiY = paly[i].akdY - kar.atmero / 2;
      rajtaVanE = true;
    }
  }
  if (rajtaVanE == false) {
    eredetiY = hossz - karakter.atmero / 2;
  }
}

function vegeVanE(kar, paly) {
  for (let i = 0; i < paly.length; i = i + 1) {
    if (holVagyunk(kar, paly[i]) == "benne") {
      jatekVege = true;
    }
  }
}
