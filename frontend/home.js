// logout button
const logoutbtn = document.getElementById('logoutBtn');
logoutbtn.addEventListener('click', () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = 'login.html'
});

// user login acceptance or denial
const savedName = sessionStorage.getItem('loggedInUser');
const greetH1 = document.getElementById('welcome-user');
const sidebarUserName = document.getElementById('user-profile-name');
if (savedName) {
    greetH1.textContent = `Welcome ${savedName}!`;
    sidebarUserName.textContent = `${savedName}`;
} else {
    window.location.href = 'login.html';
}

// link showing and hiding on click on pawan244701 text link
const pawan244701 = document.getElementById('pawan244701');
const links = document.getElementById('social-media-links');
if (pawan244701 && links) {
    pawan244701.addEventListener('click', (e) => {
        e.preventDefault();
        links.classList.toggle('show');
    });
}



