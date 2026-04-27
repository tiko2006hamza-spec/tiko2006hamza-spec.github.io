(function() {
  const cityLinks = document.querySelectorAll('.city-link');
  const toastElement = document.getElementById('cityToast');
  const toastMessageSpan = document.getElementById('toastMessage');
  
  function showToast(cityName) {
    if (!toastElement || !toastMessageSpan) return;
    toastMessageSpan.innerHTML = `<i class="fas fa-door-open" style="margin-right: 6px;"></i> Redirection vers <strong>${cityName}</strong> — informations détaillées`;
    toastElement.classList.add('show');
    setTimeout(() => {
      toastElement.classList.remove('show');
    }, 2200);
  }
  
  cityLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const city = link.getAttribute('data-city');
      if (city) {
        showToast(city);
      } else {
        const parentCard = link.closest('.city-card');
        if (parentCard) {
          const cityNameElem = parentCard.querySelector('.city-name');
          if (cityNameElem) {
            let rawName = cityNameElem.innerText.trim();
            rawName = rawName.replace(/[^\w\séèîôûàç]/gi, '').trim();
            showToast(rawName.split(' ')[0]);
          } else {
            showToast("cette ville");
          }
        } else {
          showToast("cette destination");
        }
      }
    });
  });
  
  const cards = document.querySelectorAll('.city-card');
  cards.forEach((card, idx) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(12px)';
    card.style.transition = 'opacity 0.4s ease, transform 0.3s ease';
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, idx * 80 + 100);
  });
})();
