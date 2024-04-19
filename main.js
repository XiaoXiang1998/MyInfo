function enlargeImage(img) {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  modal.style.display = 'flex';
  modalImage.src = img.src;
}

function closeModal() {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  modal.style.animation = 'fade-out 1s';
  modalImage.src = "";
  setTimeout(function() {
    modal.style.animation = '';
    modal.style.display = 'none';
  }, 900);
}
