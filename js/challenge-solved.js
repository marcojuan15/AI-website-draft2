document.addEventListener('DOMContentLoaded', function() {
    const challengeSection = document.querySelector('.challenge-solved');
    const challengeItems = document.querySelectorAll('.challenge-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                challengeItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 200);
                });
            } else {
                challengeItems.forEach((item) => {
                    item.classList.remove('visible');
                });
            }
        });
    }, {
        threshold: 0.2
    });

    observer.observe(challengeSection);
});