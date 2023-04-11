var dog = document.getElementById("dogPic");
var moving = false;

dog.addEventListener("mousedown", initialClick, false);

function move(e){

  

  var newX = e.clientX - 10 ;
  var newY = e.clientY - 10 + window.scrollY;



  dog.style.left = newX + "px";
  dog.style.top = newY + "px";

  
}

function initialClick(e) {

  

  if(moving){
    document.removeEventListener("mousemove", move);
    moving = !moving;
    return;
  }
  
  moving = !moving;
  image = this;

  document.addEventListener("mousemove", move, false);

}

