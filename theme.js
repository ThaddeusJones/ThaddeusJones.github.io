(function() {
    const themeNames = {
        'light': 'dark',
        'dark': 'space',
        'space': 'light'
    };
    const iconPaths = {
        'light': '<path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>',
        'dark': '<path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"/>',
                'space': '<path d="M12 3.5l2.2 4.5 4.9.7-3.6 3.5.9 4.9-3.9-2-3.9 2 .9-4.9-3.6-3.5 4.9-.7L12 3.5z"/>'
    };
    
    function getCurrentTheme() {
        const html = document.documentElement;
        if (html.classList.contains('dark-mode')) return 'dark';
        if (html.classList.contains('space-mode')) return 'space';
        return 'light';
    }
    
    function setTheme(theme) {
        const html = document.documentElement;
        html.classList.remove('dark-mode', 'space-mode');
        
        if (theme === 'dark') {
            html.classList.add('dark-mode');
        } else if (theme === 'space') {
            html.classList.add('space-mode');
        }
        
        const icon = document.getElementById('themeIcon');
        if (icon) {
            icon.innerHTML = iconPaths[theme] || iconPaths.light;
        }
        
        localStorage.setItem('theme', theme);
    }
    
    function cycleTheme() {
        const current = getCurrentTheme();
        const next = themeNames[current];
        setTheme(next);
    }
    
    // Initialize theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // Add click handler
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
        toggle.addEventListener('click', cycleTheme);
    }
})();

