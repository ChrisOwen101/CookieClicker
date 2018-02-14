// Keep track of the score
let score = 0;

document.load = onLoad();

// When I open the webpage, run this function
function onLoad() {
    score = extractScoreFromString(document.cookie);
    setScoreText(score);
}

// Get the score from the HTML Cookie
function extractScoreFromString(cookieString) {
    let array = cookieString.split(";"); //   ["myScore=0" , "expires=Thu, 15 Feb 2018 12:00:00 UTC"]
    let scoreAsString = array[0].replace("myScore=", ""); //   "0"
    let scoreAsNumber = Number(scoreAsString); //   0
    return scoreAsNumber;
}

function setScoreText(scoreNumber) {
    document.getElementById("score").innerHTML = scoreNumber;
}

function onCookieClick() {
    //Increase the score by one
    score++;

    //Set the h1 element to be the value of score
    //This is like .setText() on android
    setScoreText(score);

    // Save to a cookie
    document.cookie = "myScore=" + score + "; expires=Thu, 15 Feb 2018 12:00:00 UTC";
}