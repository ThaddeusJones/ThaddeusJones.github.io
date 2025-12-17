(function() {
    const themeNames = {
        'light': 'dark',
        'dark': 'space',
        'space': 'light'
    };
    const iconPaths = {
        'light': '<path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>',
        'dark': '<path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"/>',
                'space': '<path d="M19.039 11.459c0.001 0.015 0.022 0.244 0.03 0.407 0.006 0.113 0 0.29 0 0.3 0.003 0 0.029 0.023 0.03 0.024 1.428 1.17 2.943 2.767 3.204 3.94 0.073 0.325 0.056 0.618 -0.072 0.868 -0.152 0.293 -0.439 0.503 -0.834 0.638 -2.046 0.7 -6.925 -0.642 -10.907 -2.609 -2.845 -1.406 -5.342 -3.081 -7.032 -4.719 -1.57 -1.523 -1.995 -2.71 -1.59 -3.427 0.155 -0.271 0.42 -0.472 0.776 -0.609 1.299 -0.507 3.788 -0.152 6.239 0.579 -1.16 0.866 -1.968 2.034 -2.342 3.202l-0.001 0.007a0.051 0.051 0 0 1 -0.001 0.006c-0.115 1.07 1.434 2.47 3 3.25 -0.002 -0.006 0.084 0.032 0.084 0.026 -0.002 -0.006 -0.015 -0.109 -0.017 -0.113 -0.366 -2.66 1.648 -6.64 3.765 -7.513 0.136 -0.056 0.254 -0.09 0.27 -0.095l-0.273 -0.027c-0.074 -0.006 -0.148 -0.013 -0.228 -0.015a7.464 7.464 0 0 0 -0.272 -0.01 6.443 6.443 0 0 0 -3.4 0.892C5.378 5.057 2.383 4.892 1.13 5.31c-0.497 0.167 -0.833 0.418 -1 0.751 -0.174 0.35 -0.175 0.79 -0.002 1.306 0.57 1.704 3.058 4.032 6.211 6.099 0.457 2.407 2.615 4.875 5.703 5.204l0.142 0.015a0.278 0.278 0 0 1 0.05 0 6.618 6.618 0 0 0 -0.173 -0.132c-0.955 -0.736 -1.813 -1.949 -2.107 -3l0.185 0.093 0.143 0.07c4.985 2.465 10.215 3.72 12.53 2.947 0.519 -0.174 0.9 -0.418 1.075 -0.768 0.167 -0.335 0.139 -0.78 -0.029 -1.278 -0.436 -1.3 -2.304 -3.284 -4.675 -5.052a5.003 5.003 0 0 0 -0.145 -0.107"/>'
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

