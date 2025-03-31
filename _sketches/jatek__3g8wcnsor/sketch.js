let eredetiY;
let ugrik = false;
let ugrasiMagassag = 120;
let hossz = 400;
let jatekVege = false;
let akadaly = new Akadaly(hossz - hossz / 5, hossz - hossz / 5, hossz / 5, 2);
let akadaly2 = new Akadaly(1.5 * hossz, hossz - hossz / 5, hossz / 5, 2);
let karakter = new Karakter(hossz / 2, hossz - 25, 50);

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
  akadaly.mozgat();
  akadaly.rajzol();

  akadaly2.mozgat();
  akadaly2.rajzol();

  if (ugrik) {
    karakter.korY -= 5;
    if (karakter.korY <= eredetiY - ugrasiMagassag) {
      ugrik = false;
    }
  } else if (karakter.korY < eredetiY) {
    karakter.korY += 5;
  }
  karakter.rajzol();
  talaj(karakter, akadaly, akadaly2);
  vegeVanE(karakter,akadaly,akadaly2)

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
function talaj(kar, akd, akd2) {
  let rajtaVanE = false;
  if (holVagyunk(kar, akd) == "rajta") {
    rajtaVanE = true;
  } else if (holVagyunk(kar, akd2) == "rajta") {
    rajtaVanE = true;
  }
  if (rajtaVanE == true) {
    eredetiY = akadaly.akdY - karakter.atmero / 2;
  } else {
    eredetiY = hossz - karakter.atmero / 2;
  }
}

function vegeVanE(kar,akd,akd2){
  if (holVagyunk(kar, akd) == "benne") {
    jatekVege = true;
  } else if (holVagyunk(kar, akd2) == "benne") {
    jatekVege = true;
  }
}
