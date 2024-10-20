// Function to load the header
function loadHeader() {
    fetch('assets/html/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            setupMenuToggle(); // Call the menu toggle setup after loading header
        });
}

// Function to load the footer
function loadFooter() {
    fetch('assets/html/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        });
}

// Menu toggle function for small screens
function setupMenuToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const siteMenu = document.querySelector('.site-menu');

    menuToggle.addEventListener('click', function() {
        siteMenu.classList.toggle('active');
    });
}

// Call the functions on page load
window.onload = function() {
    loadHeader();
    loadFooter();
};
