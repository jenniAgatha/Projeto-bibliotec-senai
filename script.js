// Wait for the DOM to be fully loaded
window.addEventListener('load', function() {
    // Get the elements
    const carousel = document.getElementById('caroussel-books');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    console.log('Carousel elements:', {
        carousel: carousel,
        prevBtn: prevBtn,
        nextBtn: nextBtn
    });

    if (!carousel || !prevBtn || !nextBtn) {
        console.error('Missing required elements');
        return;
    }

    // Initialize position and card width
    let position = 0;
    const step = 280; // card width (220px) + gap (60px)
    
    // Get total number of cards
    const cards = carousel.querySelectorAll('.books');
    const maxPosition = (cards.length - 1) * step;
    
    console.log('Carousel config:', {
        totalCards: cards.length,
        stepSize: step,
        maxPosition: maxPosition
    });

    // Previous button click handler
    prevBtn.onclick = function() {
        console.log('Previous clicked, current position:', position);
        if (position > 0) {
            position -= step;
            carousel.style.transform = `translateX(-${position}px)`;
            console.log('New position:', position);
        }
        updateButtons();
    };

    // Next button click handler
    nextBtn.onclick = function() {
        console.log('Next clicked, current position:', position);
        if (position < maxPosition) {
            position += step;
            carousel.style.transform = `translateX(-${position}px)`;
            console.log('New position:', position);
        }
        updateButtons();
    };

    // Update button states
    function updateButtons() {
        prevBtn.style.opacity = position <= 0 ? '0.5' : '1';
        prevBtn.style.cursor = position <= 0 ? 'default' : 'pointer';
        
        nextBtn.style.opacity = position >= maxPosition ? '0.5' : '1';
        nextBtn.style.cursor = position >= maxPosition ? 'default' : 'pointer';
    }

    // Initialize button states
    updateButtons();
    console.log('Carousel initialized');
});
