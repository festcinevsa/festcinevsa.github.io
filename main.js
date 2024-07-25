const menuItems = document.querySelectorAll('.landing-page header .links li');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    })
})