// No. of drum buttons 
var drumButtons = document.querySelectorAll(".drum").length;

// On Clicking a Button
for(var i=0; i<drumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonNote = this.innerHTML;
        playMusic(buttonNote);
        addAnimation(buttonNote);
    });
}

// On Tapping a Key
document.addEventListener("keydown", function (event) {
    playMusic(event.key);
    addAnimation(event.key);
});

// Play Music
function playMusic(key){

    var audio;

    switch(key){

        case "w":
            audio= new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case "a":
            audio= new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case "s":
            audio= new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case "d":
            audio= new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        
        case "j":
            audio= new Audio('sounds/snare.mp3');
            audio.play();
            break;

        case "k":
            audio= new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case "l":
            audio= new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        default:
            console.log(key);
    }
}

function addAnimation(key){
    var buttonPress = document.querySelector("."+key);
    buttonPress.classList.add("pressed");
    setTimeout(function(){
        buttonPress.classList.remove("pressed");
    }, 100);
}