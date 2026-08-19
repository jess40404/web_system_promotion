let overlayDismissed = false;

function startExperience() {
    const overlay = document.getElementById('hero-overlay');
    overlay.classList.add('zoomed-out');
    overlayDismissed = true;
}

function showPage(pageId) {
    // Dismiss hero cover if active
    if (!overlayDismissed) {
        startExperience();
    }

    // Hide all pages
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => page.classList.remove('active'));

    // Remove active status from header navigation buttons
    const navButtons = document.querySelectorAll('.nav-links button');
    navButtons.forEach(btn => btn.classList.remove('active'));

    // Show target page
    document.getElementById('page-' + pageId).classList.add('active');

    // Highlight corresponding header button
    const activeBtn = document.getElementById('btn-' + pageId);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // Smooth scroll top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
