document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.ai-power-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add('in-view');
            } else {
                section.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.2 // Adjust this value to control when the effect triggers
    });

    observer.observe(section);
});
