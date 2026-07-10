const logoutbtn = document.getElementById('logoutBtn');
logoutbtn.addEventListener('click', () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = 'login.html'
});

document.addEventListener('DOMContentLoaded', () => {
    const savedName = sessionStorage.getItem('loggedInUser');
    const greetH1 = document.getElementById('welcome-user');
    const sidebarUserName = document.getElementById('user-profile-name');

    if (savedName) {
        greetH1.textContent = `Welcome ${savedName}!`;
        sidebarUserName.textContent = `${savedName}`;
    } else {
        window.location.href = 'login.html';
    }
});
