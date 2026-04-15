const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

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

const floatingElements = ['💖', '✨', '🌸', '💕', '💗'];
function createFloating() {
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = floatingElements[Math.floor(Math.random() * floatingElements.length)];
    element.style.left = Math.random() * 100 + 'vw';
    element.style.top = Math.random() * 100 + 'vh';
    element.style.fontSize = (Math.random() * 30 + 20) + 'px';
    document.body.appendChild(element);
    gsap.to(element, { y: -500, x: Math.random() * 100 - 50, rotation: Math.random() * 360, duration: Math.random() * 5 + 5, opacity: 0, onComplete: () => element.remove() });
}

// Music Player
const playPauseBtn = document.getElementById('play-pause-btn');
const youtubeIframe = document.getElementById('youtube-player');
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        youtubeIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        playPauseBtn.innerHTML = '▶️';
    } else {
        youtubeIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        playPauseBtn.innerHTML = '❚❚';
    }
    isPlaying = !isPlaying;
}
playPauseBtn.addEventListener('click', toggleMusic);

document.querySelector('.cta-button').addEventListener('click', () => {
    setTimeout(() => {
        if (!isPlaying) {
            youtubeIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            playPauseBtn.innerHTML = '❚❚';
            isPlaying = true;
        }
    }, 800);
});

window.addEventListener('load', () => {
    gsap.to('h1', { opacity: 1, duration: 1, y: 20, ease: "bounce.out" });
    gsap.to('.cta-button', { opacity: 1, duration: 1, y: -20, ease: "back.out" });
    typeGreeting();
    setInterval(createFloating, 800);
});
