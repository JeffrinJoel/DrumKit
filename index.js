
var mainButton = document.querySelectorAll(".drum");

// document.querySelectorAll("button").addEventListener("click",handleClick);
// document.querySelectorAll("button")[1].addEventListener("click",handleClick);
// document.querySelectorAll("button")[2].addEventListener("click",handleClick);
// document.querySelectorAll("button")[3].addEventListener("click",handleClick);
// document.querySelectorAll("button")[4].addEventListener("click",handleClick);
// document.querySelectorAll("button")[5].addEventListener("click",handleClick);
// document.querySelectorAll("button")[6].addEventListener("click",handleClick);

for (i=0 ; i < mainButton.length ; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        sound(buttonInnerHTML);
        activeButton(buttonInnerHTML);
    });


}

document.addEventListener("keydown", function(event){
    sound(event.key);
    activeButton(event.key);
    
});

 
function sound(key){
        
    
        switch (key) {
            case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
            break;

            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;

            case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;

            case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;

            case "j":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
            break;

            case "k":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
            break;

            case "l":
                var kickbass = new Audio('sounds/kick-bass.mp3');
                kickbass.play();
            break;

        
            default:
                console.log(buttonInnerHTML);
                break;
        }
}

function activeButton(CurrentKey){

    var buttonAnimation = document.querySelector("." + CurrentKey);

    buttonAnimation.classList.add("pressed");

    setTimeout(function(){
        buttonAnimation.classList.remove("pressed");
    }, 100);

}





