// Function to load the header
function loadHeader() {
    fetch('assets/html/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
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

// Call the functions on page load
window.onload = function() {
    loadHeader();
    loadFooter();
};
