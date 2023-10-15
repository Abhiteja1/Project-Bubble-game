
function makeBuble(){
  var bubbles = '';
  for(var i=0; i<176; i++){
    var randomNumber = Math.floor(Math.random()*10);
    bubbles += `<div class="bubble">${randomNumber}</div>`;
  }
  document.querySelector('.bottom-pannel').innerHTML = bubbles;
}

var hitRandomNumber;
function getNewHitNumber(){
  hitRandomNumber = Math.floor(Math.random()*10);
  document.querySelector('.hitvalue').innerHTML = hitRandomNumber;
}

var timer = 30;
function runTimer(){
  let mySound = new Audio('musics/opening-bubble.mp3')
      mySound.play();
  var timeInterval = setInterval(function(){
    if(timer>0){
      timer--;
      document.querySelector('.timer').innerHTML = timer;
      
    }
    else{
      clearInterval();
      document.querySelector('.bottom-pannel').innerHTML = `<div class="gameover-text"><h2>Game Over</h2>
      <button class="refresh-btn" onClick="window.location.reload();"><h2>Play Again</h2></button>
      </div></div>`;
    }
  },1000);

}

var score = 0;
function increaseScore(){
  score += 5;
  document.querySelector('.score').innerHTML=score;
}

// to check number clicked and increase points
document.querySelector('.bottom-pannel').addEventListener("click",function(details){
  var clickedNumber = Number(details.target.innerText);
  if(clickedNumber === hitRandomNumber){
    increaseScore();
    getNewHitNumber();
    makeBuble();
    let mySound = new Audio('musics/bubble-sound.mp3')
    mySound.play();
  }
  else{
    let mySound = new Audio('musics/error-sound.mp3')
    mySound.play();
  }
});


makeBuble();
getNewHitNumber();
runTimer();



