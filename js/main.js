document.getElementById('year').textContent = new Date().getFullYear();

(function () {
    const root = document.documentElement;
    const toggle = document.getElementById('themeToggle');
    const stored = localStorage.getItem('theme');
    root.setAttribute('data-theme', stored === 'dark' ? 'dark' : 'light');

    toggle.addEventListener('click', function () {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
})();
