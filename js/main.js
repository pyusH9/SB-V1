document.addEventListener('DOMContentLoaded', () => {
  const artistGrid = document.getElementById('artist-grid');
  if(artistGrid){
    fetch('../backend/get_top_artists.php')
      .then(res => res.json())
      .then(artists => {
        artists.forEach(artist => {
          const card = document.createElement('div');
          card.className = "artist-card";
          card.innerHTML = `
            <img src="${artist.profile_pic}" alt="${artist.name}">
            <h3>${artist.name}</h3>
            <p>${artist.short_bio}</p>
            <p><strong>Role:</strong> ${artist.role}</p>
            <p><strong>KYC:</strong> ${artist.kyc_status}</p>
          `;
          artistGrid.appendChild(card);
        });
      });
  }
});
