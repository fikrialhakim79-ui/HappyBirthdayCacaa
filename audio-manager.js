// Global Audio Manager - Berjalan di semua halaman
const AudioManager = {
    iframeId: 'youtube-player',
    
    init() {
        // Buat iframe YouTube jika belum ada
        if (!document.getElementById(this.iframeId)) {
            const iframe = document.createElement('iframe');
            iframe.id = this.iframeId;
            iframe.width = '0';
            iframe.height = '0';
            iframe.src = 'https://www.youtube.com/embed/n5i3QRvPA9Y?enablejsapi=1&autoplay=1&loop=1&start=18&playlist=n5i3QRvPA9Y';
            iframe.frameBorder = '0';
            iframe.allow = 'autoplay; encrypted-media';
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
        }
        
        // Auto play saat halaman loaded
        window.addEventListener('load', () => {
            this.play();
        });
    },
    
    play() {
        const iframe = document.getElementById(this.iframeId);
        if (iframe) {
            iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }
    },
    
    pause() {
        const iframe = document.getElementById(this.iframeId);
        if (iframe) {
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
    }
};

// Jalankan saat script loaded
AudioManager.init();
