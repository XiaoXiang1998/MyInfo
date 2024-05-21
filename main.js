const certs = [
  {
    "course": "Front-end Development with React",
    "org": "IBM",
    "date": "May 21, 2024",
    "id": "T2B8WUNXD8WM",
    "file": "Coursera_T2B8WUNXD8WM.png"
  },
  {
    "course": "Introduction to Web Development with HTML, CSS, JavaScript",
    "org": "IBM",
    "date": "Apr 26, 2024",
    "id": "N8BUGBZDLHJ5",
    "file": "Coursera_N8BUGBZDLHJ5.png"
  },
  {
    "course": "Introduction to Cloud Computing",
    "org": "IBM",
    "date": "Apr 17, 2024",
    "id": "L5YUA3AU746S",
    "file": "Coursera_L5YUA3AU746S.png"
  },
  {
    "course": "English for Career Development",
    "org": "University of Pennsylvania",
    "date": "Mar 27, 2024",
    "id": "HZCPEDWHKDR3",
    "file": "Coursera_HZCPEDWHKDR3.png"
  }
]

setTimeout(() => {
  const certificateList = document.getElementById('certs');

  certs.forEach(cert => {
    const certContainer = document.createElement('div');
    certContainer.classList.add('certificate-container');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('certificate-image-container');
    const img = document.createElement('img');
    img.src = `certificates/${cert.file}`;
    img.alt = cert.id;
    img.onclick = () => enlargeImage(img);
    imageContainer.appendChild(img);
    certContainer.appendChild(imageContainer);

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    const courseTitle = document.createElement('h2');
    courseTitle.textContent = cert.course;
    const orgDate = document.createElement('p');
    orgDate.innerHTML = `${cert.org} - <span class="date">${cert.date}</span>`;
    const credentialId = document.createElement('p');
    credentialId.classList.add('date');
    credentialId.textContent = `Credential ID ${cert.id}`;
    textContainer.appendChild(courseTitle);
    textContainer.appendChild(orgDate);
    textContainer.appendChild(credentialId);
    certContainer.appendChild(textContainer);
    certificateList.appendChild(certContainer);
  });
}, 100);

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
  setTimeout(function () {
    modal.style.animation = '';
    modal.style.display = 'none';
  }, 900);
}
