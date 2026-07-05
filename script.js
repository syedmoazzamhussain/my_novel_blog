// Ab yahan koi summary nahi hai, sirf links aur IDs hain
const episodes = [
    { id: 1, link: "ep1.html" },
    { id: 2, link: "ep2.html" },
    { id: 3, link: "ep3.html" },
    { id: 4, link: "ep4.html" },
    { id: 5, link: "ep5.html" },
    { id: 6, link: "ep6.html" },
    { id: 7, link: "ep7.html" },
    { id: 8, link: "ep8.html" },
    { id: 9, link: "ep9.html" }
];

const episodesList = document.getElementById('episodes-list');

// Loop chala kar cards generate karna
episodes.forEach(ep => {
    const card = document.createElement('div');
    card.classList.add('episode-card');

    // Isme se summary wala text bilkul mita diya hai
    card.innerHTML = `
        <div class="card-content" style="text-align: center; padding: 30px 20px;">
            <span class="ep-number" style="font-size: 1.8rem; display: block; color: #1b4332;">قسط 0${ep.id}</span>
        </div>
        <a href="${ep.link}" class="read-btn">Read Episode</a>
    `;

    episodesList.appendChild(card);
});