// Akadály osztály
class Akadaly {
  constructor(akdX, akdY, akdW, akdH, v) {
    this.akdX = akdX * magassag;
    this.akdY = akdY * magassag;
    this.akdW = akdW * magassag;
    this.akdH = akdH * magassag;
    this.v = v * magassag;
  }

  klon() {
    return new Akadaly(
      this.akdX / magassag,
      this.akdY / magassag,
      this.akdW / magassag,
      this.akdH / magassag,
      this.v / magassag
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
