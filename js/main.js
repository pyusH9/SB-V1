document.addEventListener('DOMContentLoaded', () => {

  // ====== Top Artists ======
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

  // ====== Signup Form ======
  const signupForm = document.getElementById('signup-form');
  if(signupForm){
    signupForm.addEventListener('submit', async e => {
      e.preventDefault();
      const formData = new FormData(signupForm);

      try {
        const res = await fetch('../backend/signup.php', {  // make sure path is correct
          method: 'POST',
          body: formData
        });
        const data = await res.json();

        if(data.status === 'success'){
          alert('Signup successful! Redirecting to login...');
          window.location.href = 'login.html';
        } else {
          alert('Error: ' + data.message);
        }
      } catch(err){
        console.error(err);
        alert('Signup failed due to network error.');
      }
    });
  }

  function openWork(url){
  window.location.href = url;
}


});
