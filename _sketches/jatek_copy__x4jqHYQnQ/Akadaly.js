// Akadály osztály
class Akadaly {
  constructor(akdX, akdY, akd, v) {
    this.akdX = akdX*hossz;
    this.akdY = akdY*hossz;
    this.akd = akd*hossz;
    this.v = v*hossz;
  }

  rajzol() {
    rect(this.akdX, this.akdY, this.akd, this.akd);
  }

  mozgat() {
    this.akdX -= this.v;
  }
  utkozes(kar) {
  //console.log(akd, kar);
  if (
    kar.jobbOldal() > this.akdX &&
    kar.balOldal() < this.akdX + this.akd &&
    kar.also() > this.akdY &&
    kar.felso() < this.akdY + this.akd
  ) {
    return true;
  } else {
    return false;
  }
}
  rajta(kar) {
  if (
    kar.also() <= this.akdY + 5 &&
    kar.jobbOldal() >= this.akdX &&
    kar.balOldal() <= this.akdX + this.akd
    //  && ugrik == false
  ) {
    return true;
  } else {
    return false;
  }
}  
  holVagyunk(kar) {
  if (this.rajta(kar) == true) {
    return "rajta";
  } else if (this.utkozes(kar) == true) {
    return "benne";
  } else {
    return "kivul";
  }
}
}
