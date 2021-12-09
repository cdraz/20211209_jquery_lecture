$(document).ready(onReady);

function onReady() {
    console.log('okay lets go')

    $('.box').text('I am a humble box');
    $('.box').css({
        color: 'purple',
        'font-size': '28px'
        })
    
    // Select my plantList element
    $('#plantList').append('<li>Bamboo</li>')

    let plants = [
        'Monstera',
        'Roses',
        'Cactus',
        'Hosta'
    ];
    for (let plant of plants) {
        $('#plantList').append(`
        <li>${plant}</li>
        `)
    }

    /*

    Getter: a function that gets a value when called
    ex) let divText = $('div').text();

    Setter: a function that sets a value when called
    ex) $('div').text("YOLO") // sets the value of text

    */
    let h5Text = $('welcomeText').text(); // Getter
    console.log(h5Text);

    let messedUpText = h5Text.split("").reverse().join(""); // stolen from stack overflow
    console.log('messedUpText', messedUpText);
    $('#welcomeText').text(messedUpText);
}





