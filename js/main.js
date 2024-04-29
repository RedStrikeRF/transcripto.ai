document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('myForm');
  const loader = document.getElementById('loader');
  const submitButton = document.getElementById('submitButton');
  const answer = document.getElementById('answer');
  const answer_result = document.querySelector('.answer_result');
  const inputField = document.querySelector('#myFormInput');
  const formAnwser = document.getElementById('form-url');
  
  
  inputField.addEventListener('input', function() {
    if (inputField.value.trim() !== '') {
      submitButton.classList.add('activeURL');
    } else {
      submitButton.classList.remove('activeURL');
    }
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    formAnwser.value = inputField.value; // Предотвращаем отправку формы по умолчанию
    loader.style.display = 'block';
    form.style.display = 'none'; // Показываем loader
    submitButton.disabled = true; // Отключаем кнопку отправки, чтобы избежать повторных отправок
    // answer_result.textContent = ...;Здесь должен быть ответ от вашей функции, оно переместит его в белое поле под формой
    // Здесь вы можете выполнить ваш запрос куда-то
    // Например, использовать fetch или отправку XMLHttpRequest
    
    // Пример с использованием setTimeout для имитации загрузки
    setTimeout(function() {
      // После завершения загрузки скрываем loader и включаем кнопку
      loader.style.display = 'none';
      submitButton.disabled = false;
      answer.style.display = 'flex';
      // Добавьте здесь обработку успешного ответа или ошибки
    }, 3000); // Время имитации загрузки в миллисекундах
  });

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

  const navLinks = document.querySelectorAll('.main-functions-nav__link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const yOffset = -80; // adjust this value as needed to offset for sticky header
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    });
  });
});
