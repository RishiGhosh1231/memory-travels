// Toggle Navigation
const navButton = document.querySelector('.toggle-btn');
const toggleNav = document.querySelector('.toggle-nav');
const navCloseButton = document.querySelector('.close-button');

navButton.addEventListener('click', function(){
    toggleNav.classList.toggle('active');
});

navCloseButton.addEventListener('click', function(){
    toggleNav.classList.remove('active');
});


// Banner 
const discoverButton = document.querySelector('.discover');
const discoverArrow = document.querySelector('.discover img');

discoverButton.addEventListener('mouseover', function(){
    discoverArrow.style.left = '200px';
});

discoverButton.addEventListener('mouseout', function(){
    discoverArrow.style.left = '180px';
});

// Booking
let range = document.getElementsByClassName('range');
let rangeOutput = document.getElementsByClassName('range-value');

for(let i = 0; i < rangeOutput.length; i++){
    rangeOutput[i].innerHTML = `$50 - $${range[0].value}`;
    for(let j = 0; j < range.length; j++){
        range[j].oninput = function(){
            const id = this.getAttribute('data-id');
            rangeOutput[id].innerHTML = `$50 - $${this.value}`;
        }
    }
}

const bookingButtons = document.querySelector('.section-button').children;
const bookingSections = document.querySelector('.book').children;

for(let i = 0; i < bookingButtons.length; i++){
    bookingButtons[i].addEventListener('click', function(){
        for(let j = 0; j < bookingButtons.length; j++){
            bookingButtons[j].classList.remove('active');
        }
        this.classList.add('active');
        const id = this.getAttribute('data-id');
        for(let j = 0; j < bookingSections.length; j++){
            bookingSections[j].classList.remove('active');
        }
        bookingSections[id].classList.add('active');
    });
}

// Testimonials
const clients = document.querySelector('.clients').children;
const reviews = document.querySelector('.reviews').children;

for(let i = 0; i < clients.length; i++){
    clients[i].addEventListener('click',function(){
        for(let j = 0; j < clients.length; j++){
            clients[j].classList.remove('active');
        }
        this.classList.add('active');
        const id = this.getAttribute('data-id');
        for(let j = 0; j < reviews.length; j++){
            reviews[j].classList.remove('active');
        }
        reviews[id].classList.add('active');
    });
}

// Stats Section
var a = 0;
$(window).scroll(function() {

  var oTop = $('.stats-section').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.stats-number').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 5000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
    });
    a = 1;
  }

});