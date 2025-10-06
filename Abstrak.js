// JavaScript untuk membuat dan menganimasikan hati
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        document.body.appendChild(heart);

        // Posisi acak horizontal
        heart.style.left = Math.random() * 100 + 'vw'; 
        // Durasi dan delay animasi acak untuk kesan abstrak
        heart.style.animationDuration = Math.random() * 8 + 6 + 's'; 
        heart.style.animationDelay = Math.random() * -5 + 's'; // Mulai dari waktu yang acak
        // Ukuran acak
        heart.style.width = Math.random() * 20 + 10 + 'px'; 
        heart.style.height = heart.style.width; 
        heart.style.bottom = '-10px'; // Mulai dari bawah

        // Hapus heart setelah animasi selesai
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // Buat heart baru setiap 300 milidetik
    setInterval(createHeart, 300);