document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', () => {
    const button = document.getElementById('backToTop');
    if (window.scrollY > 200) {
        button.classList.remove('hidden');
    } else {
        button.classList.add('hidden');
    }
});

