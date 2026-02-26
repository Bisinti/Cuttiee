// Function to navigate to page 2
function goToPage2() {
    document.getElementById('page1').classList.remove('active');
    document.getElementById('page2').classList.add('active');
}

// Function to show happy celebration
function showHappy() {
    document.getElementById('page2').classList.remove('active');
    document.getElementById('happy').classList.add('active');
    createHearts();
}

// Function to show sad response
function showSad() {
    document.getElementById('page2').classList.remove('active');
    document.getElementById('sad').classList.add('active');
}

// Function to show sorry page (when not single)
function showSorry() {
    document.getElementById('page1').classList.remove('active');
    document.getElementById('sorry').classList.add('active');
}

// Function to reset to start
function resetToStart() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById('page1').classList.add('active');
    removeHearts();
}

// Function to create floating hearts for celebration
function createHearts() {
    const container = document.querySelector('.container');
    const colors = ['❤️', '💕', '💖', '💗', '💝', '💓'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = colors[Math.floor(Math.random() * colors.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
            container.appendChild(heart);
        }, i * 200);
    }
}

// Function to remove all floating hearts
function removeHearts() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => heart.remove());
}