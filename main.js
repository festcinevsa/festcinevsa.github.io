const menuItems = document.querySelectorAll('.landing-page header .links a');

menuItems.forEach(link => {
    link.addEventListener('click', function() {
        menuLinks.forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});
