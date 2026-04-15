// Reasons (bisa kamu tambah sendiri nanti)
const reasons = [
    { text: "You’re such a kind and wonderful person, and I feel lucky to share such a good bond with you. 💖", emoji: "🌟", gif: "gif1.gif" },
    { text: "May your day be filled with love, laughter, and endless joy. 🌸 ", emoji: "💗", gif: "gif2.gif" },
    { text: "Wishing you success, happiness, and everything your heart desires. ✨ ", emoji: "💕", gif: "gif1.gif" },
    { text: "Stay the amazing girl you are—always spreading positivity around. Have the happiest year ahead! 🥳 ", emoji: "🌟", gif: "gif2.gif" }
];

let currentReasonIndex = 0;
const reasonsContainer = document.getElementById('reasons-container');
const shuffleButton = document.querySelector('.shuffle-button');
const reasonCounter = document.querySelector('.reason-counter');
let isTransitioning = false;

function createReasonCard(reason) {
    const card = document.createElement('div');
    card.className = 'reason-card';
    const text = document.createElement('div');
    text.className = 'reason-text';
    text.innerHTML = `${reason.emoji} ${reason.text}`;
    const gifOverlay = document.createElement('div');
    gifOverlay.className = 'gif-overlay';
    gifOverlay.innerHTML = `<img src="${reason.gif}" alt="Memory">`;
    card.appendChild(text);
    card.appendChild(gifOverlay);
    gsap.from(card, { opacity: 0, y: 50, duration: 0.5, ease: "back.out" });
    return card;
}

function displayNewReason() {
    if (isTransitioning) return;
    isTransitioning = true;
    if (currentReasonIndex < reasons.length) {
        const card = createReasonCard(reasons[currentReasonIndex]);
        reasonsContainer.appendChild(card);
        reasonCounter.textContent = `Reason ${currentReasonIndex + 1} of ${reasons.length}`;
        currentReasonIndex++;
        if (currentReasonIndex === reasons.length) {
            shuffleButton.textContent = "Enter Our Storylane 💫";
            shuffleButton.classList.add('story-mode');
            shuffleButton.onclick = () => {
                gsap.to('body', { opacity: 0, duration: 1, onComplete: () => window.location.href = 'last.html' });
            };
        }
        createFloatingElement();
        setTimeout(() => isTransitioning = false, 500);
    }
}

shuffleButton.addEventListener('click', () => {
    gsap.to(shuffleButton, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
    displayNewReason();
});

function createFloatingElement() {
    const elements = ['🌸', '✨', '💖', '🦋', '⭐'];
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = elements[Math.floor(Math.random() * elements.length)];
    element.style.left = Math.random() * window.innerWidth + 'px';
    element.style.top = Math.random() * window.innerHeight + 'px';
    element.style.fontSize = (Math.random() * 20 + 10) + 'px';
    document.body.appendChild(element);
    gsap.to(element, { y: -500, duration: Math.random() * 10 + 10, opacity: 0, onComplete: () => element.remove() });
}

// === TOMBOL I LOVE YOU ===
document.getElementById('love-button').addEventListener('click', () => {
    const btn = document.getElementById('love-button');
    btn.style.transform = 'scale(0.9)';
    for (let i = 0; i < 80; i++) {
        const heart = document.createElement('div');
        heart.textContent = '💖';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '80vh';
        heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
        heart.style.zIndex = '9999';
        heart.style.pointerEvents = 'none';
        document.body.appendChild(heart);
        gsap.to(heart, {
            y: -window.innerHeight - 200,
            x: Math.random() * 300 - 150,
            rotation: Math.random() * 720,
            duration: Math.random() * 3 + 3,
            opacity: 0,
            ease: "power2.out",
            onComplete: () => heart.remove()
        });
    }
    setTimeout(() => {
        alert("💖 I LOVE YOU SO MUCH CACAA 💖\nYou make my world brighter every day! 🌍✨");
        btn.style.transform = 'scale(1)';
    }, 800);
});

// Music Player (sama seperti index)
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

setInterval(createFloatingElement, 2000);
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX - 15, y: e.clientY - 15, duration: 0.2 });
});
