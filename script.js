 var main = document.getElementsByClassName("main")[0],
     all_div = document.getElementsByTagName("div"),
     div,
     img;


 var audioRight = new Audio('images/Right.wav');
 var audioWrong = new Audio('images/wrong.wav');


 var rArray = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png'];

 function lettersFunction() {
     for (var i = 0; i <= 11; i = i + 1) {
         div = document.createElement("div");
         main.appendChild(div);
         img = document.createElement("img");
         img.setAttribute("src", rArray[i]);
         img.setAttribute("id", rArray[i]);
         div.appendChild(img);
     }

 }
 lettersFunction();



 var x = [],
     flag = true;
 for (var i = 0; i <= all_div.length - 1; i++) {
     all_div[i].onclick = function () {

         if (!flag) return;
         this.firstChild.style.opacity = "1";
         if (x.length == 0) {
             x[0] = this;
         } else if (x.length == 1) {
             x[1] = this;

         }

         if (x.length == 2) {
             flag = false;
             setTimeout(check, 700);

         }

     };

 }

 function check() {

     if (x[0].firstChild.id === x[1].firstChild.id) {
         audioRight.play();
         //alert("Okay, Great go to the next ones");
     } else {
         audioWrong.play();
         //alert("Sorry, Not identcical try agin");         
         x[0].firstChild.style.opacity = "0";
         x[1].firstChild.style.opacity = "0";

     }
     x = [];
     flag = true;
 }
