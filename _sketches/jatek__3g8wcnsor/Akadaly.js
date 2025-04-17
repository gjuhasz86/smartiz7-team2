// Akadály osztály
class Akadaly {
  constructor(akdX, akdY, akdW, akdH, v) {
    this.akdX = akdX * hossz;
    this.akdY = akdY * hossz;
    this.akdW = akdW * hossz;
    this.akdH = akdH * hossz;
    this.v = v * hossz;
  }

  klon() {
    return new Akadaly(
      this.akdX / hossz,
      this.akdY / hossz,
      this.akdW / hossz,
      this.akdH / hossz,
      this.v / hossz
    );
  }

  rajzol() {
    image(akadalyKep, this.akdX, this.akdY, this.akdW, this.akdH);
  }

  mozgat() {
    this.akdX -= this.v;
  }
  utkozes(kar) {
    if (
      kar.jobbOldal() > this.akdX &&
      kar.balOldal() < this.akdX + this.akdW &&
      kar.also() > this.akdY &&
      kar.felso() < this.akdY + this.akdH
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
      kar.balOldal() <= this.akdX + this.akdW
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
