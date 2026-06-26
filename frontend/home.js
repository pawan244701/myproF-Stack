const logoutbtn = document.getElementById('logout');
logoutbtn.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html'
});

document.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('loggedInUser');
    const greetH1 = document.getElementById('greetmsg');


    if (savedName) {
        greetH1.textContent = `Welcome ${savedName}!`;
    } else {
        window.location.href = 'login.html';
    }
});
