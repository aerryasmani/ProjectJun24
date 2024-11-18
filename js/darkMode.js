// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const toggleTrack = document.querySelector('.toggle-track');
    
    // Check for saved dark mode preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateToggleIcons(savedTheme === 'dark');
    }
    
    // Toggle dark mode when clicked
    toggleTrack.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Set theme
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // Save preference
        localStorage.setItem('theme', newTheme);
        
        // Update toggle icons
        updateToggleIcons(newTheme === 'dark');
    });
    
    // Function to update toggle icons visibility
    function updateToggleIcons(isDark) {
        const sunIcon = document.querySelector('.toggle-sun');
        const moonIcon = document.querySelector('.toggle-moon');
        
        if (isDark) {
            sunIcon.style.opacity = '0.5';
            moonIcon.style.opacity = '1';
        } else {
            sunIcon.style.opacity = '1';
            moonIcon.style.opacity = '0.5';
        }
    }
});

// Check system preference on load
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    // Update toggle icons for system preference
    const sunIcon = document.querySelector('.toggle-sun');
    const moonIcon = document.querySelector('.toggle-moon');
    if (sunIcon && moonIcon) {
        sunIcon.style.opacity = '0.5';
        moonIcon.style.opacity = '1';
    }
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newTheme = e.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update toggle icons for system changes
    const sunIcon = document.querySelector('.toggle-sun');
    const moonIcon = document.querySelector('.toggle-moon');
    if (sunIcon && moonIcon) {
        sunIcon.style.opacity = newTheme === 'dark' ? '0.5' : '1';
        moonIcon.style.opacity = newTheme === 'dark' ? '1' : '0.5';
    }
});