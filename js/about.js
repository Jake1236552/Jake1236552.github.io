 const text = document.querySelector(".sec-text");

 const textLoad = () => {
     setTimeout(() => {
         text.textContent = "Tech Lovers";
     }, 0);
     setTimeout(() => {
         text.textContent = "Blogger";
     }, 4000);
     setTimeout(() => {
         text.textContent = "Web developers";
     }, 8000); //1s = 1000 milliseconds
 }

 textLoad();
 setInterval(textLoad, 12000);

 let para = document.getElementById('alert');
 para.addEventListener('mouseover', function run() {
     alert('Most popular channel for developers.Best weshes for your coding life.')
         //  alert("Improve your skills and achive your goals and targets")
 });