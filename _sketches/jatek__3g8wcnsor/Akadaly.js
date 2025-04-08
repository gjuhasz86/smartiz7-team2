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
}