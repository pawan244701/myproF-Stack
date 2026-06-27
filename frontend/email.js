document.getElementById('emailForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email
        })
    });
    if (response.ok) {
        sessionStorage.setItem('userEmail', email);
        window.location.href = 'otp.html';
    } else {
        const errData = await response.json();
        alert(errData.message || 'from frontend : Failed to send otp. tyr again');
    }
});
