
alert("Jesus Rocks")
buttonColours = ["red", "blue", "green", "yellow"]
userChosenColor = ""
level = 1
gamePattern= new Array();
userChosenPattern = new Array();
ok = false;
time=1000;


function makeSound(key){
  switch (key) {
    case "red":
      red = new Audio("sounds/red.mp3")
      red.play();
      $("#red").addClass("pressed" )
      setTimeout(function(){$("#red").removeClass("pressed")},100)
      break;
    case "blue":
      blue = new Audio("sounds/blue.mp3")
      blue.play();
      $("#blue").addClass("pressed")
      setTimeout(function(){$("#blue").removeClass("pressed")},100)
      break;
    case "green":
      green = new Audio("sounds/green.mp3")
      green.play();
      $("#green").addClass("pressed")
      setTimeout(function(){$("#green").removeClass("pressed")},100)
      break;
    case "yellow":
      yellow = new Audio("sounds/yellow.mp3")
      yellow.play();
      $("#yellow").addClass("pressed")
      setTimeout(function(){$("#yellow").removeClass("pressed")},100)
      break;

    default:
      console.log(key)
  }
}
function nextSequence(){
 gamePattern = []
 for(var i=0; i < level; i++){
   RandomNumber = parseInt(Math.random()*4);
   randomChoseColor = buttonColours[RandomNumber]
   gamePattern.push(randomChoseColor)
 }
 console.log(gamePattern)
 level++
 playPattern()
}
function playPattern(){
  gamePattern.forEach(function(color) {
    setTimeout(function(){makeSound(color)},time)
    time+=500
});
time = 1000;
}

$(".btn").click(function(event){
  userChosenColor = event.target.id
  makeSound(userChosenColor)
  userChosenPattern.push(userChosenColor)
  console.log(userChosenPattern);
  for(i = 0 ; i < userChosenPattern.length;i++){
    if(userChosenPattern[i] === gamePattern[i]){
      ok = true;
    }else{
      ok=false;
      break;
    }
  }
  if(!ok){
    reset();
    nextSequence()
    return;
  }
  console.log(userChosenPattern.length+" " + gamePattern.length)
  if (userChosenPattern.length== gamePattern.length){
    coutinueLevel()
    console.log(true)
  }
})


function makeSound(key){
  switch (key) {
    case "red":
      red = new Audio("sounds/red.mp3")
      red.play();
      $("#red").addClass("pressed" )
      setTimeout(function(){$("#red").removeClass("pressed")},100)
      break;
    case "blue":
      blue = new Audio("sounds/blue.mp3")
      blue.play();
      $("#blue").addClass("pressed")
      setTimeout(function(){$("#blue").removeClass("pressed")},100)
      break;
    case "green":
      green = new Audio("sounds/green.mp3")
      green.play();
      $("#green").addClass("pressed")
      setTimeout(function(){$("#green").removeClass("pressed")},100)
      break;
    case "yellow":
      yellow = new Audio("sounds/yellow.mp3")
      yellow.play();
      $("#yellow").addClass("pressed")
      setTimeout(function(){$("#yellow").removeClass("pressed")},100)
      break;

    default:
      console.log(key)
  }
}
function coutinueLevel(){
  $('h1').text("level "+level)
  userChosenPattern = []
  nextSequence()
}
function reset(){
  level = 0;
  ok = false;
  time=100;
  userChosenPattern = []
  $('h1').text("You lost idoit!! click to Start again")
}

$('h1').click(function(){
  $('h1').text("level "+level)
  nextSequence()

})
