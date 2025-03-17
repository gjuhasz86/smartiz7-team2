// Akadály osztály
class Akadaly {
  constructor(akdX, akdY, akd, v) {
    this.akdX = akdX;
    this.akdY = akdY;
    this.akd = akd;
    this.v = v;
  }

  rajzol() {
    rect(this.akdX, this.akdY, this.akd, this.akd);
  }

  mozgat() {
    this.akdX -= this.v;
  }
}