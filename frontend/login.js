document.getElementById('loginFrm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const uniqeName = document.getElementById('uniqeName').value;
    const pass = document.getElementById('loginPass').value;

    const response = await fetch('/api/auth/login', {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            uniqeName, pass
        })
    });
    if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem('loggedInUser', data.username);
        window.location.href = 'home.html'
    } else {
        const errdata = await response.json();
        alert(errdata.message || 'wrong password or uniqe name');
    }
});
