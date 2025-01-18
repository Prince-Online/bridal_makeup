function submitForm(e) {
    e.preventDefault();
    
    const form = document.getElementById('bookingForm');
    const formData = new FormData(form);
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxo9-Gsa2ffKedSA_a6MCVwwXCE2ocqHQk1vHJoy7NI37i20Gn3Wd2ENb32L4klXAI/exec';
    
    fetch(scriptURL, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('errorMessage').style.display = 'none';
            form.reset();
            setTimeout(() => {
                document.getElementById('successMessage').style.display = 'none';
            }, 5000);
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
        setTimeout(() => {
            document.getElementById('errorMessage').style.display = 'none';
        }, 5000);
    });
}
