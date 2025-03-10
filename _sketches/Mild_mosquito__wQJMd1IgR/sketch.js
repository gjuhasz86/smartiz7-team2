let korX, korY;
let sugar = 50;
let eredetiY;
let ugrik = false;
let ugrasiMagassag = 100;
let hossz = 400;
let akdX = hossz - hossz / 5;
let akdY = hossz - hossz / 5;
let akd = hossz / 5;
let v = 3;
let jatekVege = false;

function setup() {
  createCanvas(hossz, hossz);
  korX = width / 2;
  korY = height - sugar / 2;
  eredetiY = korY;
}

function draw() {
  if (jatekVege) {
    background("red");
    textSize(30);
    fill("black");
    text("Játék vége!", width / 3.5, height / 1.8);
    return;
  }

  background(220);
  rect(akdX, akdY, akd, akd);
  akdX -= v;

  circle(korX, korY, sugar);

  if (ugrik) {
    korY -= 5;
    if (korY <= eredetiY - ugrasiMagassag) {
      ugrik = false;
    }
  } else if (korY < eredetiY) {
    korY += 5;
  }

  utkozes();
}

function mousePressed() {
  if (korY >= eredetiY) {
    ugrik = true;
  }
}

function utkozes() {
  let bal = korX - sugar / 2;
  console.log(bal)
  let jobb = korX + sugar / 2;
  let felso = korY - sugar / 2;
  let also = korY + sugar / 2;

  let akadalyBal = akdX;
  let akadalyJobb = akdX + akd;
  let akadalyFelso = akdY;
  let akadalyAlso = akdY + akd;

  if (
    jobb > akadalyBal &&
    bal < akadalyJobb &&
    also > akadalyFelso &&
    felso < akadalyAlso
  ) {
    if (also <= akadalyFelso + 5) {
      eredetiY = akadalyFelso - sugar / 2;
    } else {
      jatekVege = true;
    }
  } else {
    eredetiY = height - sugar / 2;
  }
}
