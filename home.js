
let day = prompt('wahd day?');
switch (day) {
    case 0: 
        text = 'Sunday';
        break;
    case 5:
        text = 'Friday';
        break;
    case 6:
        text = 'Saturday';
        break;
    default:
        text = 'weekday';
    }

    console.log(text);