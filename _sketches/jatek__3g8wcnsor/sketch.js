let hossz = 400;
let eredetiY;
let ugrik = false;
let ugrasiMagassag = hossz / 3.3;
let ugrasiV = 0;
let g = hossz / 2000;
let jatekVege = false;
let karakter = new Karakter(hossz / 3, hossz - hossz / 16, hossz / 8);
let hatterKep, karakterKep, akadalyKep;

function preload() {
  hatterKep = loadImage("hatter.png");
  karakterKep = loadImage("karakter.png");
  akadalyKep = loadImage("akadaly.png");}

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
  new Akadaly(9.7, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(10.1, 0.5, 0.2, 0.3, 0.005),
  new Akadaly(10.4, 0.6, 0.4, 0.2, 0.005),
  new Akadaly(10.9, 0.4, 0.3, 0.3, 0.005),
  new Akadaly(11.4, 0.8, 0.2, 0.2, 0.005),
  new Akadaly(11.7, 0.6, 0.4, 0.1, 0.005),
  new Akadaly(12.2, 0.7, 0.5, 0.1, 0.005),
  new Akadaly(12.8, 0.5, 0.2, 0.3, 0.005),
  new Akadaly(13.4, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(13.8, 0.6, 0.2, 0.2, 0.005),
  new Akadaly(14.3, 0.5, 0.3, 0.3, 0.005),
  new Akadaly(14.8, 0.6, 0.2, 0.3, 0.005),
  new Akadaly(15.2, 0.7, 0.8, 0.1, 0.005),
  new Akadaly(16.0, 0.4, 0.3, 0.2, 0.005),
  new Akadaly(16.4, 0.8, 0.2, 0.2, 0.005),
  new Akadaly(16.8, 0.6, 0.3, 0.3, 0.005),
  new Akadaly(17.4, 0.8, 0.2, 0.2, 0.005),
  new Akadaly(17.9, 0.6, 0.3, 0.2, 0.005),
  new Akadaly(18.3, 0.5, 0.2, 0.3, 0.005),
  new Akadaly(18.7, 0.4, 0.4, 0.2, 0.005),
  new Akadaly(19.2, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(19.5, 0.5, 0.2, 0.2, 0.005),
  new Akadaly(19.9, 0.4, 0.3, 0.1, 0.005),
  new Akadaly(20.4, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(20.9, 0.6, 0.4, 0.1, 0.005),
  new Akadaly(21.3, 0.4, 0.2, 0.4, 0.005),
  new Akadaly(21.7, 0.8, 0.2, 0.2, 0.005),
  new Akadaly(22.1, 0.6, 0.3, 0.3, 0.005),
  new Akadaly(22.6, 0.4, 0.3, 0.2, 0.005),
  new Akadaly(22.9, 0.8, 0.5, 0.1, 0.005),
  new Akadaly(23.4, 0.7, 0.3, 0.1, 0.005),
  new Akadaly(24.0, 0.5, 0.3, 0.2, 0.005),
  new Akadaly(24.4, 0.4, 0.2, 0.6, 0.005),
  new Akadaly(25.0, 0.7, 0.3, 0.3, 0.005),
  new Akadaly(25.5, 0.5, 0.3, 0.3, 0.005),
  new Akadaly(25.9, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(26.3, 0.6, 0.2, 0.4, 0.005),
  new Akadaly(26.6, 0.5, 0.2, 0.4, 0.005),
  new Akadaly(26.9, 0.3, 0.4, 0.3, 0.005),
  new Akadaly(27.4, 0.5, 0.2, 0.2, 0.005),
  new Akadaly(27.8, 0.4, 0.3, 0.3, 0.005),
  new Akadaly(28.3, 0.8, 0.4, 0.2, 0.005),
  new Akadaly(28.8, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(29.4, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(29.9, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(30.5, 0.7, 0.3, 0.3, 0.005),
  new Akadaly(30.9, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(31.3, 0.6, 0.2, 0.3, 0.005),
  new Akadaly(31.7, 0.4, 0.2, 0.3, 0.005),
  new Akadaly(32.0, 0.7, 0.3, 0.2, 0.005),
  new Akadaly(32.4, 0.5, 0.2, 0.3, 0.005),
  new Akadaly(32.8, 0.4, 0.2, 0.4, 0.005),
  new Akadaly(33.3, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(33.7, 0.6, 0.3, 0.2, 0.005),
  new Akadaly(34.1, 0.5, 0.2, 0.2, 0.005),
  new Akadaly(34.5, 0.4, 0.3, 0.2, 0.005),
  new Akadaly(35.0, 0.7, 0.3, 0.2, 0.005),
  new Akadaly(35.4, 0.6, 0.2, 0.2, 0.005),
  new Akadaly(35.9, 0.5, 0.2, 0.3, 0.005),
  new Akadaly(36.3, 0.3, 0.2, 0.4, 0.005),
  new Akadaly(36.7, 0.5, 0.3, 0.3, 0.005),
  new Akadaly(37.1, 0.6, 0.2, 0.3, 0.005),
  new Akadaly(37.5, 0.7, 0.4, 0.2, 0.005),
  new Akadaly(38.0, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(38.6, 0.8, 0.2, 0.2, 0.005),
  new Akadaly(39.0, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(39.4, 0.7, 0.3, 0.2, 0.005),
  new Akadaly(39.9, 0.6, 0.3, 0.2, 0.005),
  new Akadaly(40.3, 0.5, 0.2, 0.3, 0.005),
  new Akadaly(40.7, 0.4, 0.2, 0.3, 0.005),
  new Akadaly(41.2, 0.5, 0.3, 0.3, 0.005),
  new Akadaly(42.4, 0.4, 0.2, 0.3, 0.005),
  new Akadaly(42.9, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(43.4, 0.7, 0.3, 0.2, 0.005),
  new Akadaly(43.9, 0.5, 0.3, 0.3, 0.005),
  new Akadaly(44.5, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(44.5, 0.6, 0.3, 0.2, 0.005),
  new Akadaly(44.9, 0.6, 0.2, 0.3, 0.005),
  new Akadaly(45.3, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(45.8, 0.6, 0.3, 0.2, 0.005),
  new Akadaly(46.3, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(46.8, 0.7, 0.3, 0.2, 0.005),
  new Akadaly(47.3, 0.6, 0.2, 0.2, 0.005),
  new Akadaly(47.8, 0.7, 0.3, 0.2, 0.005),
  new Akadaly(48.3, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(48.8, 0.6, 0.3, 0.2, 0.005),
  new Akadaly(49.3, 0.7, 0.3, 0.2, 0.005),
  new Akadaly(49.8, 0.6, 0.3, 0.2, 0.005),
  new Akadaly(50.3, 0.5, 0.2, 0.3, 0.005),
  new Akadaly(50.8, 0.4, 0.3, 0.3, 0.005),
  new Akadaly(51.3, 0.7, 0.3, 0.2, 0.005),
  new Akadaly(51.8, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(52.3, 0.6, 0.3, 0.2, 0.005),
  new Akadaly(52.8, 0.5, 0.2, 0.3, 0.005),
  new Akadaly(53.3, 0.4, 0.2, 0.3, 0.005),
];

function setup() {
  createCanvas(1.5 * hossz, hossz);
  karakter = new Karakter(hossz / 3, hossz - hossz / 16, hossz / 8);
  eredetiY = karakter.korY;
}

function draw() {
  if (jatekVege) {
    textSize(30);
    fill("black");
    text("Játék vége!", hossz / 3.5, hossz / 1.8);
    return;
  }
  if (palya[0].akdX == 240) {
    ugrik = true;
  }
  background(hatterKep);
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
