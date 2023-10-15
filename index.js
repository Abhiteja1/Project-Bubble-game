
function makeBuble(){
  var bubbles = '';
  for(var i=0; i<160; i++){
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
  }
});


makeBuble();
getNewHitNumber();
runTimer();



