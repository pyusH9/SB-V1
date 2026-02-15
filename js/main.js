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

 // Modal logic
const modal = document.getElementById('work-modal');
const modalTitle = modal.querySelector('.modal-title');
const modalText = modal.querySelector('.modal-text');
const closeBtn = modal.querySelector('.close-btn');

function openWork(title, text) {
  modalTitle.innerText = title;
  modalText.innerText = text;
  modal.style.display = 'block';
}

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; }

// Scroll animation for work cards
const cards = document.querySelectorAll('.work-card');

function animateCards() {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animateCards);
window.addEventListener('load', animateCards);

// Modal logic
const modal = document.getElementById('work-modal');
const modalTitle = modal.querySelector('.modal-title');
const modalText = modal.querySelector('.modal-text');
const closeBtn = modal.querySelector('.close-btn');

function openWork(title, text) {
  modalTitle.innerText = title;
  modalText.innerText = text;
  modal.style.display = 'block';
}

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; }



});
