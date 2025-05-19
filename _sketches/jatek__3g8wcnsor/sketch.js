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
let palya0 = [
  new Akadaly(1, 0.8, 1.2, 0.3, 0.005),
  new Akadaly(1, 0.4, 0.3, 0.15, 0.005),
  new Akadaly(1, 0, 0.5, 0.2, 0.005),
  new Akadaly(1.6, 0.55, 0.6, 0.05, 0.005),
  new Akadaly(1.5, 0, 0.7, 0.1, 0.005),
  new Akadaly(2, 0.3, 0.2, 0.05, 0.005),
];

let palya1 = [
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
];
let palya2 = [
  new Akadaly(1.0, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(1.4, 0.6, 0.2, 0.3, 0.005),
  new Akadaly(1.9, 0.6, 0.4, 0.2, 0.005),
  new Akadaly(2.5, 0.4, 0.3, 0.3, 0.005),
  new Akadaly(3.0, 0.8, 0.2, 0.2, 0.005),
];
let palya3 = [
  new Akadaly(0.8, 0.7, 0.2, 0.3, 0.005),
  new Akadaly(0.8, 0.0, 0.2, 0.56, 0.005),
  new Akadaly(1.0, 0.8, 0.4, 0.2, 0.005),
  new Akadaly(1.4, 0.5, 0.2, 0.5, 0.005),
  new Akadaly(1.8, 0.5, 0.2, 0.5, 0.005),
  new Akadaly(2.3, 0.7, 0.2, 0.3, 0.005),
  new Akadaly(2.6, 0.15, 0.3, 0.3, 0.005),
  new Akadaly(2.9, 0.75, 0.1, 0.25, 0.005),
  new Akadaly(3.0, 0.3, 0.3, 0.2, 0.005),
  new Akadaly(3.35, 0.75, 0.2, 0.25, 0.005),
  new Akadaly(3.65, 0.6, 0.2, 0.4, 0.005),
  new Akadaly(3.95, 0.5, 0.2, 0.5, 0.005),
];
let palya4 = [
  new Akadaly(0.8, 0.9, 0.3, 0.1, 0.005),
  new Akadaly(1.1, 0.7, 0.3, 0.1, 0.005),
  new Akadaly(1.4, 0.5, 0.3, 0.1, 0.005),
  new Akadaly(1.7, 0.3, 0.3, 0.1, 0.005),
  new Akadaly(2.25, 0.5, 0.3, 0.1, 0.005),
  new Akadaly(2.8, 0.7, 0.3, 0.1, 0.005),
  new Akadaly(3.35, 0.9, 0.3, 0.1, 0.005),
];

let palya5 = [
  new Akadaly(0.8, 0.9, 1.0, 0.1, 0.005),
  new Akadaly(1.1, 0.7, 0.7, 0.1, 0.005),
  new Akadaly(1.4, 0.5, 0.4, 0.1, 0.005),
  new Akadaly(1.7, 0.3, 0.1, 0.1, 0.005),
];

let palya6 = [
  new Akadaly(0.8, 0.7, 0.2, 0.3, 0.005),
  new Akadaly(1.2, 0.5, 0.2, 0.5, 0.005),
  new Akadaly(1.6, 0.3, 0.2, 0.7, 0.005),
];

let palya7 = [
  new Akadaly(0.8, 0.8, 0.2, 0.2, 0.005),
  new Akadaly(1.15, 0.5, 0.2, 0.2, 0.005),
  new Akadaly(1.5, 0.8, 0.2, 0.2, 0.005),
  new Akadaly(1.9, 0.5, 0.2, 0.2, 0.005),
  new Akadaly(2.2, 0.2, 0.2, 0.8, 0.005),
];
let palya8 = [
  new Akadaly(0.8, 0.8, 0.2, 0.2, 0.005),
  new Akadaly(1.1, 0.7, 0.2, 0.3, 0.005),
  new Akadaly(1.5, 0.4, 0.2, 0.64, 0.005),
  new Akadaly(1.5, 0.0, 0.1, 0.26, 0.005),
  new Akadaly(2.0, 0.4, 0.2, 0.64, 0.005),
  new Akadaly(2.13, 0.0, 0.1, 0.26, 0.005),
];

let palya9 = [
  new Akadaly(0.8, 0.8, 0.2, 0.2, 0.005),
  new Akadaly(1.1, 0.6, 0.4, 0.1, 0.005),
  new Akadaly(1.7, 0.4, 0.4, 0.1, 0.005),
  new Akadaly(2.3, 0.5, 0.2, 0.5, 0.005),
  new Akadaly(2.7, 0.2, 0.1, 0.1, 0.005),
  new Akadaly(3.0, 0.3, 0.1, 0.1, 0.005),
  new Akadaly(3.3, 0.4, 0.1, 0.1, 0.005),
  new Akadaly(3.6, 0.5, 0.1, 0.1, 0.005),
  new Akadaly(3.9, 0.6, 0.1, 0.1, 0.005),
  new Akadaly(4.2, 0.7, 0.1, 0.1, 0.005),
  new Akadaly(4.5, 0.8, 0.1, 0.1, 0.005),
];

let palya10 = [
  new Akadaly(0.8, 0.8, 0.3, 0.1, 0.005),
  new Akadaly(1.3, 0.55, 0.3, 0.1, 0.005),
  new Akadaly(1.8, 0.85, 0.3, 0.1, 0.005),
  new Akadaly(1.9, 0.3, 0.3, 0.1, 0.005),
  new Akadaly(2.4, 0.65, 0.3, 0.1, 0.005),
];
let palya11 = [
  new Akadaly(1, 0.9, 0.4, 0.1, 0.005),
  new Akadaly(1.3, 0.8, 0.4, 0.4, 0.005),
  new Akadaly(1.7, 0.6, 0.5, 0.5, 0.005),
  new Akadaly(1.9, 0, 0.3, 0.4, 0.005),
  new Akadaly(2.2, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(2.6, 0.5, 0.5, 0.1, 0.005),
];

//-3,5
let palya12 = [
  new Akadaly(1, 0.5, 0.2, 0.2, 0.005),
  new Akadaly(1.8, 0, 0.2, 0.35, 0.005),
  new Akadaly(1.8, 0.55, 0.45, 0.45, 0.005),
  new Akadaly(1.5, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(2.25, 0.3, 0.25, 0.7, 0.005),
  new Akadaly(2.25, 0, 0.2, 0.1, 0.005),
];
// -6
let palya13 = [
  new Akadaly(0.8, 0.7, 0.2, 0.3, 0.005),
  new Akadaly(0.8, 0.0, 0.2, 0.56, 0.005),
  new Akadaly(1, 0.8, 0.4, 0.2, 0.005),
];
//-6,4
let palya14 = [
  new Akadaly(1, 0.7, 0.2, 0.3, 0.005),
  new Akadaly(1.4, 0.7, 0.2, 0.3, 0.005),
  new Akadaly(1.9, 0.7, 0.2, 0.3, 0.005),
  new Akadaly(2.2, 0.15, 0.3, 0.3, 0.005),
  new Akadaly(2.5, 0.75, 0.1, 0.25, 0.005),
  new Akadaly(2, 6, 0.3, 0.3, 0.2, 0.005),
  new Akadaly(2.95, 0.75, 0.2, 0.25, 0.005),
  new Akadaly(3.25, 0.6, 0.2, 0.4, 0.005),
  new Akadaly(3.55, 0.5, 0.2, 0.5, 0.005),
];
//
let palya15 = [
  new Akadaly(0.8, 0.7, 0.2, 0.3, 0.005),
  new Akadaly(0.8, 0.0, 0.2, 0.56, 0.005),
  new Akadaly(1.0, 0.8, 0.4, 0.2, 0.005),
  new Akadaly(1.4, 0.5, 0.2, 0.5, 0.005),
  new Akadaly(1.8, 0.5, 0.2, 0.5, 0.005),
];
//
let palya16 = [
  new Akadaly(1, 0.75, 0.2, 0.35, 0.005),
  new Akadaly(1.3, 0.5, 0.15, 0.1, 0.005),
  new Akadaly(1.6, 0.75, 0.1, 0.25, 0.005),
];
let palya17 = [
  new Akadaly(1, 0.3, 0.3, 0.2, 0.005),
  new Akadaly(1.35, 0.75, 0.2, 0.25, 0.005),
  new Akadaly(1.65, 0.6, 0.2, 0.4, 0.005),
  new Akadaly(1.95, 0.5, 0.25, 0.5, 0.005),
];
let palya18 = [
  new Akadaly(0.0, 0.8, 0.4, 0.2, 0.005),
  new Akadaly(1, 0, 0.1, 0.1, 0.005),
];

//

let pelda = [18, 18, 18, 18, 18, 18];

let palyak = [
  palya0,
  palya1,
  palya2,
  palya3,
  palya4,
  palya5,
  palya6,
  palya7,
  palya8,
  palya9,
  palya10,
  palya11,
  palya12,
  palya13,
  palya14,
  palya15,
  palya16,
  palya17,
  palya18,
];
let palya = [];

function setup() {
  createCanvas(szelesseg, magassag);
  karakter = new Karakter(magassag / 3, magassag - magassag / 16, magassag / 8);
  eredetiY = karakter.korY;
  palyaGeneral();
  kezdoX = palya[0].akdX;
}

function draw() {
  if (jatekVege) {
    fill("lightblue");
    rect(magassag / 2 - 2, magassag / 40, 260, 120);
    textSize(30);
    fill("black");
    text(
      `Eredmény: ${palya[0].akdX * -1 + kezdoX - 2}`,
      magassag / 2,
      magassag / 9
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
    ugrasiV += g;
    karakter.korY += ugrasiV;
  }
  karakter.rajzol();
  talaj(karakter, palya);
  vegeVanE(karakter, palya);
  textSize(30);
  fill("black");
  text(`Eredmény: ${palya[0].akdX * -1 + kezdoX}`, magassag / 2, magassag / 9);
}

function mousePressed() {
  if (karakter.korY >= eredetiY) {
    ugrik = true;
    ugrasiV = -Math.sqrt(2 * g * ugrasiMagassag);
  }
}
function palyaGeneral() {
  let szam;
  if (pelda.length == 0) {
    szam = floor(random(0, palyak.length));
  } else {
    szam = pelda.shift();
  }
  console.log(szam);
  let valasztas = palyak[szam];
  for (let i = 0; i < valasztas.length; i = i + 1) {
    palya.push(valasztas[i].klon());
    palya[palya.length - 1].akdX =
      palya[palya.length - 1].akdX + szelesseg + palya[palya.length - 1].akdW;
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
//b 11-14/ 11 és 0
