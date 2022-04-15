const keys =document.querySelectorAll(".key")


function playNote(event){
 
    let audioKeyCode = getKeyCode(event);
 
    //typed or pressed key
    const key = document.querySelector(`[data-key="${audioKeyCode}"]`)
 
    //if key exists
    const cantFoundAnyKey = !key 
    
    if(cantFoundAnyKey){
        return;
    }

    playAudio(audioKeyCode)
    addPlayingClass(key)

}

function addPlayingClass(key) {
    key.classList.toggle('playing')
}

function getKeyCode(event){
    let keyCode;
 
    const isKeyboard = event.type === "keydown" //true or false
    if(isKeyboard){
       keyCode = event.keyCode
    } else {
    keyCode =event.target.dataset.key
    }

    return keyCode
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function removePlayingClass(event){
      event.target.classList.remove("playing")
}


function init(){

    keys.forEach( function(key){
        key.addEventListener("click", playNote)
        key.addEventListener("transitionend", removePlayingClass)
    })
   
    //type keyboard
   window.addEventListener("keydown", playNote)
   
}

window.addEventListener("load", init)