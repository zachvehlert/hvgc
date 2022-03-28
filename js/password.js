const Token = 'fuckyabud';

function login (){
    let password = $('input').val();

    if(password == Token){
        window.location.href = 'home.html'
    }
    else{
        alert('Incorrect Password')
    }
}

$('button').on('click', login)