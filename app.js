"user strict";
let vrijemeDanas = {
  temperatura: null,
  vrijeme: new Date(),
  icon: "",
  randomTemperatura: function() {
    this.temperatura = Math.floor(Math.random() * (42 - (-20))) + (-20);
    return this.temperatura;
  },
  choseIcon: function() {
    if (this.temperatura <= 0) {
      this.icon = "slike/ikone/snow.png";
      document.getElementById("preporuka").innerHTML = "Preporučeno je da se obuće toplija odjeca."
    } else if (this.temperatura > 20 && this.temperatura < 30) {
      this.icon = "slike/ikone/sun.png"
    } else if (this.temperatura > 0 && this.temperatura < 20) {
      this.icon = "slike/ikone/cloudy.png"
    } else {
      this.icon = "slike/ikone/sunny.png";
      document.getElementById("preporuka").innerHTML = "Preporučeno je da se ne izlazi, a u slučaj izlaska unositi više tekućine."
    }

    document.getElementById("vrijemeIkona").src = this.icon;
  }
};
document.getElementById("temperatura").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("trenutnoVrijeme").innerHTML = vrijemeDanas.vrijeme.getHours() + ":" + vrijemeDanas.vrijeme.getMinutes();
vrijemeDanas.choseIcon();

