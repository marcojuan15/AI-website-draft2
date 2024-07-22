document.addEventListener('DOMContentLoaded', function() {
    const reasonBoxes = document.querySelectorAll('.reason-box');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.3 });

    function setLayout() {
        const isMobile = window.innerWidth <= 768;
        reasonBoxes.forEach((box, index) => {
            if (!isMobile) {
                box.style.transitionDelay = `${index * 0.3}s`;
            } else {
                box.style.transitionDelay = '0s';
            }
            observer.observe(box);
        });
    }

    setLayout();
    window.addEventListener('resize', setLayout);
});