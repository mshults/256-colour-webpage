let arbeit1 = document.querySelector("main > section");

console.log(arbeit1);

arbeit1.onmousemove = function(event){

    
 let el = arbeit1;
 let width = el.clientWidth;
 let mouseX = event.layerX;
 console.log(mouseX);

 
//Normalize mouseX auf 0...1
 //el.style.opacity = mouseX / 560;

 //let rot = mouseX / 560 * 255;
 //let green = 255 - rot;
 


 let h = mouseX / width * 360;



 let color = "hsl(50,30%, 50%)";


//Ziel: 'rgb(rot, 255, 255)'
 //let color = "rgb(" + rot + ", " + green + ", 255)";
 el.style.backgroundColor = color;

};


function movePic (by) {
    pic.style.transion = "transform 0.1s ease-out";
    pic.style.transform = "translateX(" + by + "px)";

}
    pic.onmouseover = function (){
  console.log("Shake me pic");
  let shake = [-10 ,10, 0];
  let time = [0, 50, 100];
  for (var t=0; t<3; t++) {
      let by shake[t];
      let delay = times[t];
      setTimeout(function() {
          movePic(by);

      }, delay);
  }
    };





let header = document.querySelector("h1");

console.log(header);



header.onmouseenter = function() {
  header.style.backgroundColor = "#abcdef";
  header.innerText = ":) hahaha";
}

header.onmouseleave = function() {
  header.style.backgroundColor = "";
  setTimeout(function() {
  header.innerText = "Yay";
  }, 500);
             
}