var d = new Date();
var weekDays = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
var months = [
  "Ene", "Feb", "Mar", "Abr", "May", "Jun",
  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
];
var minutes = d.getMinutes() > 9 ? d.getMinutes() : ("0" + d.getMinutes());
var seconds = d.getSeconds() > 9 ? d.getSeconds() : ("0" + d.getSeconds());

document.querySelectorAll("p:first-child")[0].innerHTML += "<br><strong>" +
  //nombre-dia, numero-dia nombre-mes año-completo hora
  weekDays[d.getDay()] + ", " + d.getDate() + " de " + months[d.getMonth()] +
  " de " + d.getFullYear() + " " + d.getHours() + ":" + minutes + ":" + seconds
  + "</strong>";
