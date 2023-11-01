const butterflies = document.querySelectorAll('.butterfly');

butterflies.forEach((butterfly, index) => {
    butterfly.style.animationDelay = `${index * 2}s`;
});
