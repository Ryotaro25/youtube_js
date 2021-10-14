//challenge 1 Your age on Days
function ageInDays() {
    var birthYear = prompt('what year were you born... Good firend?');
    var ageInDayss = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are' + ageInDayss + 'days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(ageInDayss);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

//chalenge 2 cat generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://c.tenor.com/ZhfMGWrmCTcAAAAC/cute-kitty-best-kitty.gif";
    div.appendChild(image);
}

//challenge 3 Rock Paper Scissors
function rpsGame(yourChoice) {
    console.log(yourChoice.id);
    // just declare
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomRpsInt());
    console.log('computerCoise:', botChoice);
    results = decideWinner(humanChoice, botChoice); //[1, 0] human lost, bot won
    console.log(results);
    message = finalMessage(results); //message :you won, 'color' : 'green'
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors' : 0.5, 'rock': 0}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message':'you lost', 'color': 'red'}
    } else if (yourScore === 0.5) {
        return {'message': 'you tied', 'color': 'yellow'}
    } else  {
        return {'message': 'You win', 'color': 'green'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=150 widhth=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=150 widhth=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";
    

    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);
}
