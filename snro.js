document.addEventListener('DOMContentLoaded', function() {
  var MenuItems = document.getElementById("MenuItems");
  var menuIcon = document.querySelector(".menu-icon");
  var col2 = document.querySelector(".col-2");
  var meniu = document.querySelector(".meniu");

  

  const mobileMenu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.overlay');
  const closeMenu = document.querySelector('.close-menu');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    navbar.classList.add('hidden');
    // Move search container further up and out of view
    document.querySelector('.mobile-search-container').style.transform = 'translateY(-500%)';
  });

  function closeMenuHandler() {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    navbar.classList.remove('hidden');
    // Return search container to original position
    document.querySelector('.mobile-search-container').style.transform = 'translateY(0)';
  }

  closeMenu.addEventListener('click', closeMenuHandler);
  overlay.addEventListener('click', closeMenuHandler);

  const despreText = document.querySelector('.despre-text');
    
  function checkScroll() {
    const rect = despreText.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.8;

    if (rect.top < triggerPoint) {
      despreText.classList.add('visible');
    } else {
      despreText.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on initial load
});

document.addEventListener('DOMContentLoaded', function() {
  var MenuItems = document.getElementById("MenuItems");
  var col2 = document.querySelector(".col-2");
  var meniu = document.querySelector(".meniu");

  MenuItems.style.maxHeight = "0px";

  meniu.addEventListener('click', function() {
    if (MenuItems.style.maxHeight === "0px") {
      MenuItems.style.maxHeight = "280px"; 
      col2.style.paddingTop = "180px";
      col2.style.transition = "1s";
      
    } else {
      MenuItems.style.maxHeight = "0px";
      col2.style.padding = "0px";
      
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Existing mobile menu code...

    function checkScrollAnimation() {
        const elements = document.querySelectorAll(
            '.col-4, .col-imag, .col-produs, .title, ' +
            '.filter-button-container, .intrebare, .raspu, ' +
            '.despre-text h2, .despre-text p, ' +
            '.animate-on-scroll, .animate-from-left, .animate-from-right'
        );

        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const triggerPoint = window.innerHeight * 0.8;

            if (rect.top < triggerPoint) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScrollAnimation);
    checkScrollAnimation(); // Check on initial load
});

document.addEventListener('DOMContentLoaded', function() {
    const searchContainer = document.querySelector('.search-container');
    const searchToggle = document.querySelector('.search-toggle');
    const searchInput = document.querySelector('.search-container input');
    const navbar = document.querySelector('.navbar');
    const searchClose = document.createElement('i');
    
    // Add close button
    searchClose.className = 'fas fa-times search-close';
    searchContainer.appendChild(searchClose);

    searchToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        searchContainer.classList.add('active');
        navbar.classList.add('search-active');
        searchInput.focus();
    });

    searchClose.addEventListener('click', function(e) {
        e.stopPropagation();
        searchContainer.classList.remove('active');
        navbar.classList.remove('search-active');
        searchInput.value = '';
    });

    searchInput.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    document.addEventListener('click', function() {
        searchContainer.classList.remove('active');
        navbar.classList.remove('search-active');
    });

    // Close search on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchContainer.classList.remove('active');
            navbar.classList.remove('search-active');
            searchInput.value = '';
        }
    });
});














