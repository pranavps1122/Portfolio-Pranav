let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            })
            document.querySelector(
                'header nav a[href*=' + id + ']')
                .classList.add('active');

        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
function validateForm() {
    // Get form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('number').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('msg').value.trim();

    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate name
    if (name === '') {
        alert('Please enter your full name.');
        return false;
    }

    // Validate email
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address (e.g., user@gmail.com).');
        return false;
    }

    // Validate phone number
    if (number === '' || !/^\d{10}$/.test(number)) {
        alert('Please enter a valid phone number (10 digits).');
        return false;
    }

    // Validate subject
    if (subject === '') {
        alert('Please enter a subject.');
        return false;
    }

    // Validate message
    if (message === '') {
        alert('Please enter your message.');
        return false;
    }

    // If all validations pass
    return true; // Allow form submission
}

$("#submit-form").submit((e) => {
    e.preventDefault();

    // Validate form before submission
    if (validateForm()) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxu6KWFxkBzxpF01RbwfcsuMLRqVow03Lu-VE9na2LBEtYDL80_oZwgKBRTlI60-Waw/exec",
            data: $("#submit-form").serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully!");
                window.location.reload();
                // Optionally redirect: window.location.href="https://google.com";
            },
            error: function (err) {
                alert("Something went wrong. Please try again.");
            }
        });
    }
});
