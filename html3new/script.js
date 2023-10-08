document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check if the user has a preferred theme
    const preferredTheme = localStorage.getItem('theme');
    if (preferredTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = 'Toggle Light Mode';
    }

    // Toggle dark/light mode
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            themeToggle.textContent = 'Toggle Dark Mode';
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-mode');
            themeToggle.textContent = 'Toggle Light Mode';
            localStorage.setItem('theme', 'dark');
        }
    });
});
