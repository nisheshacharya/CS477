window.onload = function(){
    document.getElementById('signup').onclick = signup;
}

function signup(){
    fetch('http://localhost:3001/users', {
        method: 'POST',
        body: JSON.stringify({
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            role: document.getElementById("role").value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    location.href="login.html"
}