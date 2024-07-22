document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.mission-vision-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateItem(entry.target);
            } else {
                resetItem(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    function animateItem(item) {
        const square = item.querySelector('.topic-square');
        const rectangle = item.querySelector('.content-rectangle');

        square.style.opacity = '1';
        square.style.transform = 'translateY(-50%)';

        setTimeout(() => {
            rectangle.style.opacity = '1';
            rectangle.style.transform = 'translateX(0)';
        }, 500); // Delay the rectangle animation
    }

    function resetItem(item) {
        const square = item.querySelector('.topic-square');
        const rectangle = item.querySelector('.content-rectangle');

        square.style.opacity = '0';
        square.style.transform = 'translateY(0)';
        rectangle.style.opacity = '0';
        rectangle.style.transform = 'translateX(-50px)';
    }

    function setLayout() {
        const isMobile = window.innerWidth <= 768;
        items.forEach((item, index) => {
            const square = item.querySelector('.topic-square');
            if (!isMobile) {
                square.style.transitionDelay = `${index * 0.3}s`;
            } else {
                square.style.transitionDelay = '0s';
            }
            observer.observe(item);
        });
    }

    setLayout();
    window.addEventListener('resize', setLayout);
});