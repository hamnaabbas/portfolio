// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
  const text = "Mobile and web Developer, Program/Project manager";
  const el = document.querySelector(".typewriter");
  let index = 0;
  let isDeleting = false;

  function typeWriter() {
    if (!isDeleting) {
      el.textContent = text.slice(0, index++);
      if (index > text.length) {
        isDeleting = true;
        setTimeout(typeWriter, 1500); // Wait before deleting
        return;
      }
    } else {
      el.textContent = text.slice(0, --index);
      if (index === 0) {
        isDeleting = false;
      }
    }
    setTimeout(typeWriter, isDeleting ? 50 : 100);
  }

  typeWriter();


