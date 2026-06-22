// document.getElementById('otpForm').addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const otp = document.getElementById('otp').value;
//     const email = localStorage.getItem('userEmail');

//     if (!email) {
//         alert('Session expired. Enter email again');
//         window.location.href = 'email.html';
//         return;
//     }
//     try {
//         const response = await fetch('/api/auth/verity-otp', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ email, otp })
//         });

//         const data = await response.json();

//         if (response.ok) {
//             alert('otp verified successfull');
//             window.location.href = 'registration.html';
//         } else {
//             alert(data.message || 'verification failed');
//         }
//     } catch (error) {
//         alert('something went worng please try again')
//     }
// });


document.getElementById('otpForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const otp = document.getElementById('otp').value;
    const email = localStorage.getItem('userEmail');
    if (!email) {
        alert('session expired! please enter email again.');
        window.location.href = 'email.html';
        return;
    }
    try {
        const response = await fetch('/api/auth/verify-otp', {
            method: 'POST', 
            headers: {
                'Content-type':  'application/json'
            },
            body: JSON.stringify({ email, otp})
        });
        const data = await response.json();
        if (response.ok) {
            alert('opt verified');
            window.location.href = 'registration.html';
        } else {
            alert(data.message || 'Verification failed');
        }
    } catch (error) {
        console.error(error);
        alert('someting went wrong please try again ')
    }
});