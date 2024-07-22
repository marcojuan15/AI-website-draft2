document.addEventListener('DOMContentLoaded', function() {
    const workColumns = document.querySelectorAll('.work-column');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateColumn(entry.target);
            } else {
                resetColumn(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    function animateColumn(column) {
        const topicRectangle = column.querySelector('.topic-rectangle');
        const contentItems = column.querySelectorAll('.content-item');
        const connectingLine = column.querySelector('.connecting-line');

        // Animate topic rectangle
        topicRectangle.style.opacity = '1';
        topicRectangle.style.transform = 'translateX(0)';

        // Animate content rectangles
        contentItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 500 + 200 * index); // Start after topic rectangle animation
        });

        // Animate connecting line
        setTimeout(() => {
            connectingLine.style.transform = 'translateX(-50%) scaleY(1)';
        }, 500 + 200 * contentItems.length); // Start after all content rectangles
    }

    function resetColumn(column) {
        const topicRectangle = column.querySelector('.topic-rectangle');
        const contentItems = column.querySelectorAll('.content-item');
        const connectingLine = column.querySelector('.connecting-line');

        topicRectangle.style.opacity = '0';
        topicRectangle.style.transform = 'translateX(-50px)';

        contentItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
        });

        connectingLine.style.transform = 'translateX(-50%) scaleY(0)';
    }

    workColumns.forEach(column => {
        resetColumn(column);
        observer.observe(column);
    });
});