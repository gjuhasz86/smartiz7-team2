let eredetiY;
let ugrik = false;
let ugrasiMagassag = 120;
let hossz = 400;
let jatekVege = false;
//let akadaly = new Akadaly(hossz - hossz / 5, hossz - hossz / 5, hossz / 5, 2);
//let akadaly2 = new Akadaly(1.5 * hossz, hossz - hossz / 10, hossz / 10, 2);
let karakter = new Karakter(hossz / 2, hossz - 25, 50);
let palya = [
  new Akadaly(hossz - hossz / 5, hossz - hossz / 5, hossz / 5, 2),
  new Akadaly(1.5 * hossz, hossz - hossz / 10, hossz / 10, 2),
  new Akadaly(2 * hossz, hossz - hossz / 10, hossz / 10, 2),
  new Akadaly(2.5 * hossz, hossz - hossz / 10, hossz / 10, 2),
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
    karakter.korY -= 5;
    if (karakter.korY <= eredetiY - ugrasiMagassag) {
      ugrik = false;
    }
  } else if (karakter.korY < eredetiY) {
    karakter.korY += 5;
  }
  karakter.rajzol();
  talaj(karakter, palya);
  vegeVanE(karakter, palya);
}

function mousePressed() {
  if (karakter.korY >= eredetiY) {
    ugrik = true;
  }
}
// kör paraméterei, akadály paraméterei, ütközött e vagy nem return,
function utkozes(kar, akd) {
  //console.log(akd, kar);
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
  if (rajta(kar, akd) == true) {
    return "rajta";
  } else if (utkozes(kar, akd) == true) {
    return "benne";
  } else {
    return "kivul";
  }
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
