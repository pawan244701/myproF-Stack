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
        localStorage.setItem('userEmail', email);
        window.location.href = 'otp.html';
    } else {
        alert('Failed to send otp. tyr again');
    }
});
