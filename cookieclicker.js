// Keep track of the score
let score = 0;

document.load = onLoad();

function onLoad() {
    console.log("onLoad()");
    score = extractScoreFromString(document.cookie);
    let scoreText = document.getElementById("score");
    scoreText.innerHTML = score;
}

function extractScoreFromString(cookieString) {
    let counter = cookieString;
    let array = counter.split(";");
    let scoreAsString = array[0].replace("myScore=", "");
    let scoreAsNumber = Number(scoreAsString);
    return scoreAsNumber;
}

function onCookieClick() {
    // Get the h1 element from the HTML
    // "This is like findElementById on android"
    let scoreText = document.getElementById("score");

    //Increase the score by one
    score++;

    //Set the h1 element to be the value of score
    //This is like .setText() on android
    scoreText.innerHTML = score;

    document.cookie = "myScore=" + score + "; expires=Thu, 15 Feb 2018 12:00:00 UTC";
}