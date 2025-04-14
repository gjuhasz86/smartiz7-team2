class Karakter {
  constructor(korX, korY, atmero) {
    this.korX = korX;
    this.korY = korY;
    this.atmero = atmero;
  }
  rajzol() {
 image(karakterKep, this.korX - this.atmero / 2, this.korY - this.atmero / 2, this.atmero, this.atmero);
  }
  balOldal() {
    return this.korX - this.atmero / 2;
  }
  jobbOldal() {
    return this.korX + this.atmero / 2;
  }
  also() {
    return this.korY + this.atmero / 2;
  }
  felso() {
    return this.korY - this.atmero / 2;
  }
}
