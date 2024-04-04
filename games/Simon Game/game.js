//alert("Working")
var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
var started = false
var level = 0;
function nextSequence() {
  $("#start").hide()
  userClickedPattern = [];
  $("h1").text("Level " + level)
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour)
  $("#" + randomChosenColour).fadeOut(200).fadeIn(200);
  playSound(randomChosenColour);
  level += 1;


}
function playSound(name) {
  $("#" + name).click(function() {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  })




}
//rcc=nextSequence();
//$("#"+rcc).fadeOut(200).fadeIn(200);
//$("#"+rcc).click(function(){
//    var audio=new Audio("sounds/"+rcc+".mp3");
//    audio.play();
//})
$(".btn").click(function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  playSound(this.id)
  console.log(userClickedPattern);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
})

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass('pressed');
    //....and whatever else you need to do
  }, 100);

}

$("#start").click(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }

})

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success")
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000
      )
    }

  }
  else {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over");
    console.log("wrong");
    startOver()
  }
}
function startOver() {
  level = 0;
  started = false;
  gamePattern = []
  $("#start").show()
}