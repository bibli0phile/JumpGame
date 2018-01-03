let interval = false;
let isJump = false;
let score=0;
let jump=function(event) {
  if(event.keyCode == 38) {
    let image = document.getElementById("doll");
    image.style.top = "250px";
    isJump = !isJump;
    setTimeout(()=>{
      image.style.top = "380px";
      isJump = !isJump;
    },700)
  }
};

let fireStart = function() {
  document.getElementById('scoreBox').innerText = 0;
  speed = 1;
  document.getElementById('message').hidden = true;
  let image = document.getElementById("fire");
  image.className = 'show';
  image.style.right = "310px";
  if(!interval)
    interval = setInterval(()=>{
      moveFire(image);
    },5);
};

let speed = 1;
let isInPosition = function(position) {
  return position > 650 && position < 750;
};

let moveFire = function(image){
  setTimeout(()=>{
  let pos = image.style.right;
  let newPos = +pos.slice(0,-2)+speed;
  console.log(speed);
  if(newPos < 1050){
    image.style.right = newPos+"px";
  } else {
    image.style.right = "310px";
    speed += 0.2;
  }
  if(!isJump && isInPosition(newPos)){
    document.getElementById('message').hidden = false;
    clearInterval(interval);
    interval = false;
  }
  });
  scoreboard();
};

let scoreboard = function() {
  score = +document.getElementById('scoreBox').innerText;
  if(interval){
    score += 1;
    document.getElementById('scoreBox').innerText = score;
  }
};
