
function toggleMenu() {
const navLinks = document.querySelector('.nav-links');
navLinks.classList.toggle('open');
}

//typee writter

const texts = ["SC Business Foundation (Founder)", "Business Coach","Badamission.com Business Partner", "Stock Market Expert", "Affiliate Marketing Specialist", "Entrepreneur","WEB & App Devoloper"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 150;
const typewriterElement = document.getElementById("typewriter");

function typeEffect() {
    let currentText = texts[index];
    if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex--);
    } else {
        typewriterElement.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => (isDeleting = true), 500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
    }
    
    setTimeout(typeEffect, isDeleting ? speed / 5 : speed);
}

typeEffect();