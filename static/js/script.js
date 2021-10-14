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

