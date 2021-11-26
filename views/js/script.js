searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

// login-form
let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

// register-form
let registerForm = document.querySelector('.register-form-container');

document.querySelector('#register').onclick = () =>{
  loginForm.classList.remove('active');
  registerForm.classList.toggle('active');
}

document.querySelector('#close-register-btn').onclick = () =>{
  registerForm.classList.remove('active');
  loginForm.classList.toggle('active');
}

// Validation register-form
function Validator(options) {

  var selectorRules = {};

  // Hàm thực hiện validate
  function validate(inputElement, rule, errorElement) {
    var errorMessage;
    var rules = selectorRules[rule.selector];

    for (let i = 0; i < rules.length; i++) {
      errorMessage = rules[i] (inputElement.value)
      if (errorMessage) break;
    }

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add('invalid');
    } else {
      errorElement.innerText = '';
      inputElement.parentElement.classList.remove('invalid');
    }

    return !errorMessage;
  }

  // lấy element của form cần validate
  var formElement = document.querySelector(options.form);

  if (formElement) {
    // Khi submit form
    formElement.onsubmit = function (e) {
      e.preventDefault();

      var isFormValid = true;

      options.rules.forEach( function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var isValid = validate(inputElement, rule, errorElement);
        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        if (typeof options.onSubmit === 'function') {

          var enableInputs = formElement.querySelectorAll('[name]');

          var formValues = Array.from(enableInputs).reduce(function (values, input) {
            values[input.name] = input.value;
            return values;
          }, {});

          options.onSubmit(formValues)
        } else {
          formElement.submit();
        }
      }
    }



    options.rules.forEach( function (rule) {
      // Lưu lại các rules cho mỗi input
      
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }

      var inputElement = formElement.querySelector(rule.selector);
      var errorElement = inputElement.parentElement.querySelector(options.errorSelector);

      if (inputElement) {
        // Xử lý trường hợp blur ngoài thẻ input
        inputElement.onblur = function () {
          validate(inputElement, rule, errorElement);
        }

        // Xử lý mỗi khi người dùng nhập
        inputElement.oninput = function () {
          errorElement.innerText = '';
          inputElement.parentElement.classList.remove('invalid');
        }
      }

    });
  
  }
}

Validator.isRequired = function(selector, message) {
  return {
    selector: selector,
    test: function(value) {
      return value.trim() ? undefined : message || 'Vui lòng nhập trường này!'
    }
  };
}

Validator.isPassword = function(selector, message) {
  return {
    selector: selector,
    test: function(value) {
      return value.trim() ? undefined : message || 'Vui lòng nhập trường này!'
    }
  };
}

Validator.isEmail = function(selector, message) {
  return {
    selector: selector,
    test: function(value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : message || 'Vui lòng nhập trường này!'
    }
  };
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 3000);
}

var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});