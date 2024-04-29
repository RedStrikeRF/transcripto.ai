document.addEventListener("DOMContentLoaded", function() {
  const dropdownToggle = document.querySelector('.header-dropdown__toggle');
  const dropdownMenu = document.querySelector('.header-dropdown-menu');
  const dropDownText = document.querySelector('#dropdown-text');
  const headerArrow = document.querySelector('.header-dropdown__toggle__arrow');

  dropdownToggle.addEventListener('click', function() {
    dropdownMenu.classList.toggle('open');
    headerArrow.classList.toggle('arrow_rotate');
  });

  dropdownMenu.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('header-dropdown__item')) {
      dropDownText.textContent = `${target.textContent}`;
      dropdownMenu.classList.remove('open');
      headerArrow.classList.remove('arrow_rotate');
    }
  });

  document.addEventListener('click', function(event) {
    const target = event.target;
    if (!dropdownToggle.contains(target) && !dropdownMenu.contains(target)) {
      dropdownMenu.classList.remove('open');
      headerArrow.classList.remove('arrow_rotate');
    }
  });
});
