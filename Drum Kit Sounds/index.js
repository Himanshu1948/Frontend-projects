
var my_drum = document.querySelectorAll(".drum");

for (var i = 0; i < my_drum.length; i++) {
  my_drum[i].addEventListener("click", buttonClick);
}

function buttonClick(){
  var buttonInner = this.innerHTML;

  switch (buttonInner) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;

    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;

    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;

    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;

    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;

    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;

    case "l":
        var kickbass = new Audio("sounds/kick-bass.mp3");
        kickbass.play();
      break;
    default:

  }
}


document.addEventListener("keydown",function(event){
  var activeButton = document.querySelector("." + event.key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
  switch (event.key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;

    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;

    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;

    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;

    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;

    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;

    case "l":
        var kickbass = new Audio("sounds/kick-bass.mp3");
        kickbass.play();
      break;
    default:

  }
});
