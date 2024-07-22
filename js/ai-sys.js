document.addEventListener('DOMContentLoaded', function() {
    const aiSystemBoxes = document.querySelectorAll('.ai-system-box');
    const aiSystemMore = document.querySelector('.ai-system-more');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            } else {
                entry.target.style.opacity = 0;
                entry.target.style.transform = 'translateY(20px)';
            }
        });
    }, {
        threshold: 0.2
    });

    aiSystemBoxes.forEach((box, index) => {
        box.style.opacity = 0;
        box.style.transform = 'translateY(20px)';
        box.style.transition = `opacity 1s ease ${index * 0.1}s, transform 1s ease ${index * 0.1}s`;
        observer.observe(box);
    });

    aiSystemMore.style.opacity = 0;
    aiSystemMore.style.transform = 'translateY(20px)';
    aiSystemMore.style.transition = 'opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s';
    observer.observe(aiSystemMore);
});