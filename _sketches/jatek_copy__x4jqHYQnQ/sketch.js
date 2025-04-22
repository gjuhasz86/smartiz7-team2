let hossz = 400;
let eredetiY;
let ugrik = false;
let ugrasiMagassag = hossz / 3.3;
let ugrasiV = 0;
let g = hossz / 2000;
let jatekVege = false;
let karakter = new Karakter(hossz / 3, hossz - hossz / 16, hossz / 8);
let palya0 = [
  new Akadaly(0.8, 0.4, 0.1, 0.2, 0.005),
  new Akadaly(1.1, 0.7, 0.3, 0.2, 0.005),
  new Akadaly(1.5, 0.8, 0.2, 0.2, 0.005),
  // new Akadaly(1.8, 0.7, 0.3, 0.3, 0.005),
  ]
  //X Y a b
let palya1=[
  new Akadaly(1, 0.9, 0.4, 0.1, 0.005),
  new Akadaly(1.3, 0.8, 0.4, 0.4, 0.005),
  new Akadaly(1.7, 0.6, 0.5, 0.5, 0.005),
  new Akadaly(1.9, 0, 0.3, 0.4, 0.005),
  new Akadaly(2.6, 0.5, 0.5, 0.1, 0.005),
  new Akadaly(2.2, 0.8, 0.3, 0.2, 0.005),]
              
  //-3,5 
let palya2 =  [ 
  new Akadaly(1, 0.5, 0.2, 0.2, 0.005),
  new Akadaly(1.8, 0, 0.2, 0.35, 0.005),
  new Akadaly(1.8, 0.55, 0.45, 0.45, 0.005),
  new Akadaly(1.5, 0.8, 0.3, 0.2, 0.005),
  new Akadaly(2.25, 0.3, 0.25, 0.7, 0.005),
  new Akadaly(2.25, 0, 0.2, 0.1, 0.005),
    ]
  // -6
  let palya3= [
  new Akadaly(0.8, 0.7, 0.2, 0.3, 0.005),
  new Akadaly(0.8, 0.0, 0.2, 0.56, 0.005),
  new Akadaly(1, 0.8, 0.4, 0.2, 0.005)]
  //-6,4
let palya4 = [ 
  new Akadaly(1, 0.5, 0.2, 0.5, 0.005),
  new Akadaly(1.4, 0.5, 0.2, 0.5, 0.005),
  new Akadaly(1.9, 0.7, 0.2, 0.3, 0.005),
  new Akadaly(2.2, 0.15, 0.3, 0.3, 0.005),
  new Akadaly(2.5, 0.75, 0.1, 0.25, 0.005),
  new Akadaly(2,6, 0.3, 0.3, 0.2, 0.005),
  new Akadaly(2.95, 0.75, 0.2, 0.25, 0.005),
  new Akadaly(3.25, 0.6, 0.2, 0.4, 0.005),
  new Akadaly(3.55, 0.5, 0.2, 0.5, 0.005),
];
//
let palya5=[
  new Akadaly(0.8, 0.7, 0.2, 0.3, 0.005),
  new Akadaly(0.8, 0.0, 0.2, 0.56, 0.005),
  new Akadaly(1.0, 0.8, 0.4, 0.2, 0.005),
  new Akadaly(1.4, 0.5, 0.2, 0.5, 0.005),
  new Akadaly(1.8, 0.5, 0.2, 0.5, 0.005),
    ]
  //
let palya6=[
  new Akadaly(1, 0.7, 0.2, 0.3, 0.005),
  new Akadaly(1.3, 0.15, 0.3, 0.3, 0.005),
  new Akadaly(1.6, 0.75, 0.1, 0.25, 0.005),
]
let palya7=[
  new Akadaly(1, 0.3, 0.3, 0.2, 0.005),
  new Akadaly(1.35, 0.75, 0.2, 0.25, 0.005),
  new Akadaly(1.65, 0.6, 0.2, 0.4, 0.005),
  new Akadaly(1.95, 0.5, 0.2, 0.5, 0.005),
]
//
let palya8=[ 
  new Akadaly(1, 0.8, 0.8, 0.2, 0.005),
  new Akadaly(1, 0.4, 0.3, 0.2, 0.005),
  new Akadaly(1, 0.2, 0.5, 0.2, 0.005),
  new Akadaly(1.4, 0.4, 0.4, 0.2, 0.005),
  new Akadaly(1.6, 0.2, 0.2, 0.2, 0.005),
  ]
  
  
  

function setup() {
  createCanvas(1.5 * hossz, hossz);
  eredetiY = karakter.korY;
  //palya = random(palyak)
  
 //   let valasztas=random(palyak)
 // for(let i= 0, i<valasztas.length, i= i+1){
   //  palya.push.(valasztas[i]);
   
 // }
}

function draw() {
  if (jatekVege) {
    //background("red");
    textSize(30);
    fill("black");
    text("Játék vége!", hossz / 3.5, hossz / 1.8);
    return;
  }

//  if (palya[0].akdX == 240) {
  //  ugrik = true;
 // }
  background(220);
  palya8.mozgat
  palya8.rajzol
 // for (let i = 0; i < palya.length; i = i + 1) {
 //   palya[i].mozgat();
   // palya[i].rajzol();
 // }
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
  talaj(karakter, palya8);
  vegeVanE(karakter, palya8);
  // console.log(
  //  karakter,
  // holVagyunk(karakter, palya[0]),
  //  palya[0],
  //  holVagyunk(karakter, palya[1]),
  //  palya[1]
  //  );
}

function mousePressed() {
  if (karakter.korY >= eredetiY) {
    ugrik = true;
    ugrasiV = -Math.sqrt(2 * g * ugrasiMagassag);
  }
}
// kör paraméterei, akadály paraméterei, ütközött e vagy nem return,

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
  // console.log(
  // rajtaVanE,
  //eredetiY,
  // karakter.korY,
  //holVagyunk(karakter, palya[0])
  //);
}

function vegeVanE(kar, paly) {
  for (let i = 0; i < paly.length; i = i + 1) {
    if (paly[i].holVagyunk(kar) == "benne") {
      jatekVege = true;
    }
  }
}
// 48 115
// az utkozes es a kar-akd az akadalyon belul
