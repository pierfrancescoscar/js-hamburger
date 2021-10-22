// Mostrare e nascondere contenuto Hamburger Menu

// Ref Elements

// Open Button

const hambMenuBtn = document.querySelector('a > .fa-bars');

// Closing Button

const cloHambMenuBtn = document.querySelector('.close');


// Add click event

hambMenuBtn.addEventListener('click', function() {
    const hambMenu = document.querySelector('.hamburger-menu');
    hambMenu.classList.add('active');
})

// Add closing event

cloHambMenuBtn.addEventListener('click', function() {
    const hambMenu = document.querySelector('.hamburger-menu');
    hambMenu.classList.remove('active')
})


