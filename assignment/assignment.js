console.log('okay let\'s go');
$(document).ready(onReady);

function onReady() {
    console.log('okay jquery let\'s go');
    $('#chrisbutton').on( 'click', chrisItUp );
    $('#otherbutton').on( 'click', yourTextItUp );
}

function chrisItUp() {
    $('#headings1to6').children().text('Chris was here');
    $('img').attr('src', 'chris.jpg' )
    $('p').text('chris was here');
}

function yourTextItUp() {
    $('p').text( getTextInput() );
}

function getTextInput() {
    let yourText = $('#yourTextHere').val();
    $('#yourTextHere').val('');
    return yourText;
}