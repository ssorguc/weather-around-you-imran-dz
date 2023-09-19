"user strict";
let vrijemeDanas = {
  temperatura: null,
  vrijeme: new Date(),
  icon: "",
  randomTemperatura: function() {
    this.temperatura = Math.floor(Math.random() * (42 - (-20))) + (-20);
    return this.temperatura;
  },
};
document.getElementById("vrijemePoSatu").innerHTML = vrijemeDanas.vrijeme.getHours() + 1 + ":00";
document.getElementById("vrijemePoSatu1").innerHTML = vrijemeDanas.vrijeme.getHours() + 2 + ":00";
document.getElementById("vrijemePoSatu2").innerHTML = vrijemeDanas.vrijeme.getHours() + 3 + ":00";
document.getElementById("vrijemePoSatu3").innerHTML = vrijemeDanas.vrijeme.getHours() + 4 + ":00";



document.getElementById("temperaturaPoSatu").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("temperaturaPoSatu1").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("temperaturaPoSatu2").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("temperaturaPoSatu3").innerHTML = vrijemeDanas.randomTemperatura() + "°";

