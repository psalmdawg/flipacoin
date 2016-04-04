
console.log('decider')

var headsCounter = 0;
var tailsCounter= 0;
var winner = "nowin";

function coinFlip () {

var result;
var headsOrTails = Math.random();

  if (winner === "nowin"){
      if(Math.round(headsOrTails) === 0) {result = 'heads'; headsCounter++}
      else if (Math.round(headsOrTails) === 1) {result = 'tails'; tailsCounter++};
      setTimeout(headsTimeout, 3000)
      setTimeout(tailsTimeout, 3000)
      // document.getElementById('headsTally').innerHTML = 'Heads =  ' + headsCounter;
      // document.getElementById('tailsTally').innerHTML = 'Tails =  ' + tailsCounter


      checkWin()
      return result;
  } else {
    return;}
  }

  function checkWin ( ) {
    if (headsCounter === 5) {winner = 'heads'; console.log('heads');
    // document.getElementById('results').innerHTML = 'heads wins';
    setTimeout(displayWinHeads, 3500)
    }
    else if (tailsCounter === 5) {winner ='tails';
    // document.getElementById('results').innerHTML = 'Tails wins';
    setTimeout(displayWinTails, 3500)
    }
}


coinImg.addEventListener('click', function(event) {

//add a timerto make the coin spin for 1 second before flip stops
if (winner === "nowin"){
  event.target.className === 'trigger' ? event.target.className = 'none': event.target.className = 'trigger';
  // true === false ? console.log("blue") : console.log('green')
  // Math.round(Math.random()) ? console.log('orange') : console.log('purple')
coinFlip();}
return;

})





function headsTimeout() {
    document.getElementById("headsTally").innerHTML = "Tails     : " + headsCounter;
}

function tailsTimeout() {
    document.getElementById("tailsTally").innerHTML = "Heads    : " + tailsCounter;
}

function displayWinHeads () {
  document.getElementById('results').innerHTML = 'Heads wins';
}
function displayWinTails () {
  document.getElementById('results').innerHTML = 'Tails wins';
}

// ==============================alis code===============================
// this will make the image swing between two images of the coins


//
// document.getElementById("heads-total").innerHTML = heads;
// document.getElementById("heads-total").classList.add("tally-boxes-animate-heads");
// document.getElementById("tails-total").classList.remove("tally-boxes-animate-tails");
//
// document.getElementById("decider-coin").classList.add("img-background-tails");
// document.getElementById("decider-coin").classList.remove("img-background-heads");
// console.log("HEADS!");
// checkwinner();
//
//
// }
// else {
// tails++;
// document.getElementById("tails-total").innerHTML = tails;
// document.getElementById("tails-total").classList.add("tally-boxes-animate-tails");
// document.getElementById("heads-total").classList.remove("tally-boxes-animate-heads");
//
// document.getElementById("decider-coin").classList.add("img-background-heads");
// document.getElementById("decider-coin").classList.remove("img-background-tails");
//
//
//
//
// console.log("TAILS");
// ch
//
//















//d
