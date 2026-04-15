// Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Typing effect
const greetingText = "Hey You Know What! You're the most adorable human i ever met! 💖";
const greetingElement = document.querySelector('.greeting');
let charIndex = 0;
function typeGreeting() {
    if (charIndex < greetingText.length) {
        greetingElement.textContent += greetingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeGreeting, 100);
    }
}

// Floating hearts
const floatingElements = ['💖', '✨', '🌸', '💕', '💗'];
function createFloating() {
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = floatingElements[Math.floor(Math.random() * floatingElements.length)];
    element.style.left = Math.random() * 100 + 'vw';
    element.style.top = Math.random() * 100 + 'vh';
    element.style.fontSize = (Math.random() * 30 + 20) + 'px';
    document.body.appendChild(element);

    gsap.to(element, {
        y: -500,
        x: Math.random() * 100 - 50,
        rotation: Math.random() * 360,
        duration: Math.random() * 5 + 5,
        opacity: 0,
        ease: "none",
        onComplete: () => element.remove()
    });
}

// === NAVIGASI KE HALAMAN BERIKUTNYA ===
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('click', () => {
    // Animasi klik
    gsap.to(ctaButton, { scale: 0.95, duration: 0.2, yoyo: true, repeat: 1 });

    // Pindah ke halaman berikutnya setelah 400ms
    setTimeout(() => {
        window.location.href = 'cause.html';
    }, 400);
});

window.addEventListener('load', () => {
    gsap.to('h1', { opacity: 1, duration: 1, y: 20, ease: "bounce.out" });
    gsap.to('.cta-button', { opacity: 1, duration: 1, y: -20, ease: "back.out" });
    typeGreeting();
    setInterval(createFloating, 800);
});
