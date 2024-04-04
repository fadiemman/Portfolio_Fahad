//alert("working");

function play(){

    var randomNumber1=Math.floor(Math.random()*6)+1;
    //alert(randomNumber1);
    console.log(randomNumber1);
    console.log("./images/dice"+randomNumber1+".png")
    document.querySelectorAll("img")[0].src="./images/dice"+randomNumber1+".png";
    var randomNumber2=Math.floor(Math.random()*6)+1;
    console.log(randomNumber2);
    document.querySelectorAll("img")[1].src="./images/dice"+randomNumber2+".png";

    if(randomNumber1>randomNumber2){
        //document.querySelector("h1").textContent="Player1 Wins";
        //alert("Player1 Score"+document.getElementsByClassName("player1")[0].textContent);
        document.getElementsByClassName("player1")[0].textContent=String(Number(document.getElementsByClassName("player1")[0].textContent)+1);
    }else if(randomNumber1<randomNumber2){
        //document.querySelector("h1").textContent="Player2 Wins";
        document.getElementsByClassName("player2")[0].textContent=String(Number(document.getElementsByClassName("player2")[0].textContent)+1) ;   }
        /*else{
        //document.querySelector("h1").textContent="Draw";

    }*/

}
function end(){
    document.querySelector('.container').style.display="none";
    score1=Number(document.getElementsByClassName("player1")[0].textContent)
    score2=Number(document.getElementsByClassName("player2")[0].textContent)
    if (score1>score2){
        document.querySelector("h4").textContent="Player1 Wins";
    }else if(score1<score2){
        document.querySelector("h4").textContent="Computer Wins";
    }else{
        document.querySelector("h4").textContent="Score draw";
    }
    document.getElementsByClassName("center-container")[0].style.display="block";
}
function refresh(){
    
    location.reload();
}
