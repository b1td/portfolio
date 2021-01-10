window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    preloader.classList.add('hide');
    setTimeout(function() {
        preloader.style.display = 'none';
    }, 1000);
});



[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
        img.removeAttribute('data-src');
    };
});
