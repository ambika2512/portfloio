// Initialize Lucide icons
lucide.createIcons();

// Handle View Work button click
function handleViewWork() {
    window.open('https://drive.google.com/file/d/1c5F_Xa3NeVgheGIjOZL19a4zfY87MvlB/view?usp=sharing', '_blank');
}

function handleDownloadResume() {
  window.open('https://drive.google.com/file/d/1c5F_Xa3NeVgheGIjOZL19a4zfY87MvlB/view?usp=sharing', '_blank');
}

function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// EmailJS integration for contact form
(function() {
    emailjs.init('wlS4gKriJh9YaOQjF'); // public key
})();

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_ips400f', 'template_fvg3sz8', this)
            .then(function() {
                alert('Your message has been sent successfully!');
                contactForm.reset();
            }, function(error) {
                alert('Failed to send message. Please try again later.');
                console.error('EmailJS error:', error);
            });
    });
}

document.getElementById('year').textContent = new Date().getFullYear();

// Add smooth scrolling for anchor links and any additional JS
// (You can add more JS here as needed)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully');
});
