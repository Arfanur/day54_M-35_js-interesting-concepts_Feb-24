function welcomeMessage(name, greatHandler) {
    // console.log(greatHandler);
    greatHandler(name);
}
// const names = ['Tom Hanks', 'Tom Brady', 'Tom Cruise'];
// welcomeMessage(names);

// const myObj = { name: 'Tom Chinku', age: 11 };
// welcomeMessage(myObj);

function greetMorning(name) {
    console.log('Good morning', name);
}
function greetAfternoon(name) {
    console.log('Good Afternoon', name);
}
function greetEvening(name) {
    console.log('Good Evening', name);
}
welcomeMessage('Tom Hanks', greetMorning);
welcomeMessage('Sakib Hanks', greetAfternoon);
welcomeMessage('Bappa Raj', greetEvening);

// function handleClick() {
//     console.log('button is clicked');
// }

// document.getElementById('my-btn').addEventListener('click', handleClick);

