"use strict";
(function () {
  // Global variables
  var userAgent = navigator.userAgent.toLowerCase(),
    initialDate = new Date(),
    $document = $(document),
    $window = $(window),
    $html = $("html"),
    $body = $("body"),
    isDesktop = $html.hasClass("desktop"),
    isIE =
      userAgent.indexOf("msie") !== -1
        ? parseInt(userAgent.split("msie")[1], 10)
        : userAgent.indexOf("trident") !== -1
        ? 11
        : userAgent.indexOf("edge") !== -1
        ? 12
        : false,
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ),
    windowReady = false,
    isNoviBuilder = false,
    livedemo = false,
    plugins = {
      bootstrapTooltip: $("[data-toggle='tooltip']"),
      bootstrapModalDialog: $(".modal"),
      bootstrapTabs: $(".tabs-custom"),
      customToggle: $("[data-custom-toggle]"),
      counter: $(".counter"),
      circleProgress: $(".progress-bar-circle"),
      countDown: $("[data-circle-countdown]"),
      captcha: $(".recaptcha"),
      campaignMonitor: $(".campaign-mailform"),
      copyrightYear: $(".copyright-year"),
      checkbox: $("input[type='checkbox']"),
      isotope: $(".isotope-wrap"),
      lightGallery: $("[data-lightgallery='group']"),
      lightGalleryItem: $("[data-lightgallery='item']"),
      lightDynamicGalleryItem: $("[data-lightgallery='dynamic']"),
      materialParallax: $(".parallax-container"),
      mailchimp: $(".mailchimp-mailform"),
      owl: $(".owl-carousel"),
      popover: $('[data-toggle="popover"]'),
      progressLinear: $(".progress-linear"),
      rdNavbar: $(".rd-navbar"),
      rdMailForm: $(".rd-mailform"),
      rdInputLabel: $(".form-label"),
      regula: $("[data-constraints]"),
      radio: $("input[type='radio']"),
      swiper: document.querySelectorAll(".swiper-container"),
      search: $(".rd-search"),
      searchResults: $(".rd-search-results"),
      statefulButton: $(".btn-stateful"),
      viewAnimate: $(".view-animate"),
      wow: $(".wow"),
      maps: $(".google-map-container"),
      rdRange: $(".rd-range"),
      selectFilter: $("select"),
      slick: $(".slick-slider"),
      stepper: $("input[type='number']"),
      radioPanel: $(".radio-panel .radio-inline"),
      multitoggle: document.querySelectorAll("[data-multitoggle]"),
    };

  /**
   * @desc Check the element was been scrolled into the view
   * @param {object} elem - jQuery object
   * @return {boolean}
   */
  function isScrolledIntoView(elem) {
    if (isNoviBuilder) return true;
    return (
      elem.offset().top + elem.outerHeight() >= $window.scrollTop() &&
      elem.offset().top <= $window.scrollTop() + $window.height()
    );
  }

  /**
   * @desc Calls a function when element has been scrolled into the view
   * @param {object} element - jQuery object
   * @param {function} func - init function
   */
  function lazyInit(element, func) {
    var scrollHandler = function () {
      if (!element.hasClass("lazy-loaded") && isScrolledIntoView(element)) {
        func.call();
        element.addClass("lazy-loaded");
      }
    };

    scrollHandler();
    $window.on("scroll", scrollHandler);
  }

  // Initialize scripts that require a loaded page
  $window.on("load", function () {
    let verticalScrollSlider = () => {
      let owlItem = document.querySelectorAll(".owl-item");

      owlItem.forEach((item) => {
        item.addEventListener("touchstart", () => {
          document.querySelector("body").classList.add("body_lock");
        });

        item.addEventListener("touchend", () => {
          document.querySelector("body").classList.remove("body_lock");
        });
      });
    };

    verticalScrollSlider();

    let stagesHover = () => {
      let stageNumber = document.querySelectorAll(".stage-number");
      let stageDot = document.querySelectorAll(".stage-dot");
      let stageDescr = document.querySelectorAll(".stage-descr");
      let stageLine = document.querySelector(".path-hover");

      for (let i = 0; i < stageNumber.length; i++) {
        // Добавление цвета при наведении на цифры
        stageNumber[i].addEventListener("mouseover", () => {
          switch (i) {
            case 0:
              stageLine.classList.add("path-hover_first");
              stageNumber[i].classList.add("stage-number_active");
              stageDot[i].classList.add("stage-dot_active");
              break;
            case 1:
              for (let i = 0; i <= 1; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageLine.classList.add("path-hover_second");
              break;

            case 2:
              for (let i = 0; i <= 2; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageLine.classList.add("path-hover_third");
              break;

            case 3:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageLine.classList.add("path-hover_fourth");
              break;

            case 4:
              for (let i = 0; i <= 7; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageLine.classList.add("path-hover_eighth");
              break;

            case 5:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageNumber[7].classList.add("stage-number_active");
              stageDot[7].classList.add("stage-dot_active");
              stageNumber[6].classList.add("stage-number_active");
              stageDot[6].classList.add("stage-dot_active");
              stageNumber[5].classList.add("stage-number_active");
              stageDot[5].classList.add("stage-dot_active");
              stageLine.classList.add("path-hover_seventh");
              break;

            case 6:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageNumber[7].classList.add("stage-number_active");
              stageDot[7].classList.add("stage-dot_active");
              stageNumber[6].classList.add("stage-number_active");
              stageDot[6].classList.add("stage-dot_active");
              stageLine.classList.add("path-hover_sixth");
              break;

            case 7:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageNumber[7].classList.add("stage-number_active");
              stageDot[7].classList.add("stage-dot_active");
              stageLine.classList.add("path-hover_fifth");
              break;
          }
        });
        // Удаление цвета при покидании мыши с цифры
        stageNumber[i].addEventListener("mouseout", () => {
          switch (i) {
            case 0:
              stageLine.classList.remove("path-hover_first");
              stageNumber[i].classList.remove("stage-number_active");
              stageDot[i].classList.remove("stage-dot_active");
              break;
            case 1:
              for (let i = 0; i <= 1; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageLine.classList.remove("path-hover_second");
              break;

            case 2:
              for (let i = 0; i <= 2; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageLine.classList.remove("path-hover_third");
              break;

            case 3:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageLine.classList.remove("path-hover_fourth");
              break;

            case 4:
              for (let i = 0; i <= 7; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageLine.classList.remove("path-hover_eighth");
              break;

            case 5:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageNumber[7].classList.remove("stage-number_active");
              stageDot[7].classList.remove("stage-dot_active");
              stageNumber[6].classList.remove("stage-number_active");
              stageDot[6].classList.remove("stage-dot_active");
              stageNumber[5].classList.remove("stage-number_active");
              stageDot[5].classList.remove("stage-dot_active");
              stageLine.classList.remove("path-hover_seventh");
              break;

            case 6:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageNumber[7].classList.remove("stage-number_active");
              stageDot[7].classList.remove("stage-dot_active");
              stageNumber[6].classList.remove("stage-number_active");
              stageDot[6].classList.remove("stage-dot_active");
              stageLine.classList.remove("path-hover_sixth");
              break;

            case 7:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageNumber[7].classList.remove("stage-number_active");
              stageDot[7].classList.remove("stage-dot_active");
              stageLine.classList.remove("path-hover_fifth");
              break;
          }
        });

        // Добавление цвета при наведении на точки
        stageDot[i].addEventListener("mouseover", () => {
          switch (i) {
            case 0:
              stageLine.classList.add("path-hover_first");
              stageNumber[i].classList.add("stage-number_active");
              stageDot[i].classList.add("stage-dot_active");
              break;
            case 1:
              for (let i = 0; i <= 1; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageLine.classList.add("path-hover_second");
              break;

            case 2:
              for (let i = 0; i <= 2; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageLine.classList.add("path-hover_third");
              break;

            case 3:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageLine.classList.add("path-hover_fourth");
              break;

            case 4:
              for (let i = 0; i <= 7; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageLine.classList.add("path-hover_eighth");
              break;

            case 5:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageNumber[7].classList.add("stage-number_active");
              stageDot[7].classList.add("stage-dot_active");
              stageNumber[6].classList.add("stage-number_active");
              stageDot[6].classList.add("stage-dot_active");
              stageNumber[5].classList.add("stage-number_active");
              stageDot[5].classList.add("stage-dot_active");
              stageLine.classList.add("path-hover_seventh");
              break;

            case 6:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageNumber[7].classList.add("stage-number_active");
              stageDot[7].classList.add("stage-dot_active");
              stageNumber[6].classList.add("stage-number_active");
              stageDot[6].classList.add("stage-dot_active");
              stageLine.classList.add("path-hover_sixth");
              break;

            case 7:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageNumber[7].classList.add("stage-number_active");
              stageDot[7].classList.add("stage-dot_active");
              stageLine.classList.add("path-hover_fifth");
              break;
          }
        });
        // Удаление цвета при покидании мыши с точки
        stageDot[i].addEventListener("mouseout", () => {
          switch (i) {
            case 0:
              stageLine.classList.remove("path-hover_first");
              stageNumber[i].classList.remove("stage-number_active");
              stageDot[i].classList.remove("stage-dot_active");
              break;
            case 1:
              for (let i = 0; i <= 1; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageLine.classList.remove("path-hover_second");
              break;

            case 2:
              for (let i = 0; i <= 2; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageLine.classList.remove("path-hover_third");
              break;

            case 3:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageLine.classList.remove("path-hover_fourth");
              break;

            case 4:
              for (let i = 0; i <= 7; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageLine.classList.remove("path-hover_eighth");
              break;

            case 5:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageNumber[7].classList.remove("stage-number_active");
              stageDot[7].classList.remove("stage-dot_active");
              stageNumber[6].classList.remove("stage-number_active");
              stageDot[6].classList.remove("stage-dot_active");
              stageNumber[5].classList.remove("stage-number_active");
              stageDot[5].classList.remove("stage-dot_active");
              stageLine.classList.remove("path-hover_seventh");
              break;

            case 6:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageNumber[7].classList.remove("stage-number_active");
              stageDot[7].classList.remove("stage-dot_active");
              stageNumber[6].classList.remove("stage-number_active");
              stageDot[6].classList.remove("stage-dot_active");
              stageLine.classList.remove("path-hover_sixth");
              break;

            case 7:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageNumber[7].classList.remove("stage-number_active");
              stageDot[7].classList.remove("stage-dot_active");
              stageLine.classList.remove("path-hover_fifth");
              break;
          }
        });

        // Добавление цвета при наведении на описание
        stageDescr[i].addEventListener("mouseover", () => {
          switch (i) {
            case 0:
              stageLine.classList.add("path-hover_first");
              stageNumber[i].classList.add("stage-number_active");
              stageDot[i].classList.add("stage-dot_active");
              break;
            case 1:
              for (let i = 0; i <= 1; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageLine.classList.add("path-hover_second");
              break;

            case 2:
              for (let i = 0; i <= 2; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageLine.classList.add("path-hover_third");
              break;

            case 3:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageLine.classList.add("path-hover_fourth");
              break;

            case 4:
              for (let i = 0; i <= 7; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageLine.classList.add("path-hover_eighth");
              break;

            case 5:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageNumber[7].classList.add("stage-number_active");
              stageDot[7].classList.add("stage-dot_active");
              stageNumber[6].classList.add("stage-number_active");
              stageDot[6].classList.add("stage-dot_active");
              stageNumber[5].classList.add("stage-number_active");
              stageDot[5].classList.add("stage-dot_active");
              stageLine.classList.add("path-hover_seventh");
              break;

            case 6:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageNumber[7].classList.add("stage-number_active");
              stageDot[7].classList.add("stage-dot_active");
              stageNumber[6].classList.add("stage-number_active");
              stageDot[6].classList.add("stage-dot_active");
              stageLine.classList.add("path-hover_sixth");
              break;

            case 7:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.add("stage-number_active");
                stageDot[i].classList.add("stage-dot_active");
              }
              stageNumber[7].classList.add("stage-number_active");
              stageDot[7].classList.add("stage-dot_active");
              stageLine.classList.add("path-hover_fifth");
              break;
          }
        });
        // Удаление цвета при покидании мыши с описания
        stageDescr[i].addEventListener("mouseout", () => {
          switch (i) {
            case 0:
              stageLine.classList.remove("path-hover_first");
              stageNumber[i].classList.remove("stage-number_active");
              stageDot[i].classList.remove("stage-dot_active");
              break;
            case 1:
              for (let i = 0; i <= 1; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageLine.classList.remove("path-hover_second");
              break;

            case 2:
              for (let i = 0; i <= 2; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageLine.classList.remove("path-hover_third");
              break;

            case 3:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageLine.classList.remove("path-hover_fourth");
              break;

            case 4:
              for (let i = 0; i <= 7; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageLine.classList.remove("path-hover_eighth");
              break;

            case 5:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageNumber[7].classList.remove("stage-number_active");
              stageDot[7].classList.remove("stage-dot_active");
              stageNumber[6].classList.remove("stage-number_active");
              stageDot[6].classList.remove("stage-dot_active");
              stageNumber[5].classList.remove("stage-number_active");
              stageDot[5].classList.remove("stage-dot_active");
              stageLine.classList.remove("path-hover_seventh");
              break;

            case 6:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageNumber[7].classList.remove("stage-number_active");
              stageDot[7].classList.remove("stage-dot_active");
              stageNumber[6].classList.remove("stage-number_active");
              stageDot[6].classList.remove("stage-dot_active");
              stageLine.classList.remove("path-hover_sixth");
              break;

            case 7:
              for (let i = 0; i <= 3; i++) {
                stageNumber[i].classList.remove("stage-number_active");
                stageDot[i].classList.remove("stage-dot_active");
              }
              stageNumber[7].classList.remove("stage-number_active");
              stageDot[7].classList.remove("stage-dot_active");
              stageLine.classList.remove("path-hover_fifth");
              break;
          }
        });
      }
    };

    stagesHover();

    function closeModalContact() {
      if (
        document.querySelector(".overlay-contact") !== null &&
        document.querySelector(".popup-contact") !== null
      ) {
        document.querySelector("body").classList.remove("body_overflow");
        document
          .querySelector(".overlay-contact")
          .classList.remove("overlay_active");
        document
          .querySelector(".popup-contact")
          .classList.remove("popup_active");
      }
    }

    function closeModalRequest() {
      if (
        document.querySelector(".overlay-request") !== null &&
        document.querySelector(".popup-request") !== null
      ) {
        document.querySelector("body").classList.remove("body_overflow");
        document
          .querySelector(".overlay-request")
          .classList.remove("overlay_active");
        document
          .querySelector(".popup-request")
          .classList.remove("popup_active");
      }
    }

    function openModalContact() {
      document.querySelector("body").classList.toggle("body_overflow");
      document
        .querySelector(".overlay-contact")
        .classList.toggle("overlay_active");
      document.querySelector(".popup-contact").classList.toggle("popup_active");
    }

    function openModalRequest() {
      document.querySelector("body").classList.toggle("body_overflow");
      document
        .querySelector(".overlay-request")
        .classList.toggle("overlay_active");
      document.querySelector(".popup-request").classList.toggle("popup_active");
    }

    if (document.querySelector(".button-contact") !== null) {
      let buttonsContact = document.querySelectorAll(".button-contact");

      for (let i = 0; i < buttonsContact.length; i++) {
        buttonsContact[i].onclick = () => openModalContact();
      }
    }

    if (document.querySelector(".button-request") !== null) {
      let buttonsRequest = document.querySelectorAll(".button-request");

      for (let i = 0; i < buttonsRequest.length; i++) {
        buttonsRequest[i].onclick = () => openModalRequest();
      }
    }

    // Закрытие модального окна по крестику
    if (document.querySelector(".popup-close-contact") !== null) {
      document.querySelector(".popup-close-contact").onclick = () =>
        closeModalContact();
    }

    if (document.querySelector(".popup-close-request") !== null) {
      document.querySelector(".popup-close-request").onclick = () =>
        closeModalRequest();
    }

    // Закрытие модального окна по клику вне формы
    if (document.querySelector(".overlay-contact") !== null) {
      document.querySelector(".overlay-contact").onclick = () =>
        closeModalContact();
    }

    if (document.querySelector(".overlay-request") !== null) {
      document.querySelector(".overlay-request").onclick = () =>
        closeModalRequest();
    }

    // Закрытие модального окна по клавише Esc
    window.onkeydown = function (event) {
      if (event.keyCode === 27) closeModalContact();
      if (event.keyCode === 27) closeModalRequest();
    };

    // Open and close burger menu
    // открытие и закрытие бургер-меню по нажатию на иконку
    if (document.querySelector(".burger") !== null) {
      document.querySelector(".burger").onclick = function () {
        this.classList.toggle("burger_active");
        document.querySelector(".nav-wrap").classList.toggle("nav-wrap_active");
        document
          .querySelector(".header-overlay")
          .classList.toggle("header-overlay_active");
        // document.querySelector('body').classList.toggle('body_lock');
        document.querySelector("body").classList.toggle("body_lock");
      };
    }

    // закрытие бургер-меню по клику вне меню
    if (document.querySelector(".header-overlay") !== null) {
      document.querySelector(".header-overlay").onclick = function () {
        document.querySelector(".burger").classList.toggle("burger_active");
        document.querySelector(".nav-wrap").classList.toggle("nav-wrap_active");
        document
          .querySelector(".header-overlay")
          .classList.toggle("header-overlay_active");
        // document.querySelector('body').classList.toggle('body_lock');
        document.querySelector("body").classList.toggle("body_lock");
      };
    }

    // закрытие бургер-меню по клику на пункт меню
    if (document.querySelectorAll(".navbar-item") !== null) {
      let navItems = document.querySelectorAll(".navbar-item");

      for (let i = 0; i < navItems.length; i++) {
        navItems[i].onclick = function () {
          document.querySelector(".burger").classList.toggle("burger_active");
          document
            .querySelector(".nav-wrap")
            .classList.toggle("nav-wrap_active");
          document
            .querySelector(".header-overlay")
            .classList.toggle("header-overlay_active");
          // document.querySelector('body').classList.toggle('body_lock');
          document.querySelector("body").classList.toggle("body_lock");
        };
      }
    }

    if (document.querySelectorAll(".navbar-dropdown__item") !== null) {
      let dropdownItems = document.querySelectorAll(".navbar-dropdown__item");
      for (let i = 0; i < dropdownItems.length; i++) {
        navItems[i].onclick = function () {
          document.querySelector(".burger").classList.toggle("burger_active");
          document
            .querySelector(".navbar-wrap")
            .classList.toggle("navbar-wrap_active");
          document
            .querySelector(".header-overlay")
            .classList.toggle("header-overlay_active");
        };
      }
    }

    if (document.querySelector(".nav-item.nav-item_dropdown") !== null) {
      document.querySelector(
        ".nav-item.nav-item_dropdown"
      ).onclick = function () {
        document
          .querySelector(".nav-dropdown")
          .classList.toggle("nav-dropdown_active");
        document
          .querySelector(".nav-item_dropdown")
          .classList.toggle("nav-item_dropdown_opened");
      };
    }

    // Page loader & Page transition
    if (plugins.preloader.length && !isNoviBuilder) {
      pageTransition({
        target: document.querySelector(".page"),
        delay: 0,
        duration: 500,
        classIn: "fadeIn",
        classOut: "fadeOut",
        classActive: "animated",
        conditions: function (event, link) {
          return (
            !/(\#|callto:|tel:|mailto:|:\/\/)/.test(link) &&
            !event.currentTarget.hasAttribute("data-lightgallery")
          );
        },
        onTransitionStart: function (options) {
          setTimeout(function () {
            plugins.preloader.removeClass("loaded");
          }, options.duration * 0.75);
        },
        onReady: function () {
          plugins.preloader.addClass("loaded");
          windowReady = true;
        },
      });
    }

    // jQuery Count To
    if (plugins.counter.length) {
      for (var i = 0; i < plugins.counter.length; i++) {
        var counter = $(plugins.counter[i]),
          initCount = function () {
            var counter = $(this);
            if (
              !counter.hasClass("animated-first") &&
              isScrolledIntoView(counter)
            ) {
              counter.countTo({
                refreshInterval: 40,
                speed: counter.attr("data-speed") || 1000,
                from: 0,
                to: parseInt(counter.text(), 10),
              });
              counter.addClass("animated-first");
            }
          };

        $.proxy(initCount, counter)();
        $window.on("scroll", $.proxy(initCount, counter));
      }
    }
  });

  // Initialize scripts that require a finished document
  $(function () {
    isNoviBuilder = window.xMode;

    /**
     * @desc Toggle swiper videos on active slides
     * @param {object} swiper - swiper slider
     */
    function toggleSwiperInnerVideos(swiper) {
      var prevSlide = $(swiper.slides[swiper.previousIndex]),
        nextSlide = $(swiper.slides[swiper.activeIndex]),
        videos,
        videoItems = prevSlide.find("video");

      for (var i = 0; i < videoItems.length; i++) {
        videoItems[i].pause();
      }

      videos = nextSlide.find("video");
      if (videos.length) {
        videos.get(0).play();
      }
    }

    /**
     * @desc Toggle swiper animations on active slides
     * @param {object} swiper - swiper slider
     */
    function toggleSwiperCaptionAnimation(swiper) {
      var prevSlide = $(swiper.container).find("[data-caption-animate]"),
        nextSlide = $(swiper.slides[swiper.activeIndex]).find(
          "[data-caption-animate]"
        ),
        delay,
        duration,
        nextSlideItem,
        prevSlideItem;

      for (var i = 0; i < prevSlide.length; i++) {
        prevSlideItem = $(prevSlide[i]);

        prevSlideItem
          .removeClass("animated")
          .removeClass(prevSlideItem.attr("data-caption-animate"))
          .addClass("not-animated");
      }

      var tempFunction = function (nextSlideItem, duration) {
        return function () {
          nextSlideItem
            .removeClass("not-animated")
            .addClass(nextSlideItem.attr("data-caption-animate"))
            .addClass("animated");
          if (duration) {
            nextSlideItem.css("animation-duration", duration + "ms");
          }
        };
      };

      for (var i = 0; i < nextSlide.length; i++) {
        nextSlideItem = $(nextSlide[i]);
        delay = nextSlideItem.attr("data-caption-delay");
        duration = nextSlideItem.attr("data-caption-duration");
        if (!isNoviBuilder) {
          if (delay) {
            setTimeout(
              tempFunction(nextSlideItem, duration),
              parseInt(delay, 10)
            );
          } else {
            tempFunction(nextSlideItem, duration);
          }
        } else {
          nextSlideItem.removeClass("not-animated");
        }
      }
    }

    /**
     * @desc Initialize owl carousel plugin
     * @param {object} c - carousel jQuery object
     */
    function initOwlCarousel(c) {
      var aliaces = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"],
        values = [0, 576, 768, 992, 1200, 1600],
        responsive = {};

      for (var j = 0; j < values.length; j++) {
        responsive[values[j]] = {};
        for (var k = j; k >= -1; k--) {
          if (
            !responsive[values[j]]["items"] &&
            c.attr("data" + aliaces[k] + "items")
          ) {
            responsive[values[j]]["items"] =
              k < 0 ? 1 : parseInt(c.attr("data" + aliaces[k] + "items"), 10);
          }
          if (
            !responsive[values[j]]["stagePadding"] &&
            responsive[values[j]]["stagePadding"] !== 0 &&
            c.attr("data" + aliaces[k] + "stage-padding")
          ) {
            responsive[values[j]]["stagePadding"] =
              k < 0
                ? 0
                : parseInt(c.attr("data" + aliaces[k] + "stage-padding"), 10);
          }
          if (
            !responsive[values[j]]["margin"] &&
            responsive[values[j]]["margin"] !== 0 &&
            c.attr("data" + aliaces[k] + "margin")
          ) {
            responsive[values[j]]["margin"] =
              k < 0 ? 30 : parseInt(c.attr("data" + aliaces[k] + "margin"), 10);
          }
        }
      }

      // Enable custom pagination
      if (c.attr("data-dots-custom")) {
        c.on("initialized.owl.carousel", function (event) {
          var carousel = $(event.currentTarget),
            customPag = $(carousel.attr("data-dots-custom")),
            active = 0;

          if (carousel.attr("data-active")) {
            active = parseInt(carousel.attr("data-active"), 10);
          }

          carousel.trigger("to.owl.carousel", [active, 300, true]);
          customPag.find("[data-owl-item='" + active + "']").addClass("active");

          customPag.find("[data-owl-item]").on("click", function (e) {
            e.preventDefault();
            carousel.trigger("to.owl.carousel", [
              parseInt(this.getAttribute("data-owl-item"), 10),
              300,
              true,
            ]);
          });

          carousel.on("translate.owl.carousel", function (event) {
            customPag.find(".active").removeClass("active");
            customPag
              .find("[data-owl-item='" + event.item.index + "']")
              .addClass("active");
          });
        });
      }

      c.on("initialized.owl.carousel", function () {
        initLightGalleryItem(
          c.find('[data-lightgallery="item"]'),
          "lightGallery-in-carousel"
        );
      });

      c.owlCarousel({
        autoplay: isNoviBuilder ? false : c.attr("data-autoplay") === "true",
        loop: isNoviBuilder ? false : c.attr("data-loop") !== "false",
        items: 1,
        center: c.attr("data-center") === "true",
        dotsContainer: c.attr("data-pagination-class") || false,
        navContainer: c.attr("data-navigation-class") || false,
        mouseDrag: isNoviBuilder
          ? false
          : c.attr("data-mouse-drag") !== "false",
        nav: c.attr("data-nav") === "true",
        dots: c.attr("data-dots") === "true",
        dotsEach: c.attr("data-dots-each")
          ? parseInt(c.attr("data-dots-each"), 10)
          : false,
        animateIn: c.attr("data-animation-in")
          ? c.attr("data-animation-in")
          : false,
        animateOut: c.attr("data-animation-out")
          ? c.attr("data-animation-out")
          : false,
        responsive: responsive,
        smartSpeed: c.attr("data-smart-speed")
          ? c.attr("data-smart-speed")
          : 250,
        navText: c.attr("data-nav-text")
          ? $.parseJSON(c.attr("data-nav-text"))
          : [],
        navClass: c.attr("data-nav-class")
          ? $.parseJSON(c.attr("data-nav-class"))
          : ["owl-prev", "owl-next"],
      });
    }

    /**
     * @desc Initialize the gallery with set of images
     * @param {object} itemsToInit - jQuery object
     * @param {string} addClass - additional gallery class
     */
    function initLightGallery(itemsToInit, addClass) {
      if (!isNoviBuilder) {
        $(itemsToInit).lightGallery({
          thumbnail: $(itemsToInit).attr("data-lg-thumbnail") !== "false",
          selector: "[data-lightgallery='item']",
          autoplay: $(itemsToInit).attr("data-lg-autoplay") === "true",
          pause:
            parseInt($(itemsToInit).attr("data-lg-autoplay-delay")) || 5000,
          addClass: addClass,
          mode: $(itemsToInit).attr("data-lg-animation") || "lg-slide",
          loop: $(itemsToInit).attr("data-lg-loop") !== "false",
        });
      }
    }

    /**
     * @desc Initialize the gallery with dynamic addition of images
     * @param {object} itemsToInit - jQuery object
     * @param {string} addClass - additional gallery class
     */
    function initDynamicLightGallery(itemsToInit, addClass) {
      if (!isNoviBuilder) {
        $(itemsToInit).on("click", function () {
          $(itemsToInit).lightGallery({
            thumbnail: $(itemsToInit).attr("data-lg-thumbnail") !== "false",
            selector: "[data-lightgallery='item']",
            autoplay: $(itemsToInit).attr("data-lg-autoplay") === "true",
            pause:
              parseInt($(itemsToInit).attr("data-lg-autoplay-delay")) || 5000,
            addClass: addClass,
            mode: $(itemsToInit).attr("data-lg-animation") || "lg-slide",
            loop: $(itemsToInit).attr("data-lg-loop") !== "false",
            dynamic: true,
            dynamicEl:
              JSON.parse($(itemsToInit).attr("data-lg-dynamic-elements")) || [],
          });
        });
      }
    }

    /**
     * @desc Initialize the gallery with one image
     * @param {object} itemToInit - jQuery object
     * @param {string} addClass - additional gallery class
     */
    function initLightGalleryItem(itemToInit, addClass) {
      if (!isNoviBuilder) {
        $(itemToInit).lightGallery({
          selector: "this",
          addClass: addClass,
          counter: false,
          youtubePlayerParams: {
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
            controls: 0,
          },
          vimeoPlayerParams: {
            byline: 0,
            portrait: 0,
          },
        });
      }
    }

    /**
     * @desc Create live search results
     * @param {object} options
     */
    function liveSearch(options) {
      $("#" + options.live)
        .removeClass("cleared")
        .html();
      options.current++;
      options.spin.addClass("loading");
      $.get(
        handler,
        {
          s: decodeURI(options.term),
          liveSearch: options.live,
          dataType: "html",
          liveCount: options.liveCount,
          filter: options.filter,
          template: options.template,
        },
        function (data) {
          options.processed++;
          var live = $("#" + options.live);
          if (
            options.processed === options.current &&
            !live.hasClass("cleared")
          ) {
            live.find("> #search-results").removeClass("active");
            live.html(data);
            setTimeout(function () {
              live.find("> #search-results").addClass("active");
            }, 50);
          }
          options.spin
            .parents(".rd-search")
            .find(".input-group-addon")
            .removeClass("loading");
        }
      );
    }

    /**
     * @desc Attach form validation to elements
     * @param {object} elements - jQuery object
     */
    function attachFormValidator(elements) {
      // Custom validator - phone number
      regula.custom({
        name: "PhoneNumber",
        defaultMessage: "Invalid phone number format",
        validator: function () {
          if (this.value === "") return true;
          else return /^(\+\d)?[0-9\-\(\) ]{5,}$/i.test(this.value);
        },
      });

      for (var i = 0; i < elements.length; i++) {
        var o = $(elements[i]),
          v;
        o.addClass("form-control-has-validation").after(
          "<span class='form-validation'></span>"
        );
        v = o.parent().find(".form-validation");
        if (v.is(":last-child")) o.addClass("form-control-last-child");
      }

      elements
        .on("input change propertychange blur", function (e) {
          var $this = $(this),
            results;

          if (e.type !== "blur")
            if (!$this.parent().hasClass("has-error")) return;
          if ($this.parents(".rd-mailform").hasClass("success")) return;

          if ((results = $this.regula("validate")).length) {
            for (i = 0; i < results.length; i++) {
              $this
                .siblings(".form-validation")
                .text(results[i].message)
                .parent()
                .addClass("has-error");
            }
          } else {
            $this
              .siblings(".form-validation")
              .text("")
              .parent()
              .removeClass("has-error");
          }
        })
        .regula("bind");

      var regularConstraintsMessages = [
        {
          type: regula.Constraint.Required,
          newMessage: "The text field is required.",
        },
        {
          type: regula.Constraint.Email,
          newMessage: "The email is not a valid email.",
        },
        {
          type: regula.Constraint.Numeric,
          newMessage: "Only numbers are required",
        },
        {
          type: regula.Constraint.Selected,
          newMessage: "Please choose an option.",
        },
      ];

      for (var i = 0; i < regularConstraintsMessages.length; i++) {
        var regularConstraint = regularConstraintsMessages[i];

        regula.override({
          constraintType: regularConstraint.type,
          defaultMessage: regularConstraint.newMessage,
        });
      }
    }

    /**
     * @desc Check if all elements pass validation
     * @param {object} elements - object of items for validation
     * @param {object} captcha - captcha object for validation
     * @return {boolean}
     */
    function isValidated(elements, captcha) {
      var results,
        errors = 0;

      if (elements.length) {
        for (var j = 0; j < elements.length; j++) {
          var $input = $(elements[j]);
          if ((results = $input.regula("validate")).length) {
            for (k = 0; k < results.length; k++) {
              errors++;
              $input
                .siblings(".form-validation")
                .text(results[k].message)
                .parent()
                .addClass("has-error");
            }
          } else {
            $input
              .siblings(".form-validation")
              .text("")
              .parent()
              .removeClass("has-error");
          }
        }

        if (captcha) {
          if (captcha.length) {
            return validateReCaptcha(captcha) && errors === 0;
          }
        }

        return errors === 0;
      }
      return true;
    }

    /**
     * @desc Validate google reCaptcha
     * @param {object} captcha - captcha object for validation
     * @return {boolean}
     */
    function validateReCaptcha(captcha) {
      var captchaToken = captcha.find(".g-recaptcha-response").val();

      if (captchaToken.length === 0) {
        captcha
          .siblings(".form-validation")
          .html("Please, prove that you are not robot.")
          .addClass("active");
        captcha.closest(".form-wrap").addClass("has-error");

        captcha.on("propertychange", function () {
          var $this = $(this),
            captchaToken = $this.find(".g-recaptcha-response").val();

          if (captchaToken.length > 0) {
            $this.closest(".form-wrap").removeClass("has-error");
            $this.siblings(".form-validation").removeClass("active").html("");
            $this.off("propertychange");
          }
        });

        return false;
      }

      return true;
    }

    /**
     * @desc Initialize Google reCaptcha
     */
    window.onloadCaptchaCallback = function () {
      for (var i = 0; i < plugins.captcha.length; i++) {
        var $capthcaItem = $(plugins.captcha[i]);

        grecaptcha.render($capthcaItem.attr("id"), {
          sitekey: $capthcaItem.attr("data-sitekey"),
          size: $capthcaItem.attr("data-size")
            ? $capthcaItem.attr("data-size")
            : "normal",
          theme: $capthcaItem.attr("data-theme")
            ? $capthcaItem.attr("data-theme")
            : "light",
          callback: function (e) {
            $(".recaptcha").trigger("propertychange");
          },
        });
        $capthcaItem.after("<span class='form-validation'></span>");
      }
    };

    /**
     * @desc Initialize Bootstrap tooltip with required placement
     * @param {string} tooltipPlacement
     */
    function initBootstrapTooltip(tooltipPlacement) {
      plugins.bootstrapTooltip.tooltip("dispose");

      if (window.innerWidth < 576) {
        plugins.bootstrapTooltip.tooltip({ placement: "bottom" });
      } else {
        plugins.bootstrapTooltip.tooltip({ placement: tooltipPlacement });
      }
    }

    // Additional class on html if mac os.
    if (navigator.platform.match(/(Mac)/i)) {
      $html.addClass("mac-os");
    }

    // Adds some loosing functionality to IE browsers (IE Polyfills)
    if (isIE) {
      if (isIE === 12) $html.addClass("ie-edge");
      if (isIE === 11) $html.addClass("ie-11");
      if (isIE < 10) $html.addClass("lt-ie-10");
      if (isIE < 11) $html.addClass("ie-10");
    }

    // Google ReCaptcha
    if (plugins.captcha.length) {
      $.getScript(
        "//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en"
      );
    }

    // Bootstrap Tooltips
    if (plugins.bootstrapTooltip.length) {
      var tooltipPlacement = plugins.bootstrapTooltip.attr("data-placement");
      initBootstrapTooltip(tooltipPlacement);

      $window.on("resize orientationchange", function () {
        initBootstrapTooltip(tooltipPlacement);
      });
    }

    // Stop vioeo in bootstrapModalDialog
    if (plugins.bootstrapModalDialog.length) {
      for (var i = 0; i < plugins.bootstrapModalDialog.length; i++) {
        var modalItem = $(plugins.bootstrapModalDialog[i]);

        modalItem.on(
          "hidden.bs.modal",
          $.proxy(function () {
            var activeModal = $(this),
              rdVideoInside = activeModal.find("video"),
              youTubeVideoInside = activeModal.find("iframe");

            if (rdVideoInside.length) {
              rdVideoInside[0].pause();
            }

            if (youTubeVideoInside.length) {
              var videoUrl = youTubeVideoInside.attr("src");

              youTubeVideoInside.attr("src", "").attr("src", videoUrl);
            }
          }, modalItem)
        );
      }
    }

    // Copyright Year (Evaluates correct copyright year)
    if (plugins.copyrightYear.length) {
      plugins.copyrightYear.text(initialDate.getFullYear());
    }

    // Google maps
    if (plugins.maps.length) {
      lazyInit(plugins.maps, initMaps);
    }

    // Add custom styling options for input[type="radio"]
    if (plugins.radio.length) {
      for (var i = 0; i < plugins.radio.length; i++) {
        $(plugins.radio[i])
          .addClass("radio-custom")
          .after("<span class='radio-custom-dummy'></span>");
      }
    }

    // Add custom styling options for input[type="checkbox"]
    // if (plugins.checkbox.length) {
    // 	for (var i = 0; i < plugins.checkbox.length; i++) {
    // 		$(plugins.checkbox[i]).addClass("checkbox-custom").after("<span class='checkbox-custom-dummy'></span>")
    // 	}
    // }

    // UI To Top
    if (!isNoviBuilder) {
      $().UItoTop({
        easingType: "easeOutQuad",
        containerClass: "ui-to-top mdi mdi-arrow-up",
      });
    }

    // Owl carousel
    if (plugins.owl.length) {
      for (var i = 0; i < plugins.owl.length; i++) {
        var c = $(plugins.owl[i]);
        plugins.owl[i].owl = c;

        initOwlCarousel(c);
      }

      // Owl bug with webkit scrollbar
      if (!isIE || isIE >= 12) {
        setTimeout(function () {
          window.dispatchEvent(new Event("resize"));
        }, 500);
      }
    }

    // RD Search
    if (plugins.search.length || plugins.searchResults) {
      var handler = "bat/rd-search.php";
      var defaultTemplate =
        '<h5 class="search-title"><a target="_top" href="#{href}" class="search-link">#{title}</a></h5>' +
        "<p>...#{token}...</p>" +
        '<p class="match"><em>Terms matched: #{count} - URL: #{href}</em></p>';
      var defaultFilter = "*.html";

      if (plugins.search.length) {
        for (var i = 0; i < plugins.search.length; i++) {
          var searchItem = $(plugins.search[i]),
            options = {
              element: searchItem,
              filter: searchItem.attr("data-search-filter")
                ? searchItem.attr("data-search-filter")
                : defaultFilter,
              template: searchItem.attr("data-search-template")
                ? searchItem.attr("data-search-template")
                : defaultTemplate,
              live: searchItem.attr("data-search-live")
                ? searchItem.attr("data-search-live")
                : false,
              liveCount: searchItem.attr("data-search-live-count")
                ? parseInt(searchItem.attr("data-search-live"), 10)
                : 4,
              current: 0,
              processed: 0,
              timer: {},
            };

          var $toggle = $(".rd-navbar-search-toggle");
          if ($toggle.length) {
            $toggle.on(
              "click",
              (function (searchItem) {
                return function () {
                  if (!$(this).hasClass("active")) {
                    searchItem.find("input").val("").trigger("propertychange");
                  }
                };
              })(searchItem)
            );
          }

          if (options.live) {
            var clearHandler = false;

            searchItem.find("input").on(
              "input propertychange",
              $.proxy(
                function () {
                  this.term = this.element.find("input").val().trim();
                  this.spin = this.element.find(".input-group-addon");

                  clearTimeout(this.timer);

                  if (this.term.length > 2) {
                    this.timer = setTimeout(liveSearch(this), 200);

                    if (clearHandler === false) {
                      clearHandler = true;

                      $body.on("click", function (e) {
                        if ($(e.toElement).parents(".rd-search").length === 0) {
                          $("#rd-search-results-live")
                            .addClass("cleared")
                            .html("");
                        }
                      });
                    }
                  } else if (this.term.length === 0) {
                    $("#" + this.live)
                      .addClass("cleared")
                      .html("");
                  }
                },
                options,
                this
              )
            );
          }

          searchItem.submit(
            $.proxy(
              function () {
                $("<input />")
                  .attr("type", "hidden")
                  .attr("name", "filter")
                  .attr("value", this.filter)
                  .appendTo(this.element);
                return true;
              },
              options,
              this
            )
          );
        }
      }

      if (plugins.searchResults.length) {
        var regExp = /\?.*s=([^&]+)\&filter=([^&]+)/g;
        var match = regExp.exec(location.search);

        if (match !== null) {
          $.get(
            handler,
            {
              s: decodeURI(match[1]),
              dataType: "html",
              filter: match[2],
              template: defaultTemplate,
              live: "",
            },
            function (data) {
              plugins.searchResults.html(data);
            }
          );
        }
      }
    }

    // Add class in viewport
    if (plugins.viewAnimate.length) {
      for (var i = 0; i < plugins.viewAnimate.length; i++) {
        var $view = $(plugins.viewAnimate[i]).not(".active");
        $document
          .on(
            "scroll",
            $.proxy(function () {
              if (isScrolledIntoView(this)) {
                this.addClass("active");
              }
            }, $view)
          )
          .trigger("scroll");
      }
    }

    // WOW
    if (
      $html.hasClass("wow-animation") &&
      plugins.wow.length &&
      !isNoviBuilder &&
      isDesktop
    ) {
      new WOW().init();
    }

    // RD Input Label
    if (plugins.rdInputLabel.length) {
      plugins.rdInputLabel.RDInputLabel();
    }

    // Regula
    if (plugins.regula.length) {
      attachFormValidator(plugins.regula);
    }

    // MailChimp Ajax subscription
    if (plugins.mailchimp.length) {
      for (i = 0; i < plugins.mailchimp.length; i++) {
        var $mailchimpItem = $(plugins.mailchimp[i]),
          $email = $mailchimpItem.find('input[type="email"]');

        // Required by MailChimp
        $mailchimpItem.attr("novalidate", "true");
        $email.attr("name", "EMAIL");

        $mailchimpItem.on(
          "submit",
          $.proxy(
            function ($email, event) {
              event.preventDefault();

              var $this = this;

              var data = {},
                url = $this
                  .attr("action")
                  .replace("/post?", "/post-json?")
                  .concat("&c=?"),
                dataArray = $this.serializeArray(),
                $output = $("#" + $this.attr("data-form-output"));

              for (i = 0; i < dataArray.length; i++) {
                data[dataArray[i].name] = dataArray[i].value;
              }

              $.ajax({
                data: data,
                url: url,
                dataType: "jsonp",
                error: function (resp, text) {
                  $output.html("Server error: " + text);

                  setTimeout(function () {
                    $output.removeClass("active");
                  }, 4000);
                },
                success: function (resp) {
                  $output.html(resp.msg).addClass("active");
                  $email[0].value = "";
                  var $label = $('[for="' + $email.attr("id") + '"]');
                  if ($label.length) $label.removeClass("focus not-empty");

                  setTimeout(function () {
                    $output.removeClass("active");
                  }, 6000);
                },
                beforeSend: function (data) {
                  var isNoviBuilder = window.xMode;

                  var isValidated = (function () {
                    var results,
                      errors = 0;
                    var elements = $this.find("[data-constraints]");
                    var captcha = null;
                    if (elements.length) {
                      for (var j = 0; j < elements.length; j++) {
                        var $input = $(elements[j]);
                        if ((results = $input.regula("validate")).length) {
                          for (var k = 0; k < results.length; k++) {
                            errors++;
                            $input
                              .siblings(".form-validation")
                              .text(results[k].message)
                              .parent()
                              .addClass("has-error");
                          }
                        } else {
                          $input
                            .siblings(".form-validation")
                            .text("")
                            .parent()
                            .removeClass("has-error");
                        }
                      }

                      if (captcha) {
                        if (captcha.length) {
                          return validateReCaptcha(captcha) && errors === 0;
                        }
                      }

                      return errors === 0;
                    }
                    return true;
                  })();

                  // Stop request if builder or inputs are invalide
                  if (isNoviBuilder || !isValidated) return false;

                  $output.html("Submitting...").addClass("active");
                },
              });

              return false;
            },
            $mailchimpItem,
            $email
          )
        );
      }
    }

    // Campaign Monitor ajax subscription
    if (plugins.campaignMonitor.length) {
      for (i = 0; i < plugins.campaignMonitor.length; i++) {
        var $campaignItem = $(plugins.campaignMonitor[i]);

        $campaignItem.on(
          "submit",
          $.proxy(function (e) {
            var data = {},
              url = this.attr("action"),
              dataArray = this.serializeArray(),
              $output = $(
                "#" + plugins.campaignMonitor.attr("data-form-output")
              ),
              $this = $(this);

            for (i = 0; i < dataArray.length; i++) {
              data[dataArray[i].name] = dataArray[i].value;
            }

            $.ajax({
              data: data,
              url: url,
              dataType: "jsonp",
              error: function (resp, text) {
                $output.html("Server error: " + text);

                setTimeout(function () {
                  $output.removeClass("active");
                }, 4000);
              },
              success: function (resp) {
                $output.html(resp.Message).addClass("active");

                setTimeout(function () {
                  $output.removeClass("active");
                }, 6000);
              },
              beforeSend: function (data) {
                // Stop request if builder or inputs are invalide
                if (
                  isNoviBuilder ||
                  !isValidated($this.find("[data-constraints]"))
                )
                  return false;

                $output.html("Submitting...").addClass("active");
              },
            });

            // Clear inputs after submit
            var inputs = $this[0].getElementsByTagName("input");
            for (var i = 0; i < inputs.length; i++) {
              inputs[i].value = "";
              var label = document.querySelector(
                '[for="' + inputs[i].getAttribute("id") + '"]'
              );
              if (label) label.classList.remove("focus", "not-empty");
            }

            return false;
          }, $campaignItem)
        );
      }
    }

    // RD Mailform
    if (plugins.rdMailForm.length) {
      var i,
        j,
        k,
        msg = {
          MF000: "Successfully sent!",
          MF001: "Recipients are not set!",
          MF002: "Form will not work locally!",
          MF003: "Please, define email field in your form!",
          MF004: "Please, define type of your form!",
          MF254: "Something went wrong with PHPMailer!",
          MF255: "Aw, snap! Something went wrong.",
        };

      for (i = 0; i < plugins.rdMailForm.length; i++) {
        var $form = $(plugins.rdMailForm[i]),
          formHasCaptcha = false;

        $form.attr("novalidate", "novalidate").ajaxForm({
          data: {
            "form-type": $form.attr("data-form-type") || "contact",
            counter: i,
          },
          beforeSubmit: function (arr, $form, options) {
            if (isNoviBuilder) return;

            var form = $(plugins.rdMailForm[this.extraData.counter]),
              inputs = form.find("[data-constraints]"),
              output = $("#" + form.attr("data-form-output")),
              captcha = form.find(".recaptcha"),
              captchaFlag = true;

            output.removeClass("active error success");

            if (isValidated(inputs, captcha)) {
              // veify reCaptcha
              if (captcha.length) {
                var captchaToken = captcha.find(".g-recaptcha-response").val(),
                  captchaMsg = {
                    CPT001:
                      'Please, setup you "site key" and "secret key" of reCaptcha',
                    CPT002: "Something wrong with google reCaptcha",
                  };

                formHasCaptcha = true;

                $.ajax({
                  method: "POST",
                  url: "bat/reCaptcha.php",
                  data: { "g-recaptcha-response": captchaToken },
                  async: false,
                }).done(function (responceCode) {
                  if (responceCode !== "CPT000") {
                    if (output.hasClass("snackbars")) {
                      output.html(
                        '<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' +
                          captchaMsg[responceCode] +
                          "</span></p>"
                      );

                      setTimeout(function () {
                        output.removeClass("active");
                      }, 3500);

                      captchaFlag = false;
                    } else {
                      output.html(captchaMsg[responceCode]);
                    }

                    output.addClass("active");
                  }
                });
              }

              if (!captchaFlag) {
                return false;
              }

              form.addClass("form-in-process");

              if (output.hasClass("snackbars")) {
                output.html(
                  '<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>'
                );
                output.addClass("active");
              }
            } else {
              return false;
            }
          },
          error: function (result) {
            if (isNoviBuilder) return;

            var output = $(
                "#" +
                  $(plugins.rdMailForm[this.extraData.counter]).attr(
                    "data-form-output"
                  )
              ),
              form = $(plugins.rdMailForm[this.extraData.counter]);

            output.text(msg[result]);
            form.removeClass("form-in-process");

            if (formHasCaptcha) {
              grecaptcha.reset();
            }
          },
          success: function (result) {
            if (isNoviBuilder) return;

            var form = $(plugins.rdMailForm[this.extraData.counter]),
              output = $("#" + form.attr("data-form-output")),
              select = form.find("select");

            form.addClass("success").removeClass("form-in-process");

            if (formHasCaptcha) {
              grecaptcha.reset();
            }

            result = result.length === 5 ? result : "MF255";
            output.text(msg[result]);

            if (result === "MF000") {
              if (output.hasClass("snackbars")) {
                output.html(
                  '<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' +
                    msg[result] +
                    "</span></p>"
                );
              } else {
                output.addClass("active success");
              }
            } else {
              if (output.hasClass("snackbars")) {
                output.html(
                  ' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' +
                    msg[result] +
                    "</span></p>"
                );
              } else {
                output.addClass("active error");
              }
            }

            form.clearForm();

            if (select.length) {
              select.select2("val", "");
            }

            // form.find('input, textarea').trigger('blur');

            setTimeout(function () {
              output.removeClass("active error success");
              form.removeClass("success");
            }, 3500);
          },
        });
      }
    }

    // Slick carousel
    if (plugins.slick.length) {
      for (var i = 0; i < plugins.slick.length; i++) {
        var $slickItem = $(plugins.slick[i]);

        $slickItem.on("init", function (slick) {
          initLightGallery(
            $('[data-lightgallery="group-slick"]'),
            "lightGallery-in-carousel"
          );
          initLightGallery(
            $('[data-lightgallery="item-slick"]'),
            "lightGallery-in-carousel"
          );
        });

        $slickItem
          .slick({
            slidesToScroll:
              parseInt($slickItem.attr("data-slide-to-scroll"), 10) || 1,
            asNavFor: $slickItem.attr("data-for") || false,
            dots: $slickItem.attr("data-dots") === "true",
            infinite: isNoviBuilder
              ? false
              : $slickItem.attr("data-loop") === "true",
            focusOnSelect: $slickItem.attr("data-focus-select") || true,
            arrows: $slickItem.attr("data-arrows") === "true",
            swipe: $slickItem.attr("data-swipe") === "true",
            autoplay: $slickItem.attr("data-autoplay") === "true",
            centerMode: $slickItem.attr("data-center-mode") === "true",
            fade: $slickItem.attr("data-slide-effect") === "true",
            centerPadding: $slickItem.attr("data-center-padding")
              ? $slickItem.attr("data-center-padding")
              : "0.50",
            mobileFirst: true,
            appendArrows: $slickItem.attr("data-arrows-class") || $slickItem,
            nextArrow: '<button type="button" class="slick-next"></button>',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            responsive: [
              {
                breakpoint: 0,
                settings: {
                  slidesToShow:
                    parseInt($slickItem.attr("data-items"), 10) || 1,
                  vertical:
                    $slickItem.attr("data-vertical") === "true" || false,
                },
              },
              {
                breakpoint: 575,
                settings: {
                  slidesToShow:
                    parseInt($slickItem.attr("data-sm-items"), 10) || 1,
                  vertical:
                    $slickItem.attr("data-sm-vertical") === "true" || false,
                },
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow:
                    parseInt($slickItem.attr("data-md-items"), 10) || 1,
                  vertical:
                    $slickItem.attr("data-md-vertical") === "true" || false,
                },
              },
              {
                breakpoint: 991,
                settings: {
                  slidesToShow:
                    parseInt($slickItem.attr("data-lg-items"), 10) || 1,
                  vertical:
                    $slickItem.attr("data-lg-vertical") === "true" || false,
                },
              },
              {
                breakpoint: 1199,
                settings: {
                  slidesToShow:
                    parseInt($slickItem.attr("data-xl-items"), 10) || 1,
                  vertical:
                    $slickItem.attr("data-xl-vertical") === "true" || false,
                },
              },
              {
                breakpoint: 1599,
                settings: {
                  slidesToShow:
                    parseInt($slickItem.attr("data-xxl-items"), 10) || 1,
                  vertical:
                    $slickItem.attr("data-xxl-vertical") === "true" || false,
                },
              },
            ],
          })
          .on("afterChange", function (event, slick, currentSlide, nextSlide) {
            var $this = $(this),
              childCarousel = $this.attr("data-child");

            if (childCarousel) {
              $(childCarousel + " .slick-slide").removeClass("slick-current");
              $(childCarousel + " .slick-slide")
                .eq(currentSlide)
                .addClass("slick-current");
            }
          });
      }
    }
  });

  /**
   * @module       UIToTop
   * @author       Matt Varone
   * @see          http://www.mattvarone.com/web-design/uitotop-jquery-plugin/
   * @license      MIT
   */
  !(function (o) {
    o.fn.UItoTop = function (n) {
      var e = {
          text: "",
          min: 500,
          scrollSpeed: 800,
          containerID: "ui-to-top",
          containerClass: "ui-to-top fa fa-angle-up",
          easingType: "easeIn",
        },
        t = o.extend(e, n),
        i = "#" + t.containerID;
      o("body").append(
        '<a href="#" id="' +
          t.containerID +
          '" class="' +
          t.containerClass +
          '" >' +
          t.text +
          "</a>"
      ),
        o(i).click(function () {
          return (
            o("html, body")
              .stop()
              .animate({ scrollTop: 0 }, t.scrollSpeed, t.easingType),
            !1
          );
        }),
        o(window).scroll(function () {
          var n = o(window).scrollTop();
          "undefined" == typeof document.body.style.maxHeight &&
            o(i).css({
              position: "absolute",
              top: o(window).scrollTop() + o(window).height() - 50,
            }),
            n > t.min
              ? o(i).stop(!0, !0).addClass("active")
              : o(i).removeClass("active");
        });
    };
  })(jQuery);
}());
