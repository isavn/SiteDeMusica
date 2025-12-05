const searchInput = document.getElementById('advancedSearch');
const resultsContainer = document.getElementById('advancedResults');
const bioContainer = document.getElementById('bioContainer');

const artistBios = {
    "Chris Brown": "Chris Brown é um cantor e compositor americano, conhecido pelo seu R&B e pop animado.",
    "Bruno Mars": "Bruno Mars é famoso por seu pop funk e performances energéticas.",
    "Steve Lacy": "Steve Lacy é um artista alternativo de R&B e soul moderno.",
    "Daniel Caesar": "Daniel Caesar combina soul e R&B com letras profundas e emotivas.",
    "Kali Uchis": "Kali Uchis é conhecida por seu estilo alternativo e mistura de gêneros.",
    "Mitski": "Mitski cria músicas indie emocionais e introspectivas.",
    "Sade": "Sade é lendária pelo soul suave e letras sofisticadas.",
    "Shawn Mendes": "Shawn Mendes é um cantor pop famoso por hits românticos.",
    "Mac DeMarco": "Mac DeMarco é conhecido pelo indie relaxado e alternativo.",
    "Frank Ocean": "Frank Ocean mistura R&B, soul e storytelling único."
};

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const cards = resultsContainer.querySelectorAll('.card');
    let found = false;

    cards.forEach(card => {
        const music = card.getAttribute('data-music').toLowerCase();
        if(music.includes(query)) {
            card.style.display = 'block';
            found = true;
            const artist = card.querySelector('p').textContent.split('-')[1].trim();
            bioContainer.innerHTML = `
                <div class="bio-card">
                    <img class="bio-photo" src="" alt="${artist}">
                    <div class="bio-text">
                        <h3>${artist}</h3>
                        <p>${artistBios[artist]}</p>
                    </div>
                </div>
            `;
        } else {
            card.style.display = 'none';
        }
    });

    if(!query || !found) bioContainer.innerHTML = '';
});
