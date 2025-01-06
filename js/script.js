
function scrollToPortfolio() {
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
  }

  let currentSlide = [0]; // array untuk setiap slider

  function showSlide(sliderId, index) {
      const sliderContainer = document.getElementById(`slider${sliderId}`);
      const slides = sliderContainer.getElementsByClassName('slider-image');
  
      for (let i = 0; i < slides.length; i++) {
          slides[i].classList.remove('active');
      }
  
      if (index >= slides.length) {
          currentSlide[sliderId - 1] = 0;
      } else if (index < 0) {
          currentSlide[sliderId - 1] = slides.length - 1;
      } else {
          currentSlide[sliderId - 1] = index;
      }
  
      slides[currentSlide[sliderId - 1]].classList.add('active');
  }
  
  function nextSlide(sliderId) {
      showSlide(sliderId, currentSlide[sliderId - 1] + 1);
  }
  
  function prevSlide(sliderId) {
      showSlide(sliderId, currentSlide[sliderId - 1] - 1);
  }

  
  function scrollToProfile() {
        document.getElementById("profile").scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToContact() {
        document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToEducation() {
        document.getElementById("education").scrollIntoView({ behavior: 'smooth' });
  }


  
  // Initial display for all sliders
  document.addEventListener('DOMContentLoaded', function () {
      showSlide(1, 0); // slider 1 initial load
  });

// Initial display for slider 2
document.addEventListener('DOMContentLoaded', function () {
    showSlide(2, 0); // slider 2 initial load

    
});

// Initial display for slider 3
document.addEventListener('DOMContentLoaded', function () {
    showSlide(3, 0)
});

// Initial display for slider 4
document.addEventListener('DOMContentLoaded', function () {
    showSlide(4, 0)
});

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission (replace this with actual email sending logic if needed)
    document.getElementById('form-status').textContent = `Thank you, ${name}! Your message has been sent.`;

    // Clear the form
    document.getElementById('contact-form').reset();
});

  