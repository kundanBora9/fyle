
// onclick  model open
const contactUsButtons = document.querySelectorAll('button.btn.btn-danger.text-uppercase');
contactUsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const contactUsModal = new bootstrap.Modal(document.getElementById('contactUsModal'));
    contactUsModal.show();
  });
});

// form validation
(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
     .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
  })()

  // changeing images on click
   
    const projectContainers = document.querySelectorAll('.project-container');

    
    projectContainers.forEach((projectContainer) => {
      projectContainer.addEventListener('click', () => {
        
        const imageUrl = projectContainer.getAttribute('data-image');
  
        
        document.getElementById('project-image').src = imageUrl;
      });
    });

// carousel

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 10,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });