"user strict";
const monthNames = ["Januar", "Februar", "Mart", "April", "May", "June",
  "July", "August", "Septembar", "October", "November", "December"
];
const d = new Date();
document.getElementById("trenutniMjesec").innerHTML = monthNames[d.getMonth()];

const numberOfDays = new Date(d.getYear(), d.getMonth(), 0).getDate();
console.log(numberOfDays);

if (numberOfDays < 31) {
  document.getElementById("mjesecnoTemperatura30").style.visibility = "hidden";
} else if (numberOfDays <= 28) {
  document.getElementById("mjesecnoTemperatura30").style.visibility = "hidden";
}

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
document.getElementById("mjesecnoTemperatura").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura1").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura2").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura3").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura4").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura5").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura6").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura7").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura8").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura9").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura10").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura11").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura12").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura13").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura14").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura15").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura16").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura17").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura18").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura19").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura20").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura21").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura22").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura23").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura24").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura25").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura26").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura27").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura28").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura29").innerHTML = vrijemeDanas.randomTemperatura() + "°";
document.getElementById("mjesecnoTemperatura30").innerHTML = vrijemeDanas.randomTemperatura() + "°";
