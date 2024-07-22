document.addEventListener('DOMContentLoaded', function() {
    const bookCallBtnLarge = document.getElementById('bookCallBtnLarge');
    
    bookCallBtnLarge.addEventListener('click', function() {
        // Replace 'YOUR_BOOKING_LINK' with the actual link you want to open
        window.open('https://cal.com/andreasmassouras/30min?date=2024-07-11&month=2024-07', '_blank');
    });

    const bookingSection = document.querySelector('.booking-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bookingSection.classList.add('in-view');
            } else {
                bookingSection.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.2
    });

    observer.observe(bookingSection);
});
