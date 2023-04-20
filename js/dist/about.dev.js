"use strict";

var text = document.querySelector(".sec-text");

var textLoad = function textLoad() {
  setTimeout(function () {
    text.textContent = "Tech Lovers";
  }, 0);
  setTimeout(function () {
    text.textContent = "Blogger";
  }, 4000);
  setTimeout(function () {
    text.textContent = "Web developers";
  }, 8000); //1s = 1000 milliseconds
};

textLoad();
setInterval(textLoad, 12000);
var para = document.getElementById('alert');
para.addEventListener('mouseover', function run() {
  alert('Most popular channel for developers.Best weshes for your coding life.'); //  alert("Improve your skills and achive your goals and targets")
});
//# sourceMappingURL=about.dev.js.map
