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
