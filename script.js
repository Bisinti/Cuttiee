// Function to navigate to page 2
function goToPage2() {
    const container = document.querySelector('.container');
    container.classList.add('shake');
    setTimeout(() => container.classList.remove('shake'), 500);
    
    document.getElementById('page1').classList.remove('active');
    document.getElementById('page2').classList.add('active');
    createSparkles(event);
}

// Function to show happy celebration
function showHappy() {
    document.getElementById('page2').classList.remove('active');
    document.getElementById('happy').classList.add('active');
    
    const container = document.querySelector('.container');
    container.classList.add('glow');
    
    createHearts();
    createConfetti();
    createSparkles(event);
}

// Function to show sad response
function showSad() {
    document.getElementById('page2').classList.remove('active');
    document.getElementById('sad').classList.add('active');
    createSparkles(event);
}

// Function to show sorry page (when not single)
function showSorry() {
    document.getElementById('page1').classList.remove('active');
    document.getElementById('sorry').classList.add('active');
    createSparkles(event);
}

// Function to reset to start
function resetToStart() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById('page1').classList.add('active');
    
    const container = document.querySelector('.container');
    container.classList.remove('glow');
    
    removeHearts();
    removeConfetti();
}

// Function to create floating hearts for celebration
function createHearts() {
    const container = document.querySelector('.container');
    const colors = ['❤️', '💕', '💖', '💗', '💝', '💓', '💘', '💞'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = colors[Math.floor(Math.random() * colors.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
            heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
            container.appendChild(heart);
        }, i * 150);
    }
}

// Function to create confetti
function createConfetti() {
    const container = document.querySelector('.container');
    const colors = ['#ff6b9d', '#f093fb', '#f5576c', '#667eea', '#4facfe', '#00f2fe', '#ffd700'];
    const shapes = ['■', '●', '▲', '★', '♦'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 1 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.fontSize = (Math.random() * 15 + 10) + 'px';
            container.appendChild(confetti);
        }, i * 100);
    }
}

// Function to create sparkles on click
function createSparkles(event) {
    const sparkleContainer = document.getElementById('sparkleContainer');
    const x = event ? event.clientX : window.innerWidth / 2;
    const y = event ? event.clientY : window.innerHeight / 2;
    
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            
            const angle = (Math.PI * 2 * i) / 12;
            const distance = Math.random() * 100 + 50;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            sparkle.style.setProperty('--tx', tx + 'px');
            sparkle.style.setProperty('--ty', ty + 'px');
            sparkle.style.animation = `sparkleAnim 1s ease-out forwards`;
            sparkle.style.transform = `translate(${tx}px, ${ty}px)`;
            
            sparkleContainer.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1000);
        }, i * 50);
    }
}

// Function to remove all floating hearts
function removeHearts() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => heart.remove());
}

// Function to remove all confetti
function removeConfetti() {
    const confetti = document.querySelectorAll('.confetti');
    confetti.forEach(c => c.remove());
}

// Add keyboard support for surprise
document.addEventListener('keydown', function(e) {
    if (e.key === ' ' || e.key === 'Enter') {
        createSparkles(event);
    }
});

// Add mouse movement effect
let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Subtle parallax effect on shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - window.innerWidth / 2) * speed / 100;
        const y = (mouseY - window.innerHeight / 2) * speed / 100;
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});