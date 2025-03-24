let korX, korY;
let atmero = 50;
let eredetiY;
let ugrik = false;
let ugrasiMagassag = 120;
let hossz = 400;
let jatekVege = false;
let akadaly = new Akadaly(hossz - hossz / 5, hossz - hossz / 5, hossz / 5, 2);
let akadaly2 = new Akadaly(
  hossz - (2 * hossz) / 5,
  hossz - hossz / 5,
  hossz / 5,
  6
);

function setup() {
  createCanvas(hossz, hossz);
  korX = width / 2;
  korY = height - atmero / 2;
  eredetiY = korY;
}

function draw() {

  if (jatekVege) {
    //background("red");
    textSize(30);
    fill("black");
    text("Játék vége!", width / 3.5, height / 1.8);
    return;
  }
  background(220);
  akadaly.mozgat();
  akadaly.rajzol();
  
  // akadaly2.rajzol();
  // akadaly2.mozgat();
  
  // rect(akdX, akdY, akd, akd);
  // akdX -= v;

  
  if (ugrik) {
    korY -= 5;
    if (korY <= eredetiY - ugrasiMagassag) {
      ugrik = false;
    }
  } else if (korY < eredetiY) {
    korY += 5;
  }
  circle(korX, korY, atmero);
  rect(korX-atmero/2, korY-atmero/2,atmero,atmero);
  let pozicio = holVagyunk(korX, korY, atmero, akadaly)
  if (pozicio=="rajta"){
    eredetiY=akadaly.akdY-atmero/2
  }
  else if(pozicio=="benne"){
          jatekVege= true
          }
  else{
    eredetiY= height- atmero/2
  }
   console.log(pozicio)
  //   utkozes(
  //     korX - atmero / 2,
  //     korX + atmero / 2,
  //     korY - atmero / 2,
  //     korY + atmero / 2,
  //     akadaly
  //   );
  //   utkozes(akadaly2);
}

function mousePressed() {
  if (korY >= eredetiY) {
    ugrik = true;
  }
}
// kör paraméterei, akadály paraméterei, ütközött e vagy nem return,
function utkozes(bal, jobb, felso, also, akd) {
  console.log(akd,bal,jobb,felso,also);
  if (
    jobb > akd.akdX &&
    bal < akd.akdX + akd.akd &&
    also > akd.akdY &&
    felso < akd.akdY + akd.akd
  ) {
    return true;
  } else {
    return false;
  }
}
function rajta(bal,jobb, also, akd) {
  if (also <= akd.akdY + 5 && jobb >= akd.akdX && bal <= akd.akdX + akd.akd) {
    return true;
  } else {
    return false;
  }
}
function holVagyunk(korX, korY, atmero, akd) {
  let bal = korX - atmero / 2;
  let jobb = korX + atmero / 2;
  let also = korY + atmero / 2;
  let felso = korY - atmero / 2;
  if (rajta(bal,jobb, also, akd) == true) {
    return "rajta";
  } else if (utkozes(bal, jobb, felso, also, akd) == true) {
    return "benne";
  } else {
    return "kivul";
  }
}

