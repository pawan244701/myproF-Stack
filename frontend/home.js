const logoutbtn = document.getElementById('logoutBtn');
logoutbtn.addEventListener('click', () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = 'login.html'
});

document.addEventListener('DOMContentLoaded', () => {
    const savedName = sessionStorage.getItem('loggedInUser');
    const greetH1 = document.getElementById('greetmsg');


    if (savedName) {
        greetH1.textContent = `Welcome ${savedName}!`;
    } else {
        window.location.href = 'login.html';
    }
});
