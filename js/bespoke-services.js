document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.2,  // Trigger when 20% of the item is visible
        rootMargin: '0px 0px -20% 0px'  // Slightly reduce the effective viewport
    });

    serviceItems.forEach(item => {
        observer.observe(item);
    });
});