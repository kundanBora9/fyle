const contactUsButtons = document.querySelectorAll('button.btn.btn-danger.text-uppercase');

contactUsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const contactUsModal = new bootstrap.Modal(document.getElementById('contactUsModal'));
    contactUsModal.show();
  });
});

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

    // Select all project-container elements
    const projectContainers = document.querySelectorAll('.project-container');

    // Add an event listener to each project-container
    projectContainers.forEach((projectContainer) => {
      projectContainer.addEventListener('click', () => {
        // Get the image URL from the data-image attribute
        const imageUrl = projectContainer.getAttribute('data-image');
  
        // Update the src attribute of the img element
        document.getElementById('project-image').src = imageUrl;
      });
    });


    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 10,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });