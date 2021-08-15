document.getElementById('login-submit').addEventListener('click', function(){
    //get user email
    const userEmail = document.getElementById('user-email').value;
    //get user password
    const userPassword = document.getElementById('user-password').value;

    if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){

    }
    else{
        alert('invalid email or password')
    }
})