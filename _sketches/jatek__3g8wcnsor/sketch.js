let magassag = 400;
let szelesseg = 1.5 * magassag;
let eredetiY;
let ugrik = false;
let ugrasiMagassag = magassag / 3.3;
let ugrasiV = 0;
let g = magassag / 2000;
let jatekVege = false;
let karakter = new Karakter(
  magassag / 3,
  magassag - magassag / 16,
  magassag / 8
);
let hatterKep, karakterKep, akadalyKep;
let kezdoX = 0;

function preload() {
  hatterKep = loadImage("hatter.png");
  karakterKep = loadImage("karakter.png");
  akadalyKep = loadImage("akadaly.png");
}

let palya1 = [
  new Akadaly(0.8, 0.8, 0.2, 0.2, 0.005),
  new Akadaly(1.1, 0.6, 0.2, 0.2, 0.005),
  new Akadaly(1.4, 0.4, 0.2, 0.2, 0.005),
  new Akadaly(1.7, 0.8, 0.5, 0.2, 0.005),
  new Akadaly(2.0, 0.4, 0.5, 0.2, 0.005),
  new Akadaly(2.7, 0.8, 0.3, 0.2, 0.005),
];
let palya2 = [
  new Akadaly(1.0, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(1.4, 0.6, 0.2, 0.3, 0.005),
  new Akadaly(1.9, 0.6, 0.4, 0.2, 0.005),
  new Akadaly(2.5, 0.4, 0.3, 0.3, 0.005),
  new Akadaly(3.0, 0.8, 0.2, 0.2, 0.005),
];
let palyak = [palya1, palya2];
let palya = [];

let főpalya = [
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
  createCanvas(szelesseg, magassag);
  karakter = new Karakter(magassag / 3, magassag - magassag / 16, magassag / 8);
  eredetiY = karakter.korY;
  palyaGeneral();
  kezdoX = palya[0].akdX;
}

function draw() {
  if (jatekVege) {
    textSize(30);
    fill("black");
    text(
      `Eredmény: ${palya[0].akdX * -1 + kezdoX - 2}`,
      magassag / 2,
      magassag / 3
    );
    textSize(30);
    fill("black");
    text("Játék vége!", magassag / 2, magassag / 3.8);
    return;
  }
  if (palya[palya.length - 1].akdX < szelesseg) {
    palyaGeneral();
  }
  if (palya[0].akdX == 240) {
    ugrik = true;
  }
  background(hatterKep);
  textSize(30);
  fill("black");
  text(`Eredmény: ${palya[0].akdX * -1 + kezdoX}`, magassag / 2, magassag / 3);
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
function palyaGeneral() {
  szam = floor(random(0, palyak.length));
  let valasztas = palyak[szam];
  for (let i = 0; i < valasztas.length; i = i + 1) {
    palya.push(valasztas[i].klon());
    palya[palya.length - 1].akdX = palya[palya.length - 1].akdX + szelesseg;
  }
}
function talaj(kar, paly) {
  let rajtaVanE = false;
  let min = magassag;
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
    eredetiY = magassag - karakter.atmero / 2;
  }
}

function vegeVanE(kar, paly) {
  for (let i = 0; i < paly.length; i = i + 1) {
    if (paly[i].holVagyunk(kar) == "benne") {
      jatekVege = true;
    }
  }
}
