

const SERVER_URL = 'http://localhost:8085/users/register';


const signup = async (event) => {
    event.preventDefault();
    console.log('clicked');

    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = {
        fullName,
        email,
        password

    };

    const response = await fetch(`${SERVER_URL}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const userData = await response.json();
    console.log(userData);

   /*  if(!userData.status){
        const errorMessage = document.getElementById('error-msg');
        errorMessage.innerText = userData.message;

    } */

    if(userData.status){
        //document.getElementById('msg').innerText = '';
        
        window.location.href = 'index.html';
    }else{
        document.getElementById('msg').innerText = userData.message;
    }
};


