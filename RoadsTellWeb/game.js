var answer = 1;
var oikea = true;
var used = [];
var i;
var image;
var imageAmount = 20;
var QuestionNumber= 1;
var pointCount = 0;
var newgame = false;

var place = ["Manama, Bahrain", "Washington DC, USA", "Doha, Qatar", "Luxembourg City, Luxembourg", "Amsterdam, Netherlands", "Hong Kong", "Ottawa, Canada", "Bern, Switzerland", "Brussels, Belgium", "Canberra, Australia", "Lome, Togo", "Niamey, Niger", "Kigali, Rwanda", "Banjul, Gambia", "Bishkek, Kyrgyztan", "Kinshaha, Democratic Republic of the Congo", "Dhaka, Bangladesh", "Ougadougou, Burkina Faso", "Port Vila, Vanuatu", "Bamako, Mali"];

var ranking = ["23", "13", "1", "3", "15", "12", "24", "9", "22", "21", "175", "181", "166", "174", "148", "182", "147", "171", "153", "164" ];

window.onload = function(){
gallery.style.display = "none";
guestbook.style.display = "none";
playagain.style.display = "none";
NewImage();

}


function PainettiinTop(){

  if (answer == 1){
  oikea = true;
} if (answer == 0) {
  oikea = false;
  }
 Results();
}

function PainettiinLowest(){
  if (answer == 1){
  oikea = false;
} if (answer == 0){
  oikea = true;
  }
  Results();
  
}

function Results(){

  uusi.style.display = "inline";
  oikein.style.display = "none";
  vaarin.style.display = "none";
  
  
  QuestionNumber = QuestionNumber + 1;
  questionNumber.innerHTML = "";
  
  
   Result.innerHTML = "This is " + String(place[i])+ ". The country's ranking by its GDP-per-capita is: " + String(ranking[i]);

  if (oikea == true){
  pointCount = pointCount + 1;
  points.innerHTML = "";
  kommentti.innerHTML = "Correct Answer!";
  } else {
    points.innerHTML = "";
    kommentti.innerHTML = "Wrong Answer!";
  }

}


function Uudestaan(){

if (newgame == false){
 var previous = used[used.length-1];
 var prevImage = document.getElementById(previous);
 prevImage.style.display = "none";
 
 
 if (QuestionNumber-1 < imageAmount){


 NewImage();
 
   } else{
  
GameOver();
    } 
   }

}



function NewImage(){

  getRandomImage();
  
  kommentti.innerHTML = "";
  uusi.style.display = "none";
  oikein.style.display = "inline";
  vaarin.style.display = "inline";
  points.innerHTML = "Points: " + String(pointCount);
  
  Result.innerHTML = "";
  questionNumber.innerHTML = "Question: " + String(QuestionNumber) + "/" + String(imageAmount);
}


function getRandomImage(){


i = Math.floor(Math.random()*imageAmount);
var searchNewNumber = true;


 if (used.includes(i) == false){
     searchNewNumber = false;
  }
  
  if (searchNewNumber == false){
  used.push(i);
  }
  
if (searchNewNumber == true){
  getRandomImage();

} 

 var image = document.getElementById(i); 

 image.style.display = "block";
 
 if (i < ((imageAmount-1)/2)){
 answer = 1;
 } else{
 answer = 0;
 }
  
}

  function GameOver(){ 
  newgame = true;
  points.innerHTML = "Thank you for playing Roads Tell. Your score was " + String(pointCount) + " out of " + String(imageAmount) + " points.";
  uusi.style.display = "none";
  playagain.style.display = "New Game";
  alkujorinat.innerHTML = "";
  alkujorinat.innerHTML = "";
  kommentti.innerHTML = "";
  questionNumber.innerHTML = "";
  Result.innerHTML = "";  
  image.style.display = "none";
  

  }

