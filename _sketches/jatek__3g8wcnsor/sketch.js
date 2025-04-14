let hossz = 400;
let eredetiY;
let ugrik = false;
let ugrasiMagassag = hossz / 3.3;
let ugrasiV = 0;
let g = hossz / 2000;
let jatekVege = false;
let karakter = new Karakter(hossz / 3, hossz - hossz / 16, hossz / 8);
let palya = [
new Akadaly(0.8, 0.8, 0.2, 0.2, 0.005),
  new Akadaly(1.1, 0.6, 0.2, 0.2, 0.005),
  new Akadaly(1.4, 0.4, 0.2, 0.2, 0.005),
  new Akadaly(1.7, 0.8, 0.5, 0.2, 0.005),
  new Akadaly(2.0, 0.4, 0.5, 0.2, 0.005),
  new Akadaly(2.7, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(2.7, 0.4, 0.4, 0.1, 0.005),
  new Akadaly(3.4, 0.4, 0.4, 0.1, 0.005),
  new Akadaly(3.5, 0.8, 0.3, 0.1, 0.005),
  new Akadaly(4.0, 0.7, 0.3, 0.1, 0.005),
  new Akadaly(4.4, 0.6, 0.3, 0.1, 0.005),
  new Akadaly(5.0, 0.5, 0.3, 0.3, 0.005),
  new Akadaly(5.5, 0.6, 0.2, 0.2, 0.005),
  new Akadaly(6.0, 0.8, 0.2, 0.2, 0.005),
  new Akadaly(6.3, 0.6, 0.2, 0.4, 0.005),
  new Akadaly(6.6, 0.4, 0.2, 0.6, 0.005),
  new Akadaly(7.0, 0.7, 1.0, 0.1, 0.005),
  new Akadaly(7.4, 0.5, 0.6, 0.1, 0.005),
  new Akadaly(7.8, 0.3, 0.2, 0.1, 0.005),
  new Akadaly(8.2, 0.8, 0.2, 0.2, 0.005),
  new Akadaly(8.5, 0.7, 0.2, 0.3, 0.005),
  new Akadaly(8.9, 0.4, 0.2, 0.64, 0.005),
  new Akadaly(8.9, 0.0, 0.1, 0.26, 0.005),
  new Akadaly(9.4, 0.4, 0.2, 0.64, 0.005),
  new Akadaly(9.53, 0.0, 0.1, 0.26, 0.005),
];

function setup() {
  createCanvas(1.5 * hossz, hossz);
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
  if (palya[0].akdX == 240) {
    ugrik = true;
  }
  background(220);
  for (let i = 0; i < palya.length; i = i + 1) {
    palya[i].mozgat();
    palya[i].rajzol();
  }
  if (ugrik) {
    karakter.korY += ugrasiV;
    ugrasiV += g;
    if (karakter.korY >= eredetiY) {
      karakter.korY = eredetiY;
      ugrasiV = 0;
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
    ugrasiV = -Math.sqrt(2 * g * ugrasiMagassag);
  }
}

function talaj(kar, paly) {
  let rajtaVanE = false;
  let min = hossz;
  for (let i = 0; i < paly.length; i = i + 1) {
    if (paly[i].holVagyunk(kar) == "rajta") {
      rajtaVanE = true;
      if (min < paly[i].akdY) {
        min = min;
      } else {
        min = paly[i].akdY;
      }
    }
  }
  eredetiY = min - kar.atmero / 2;

  if (rajtaVanE == false) {
    eredetiY = hossz - karakter.atmero / 2;
  }
}

function vegeVanE(kar, paly) {
  for (let i = 0; i < paly.length; i = i + 1) {
    if (paly[i].holVagyunk(kar) == "benne") {
      jatekVege = true;
    }
  }
}
