let currentSectionIndex = 0;
        const slides = document.querySelectorAll('.section-slide');
        const dots = document.querySelectorAll('.dot');
        const navBtns = document.querySelectorAll('.nav-links button');
        let overlayDismissed = false;

        function startExperience() {
            const overlay = document.getElementById('hero-overlay');
            overlay.classList.add('zoomed-out');
            overlayDismissed = true;
            updateSlideUI();
        }

        function handleViewportClick(e) {
            if (!overlayDismissed) return;
            if (e.target.closest('.glass-card-content') || e.target.closest('.nav-container') || e.target.closest('.modal-overlay')) {
                return;
            }
            nextSection();
        }

        function nextSection() {
            if (currentSectionIndex < slides.length - 1) {
                currentSectionIndex++;
            } else {
                currentSectionIndex = 0;
            }
            updateSlideUI();
        }

        function goToSection(index, e) {
            if (e) e.stopPropagation();
            if (!overlayDismissed) startExperience();
            currentSectionIndex = index;
            updateSlideUI();
        }

        function updateSlideUI() {
            slides.forEach((slide, idx) => {
                slide.classList.toggle('active', idx === currentSectionIndex);
            });
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === currentSectionIndex);
            });
            navBtns.forEach((btn, idx) => {
                btn.classList.toggle('active', idx === currentSectionIndex);
            });
        }

        function openModal(title, desc) {
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-desc').innerText = desc;
            document.getElementById('infoModal').classList.add('active');
        }

        function closeModal() {
            document.getElementById('infoModal').classList.remove('active');
        }

        /* Keyboard Controls */
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' || e.code === 'ArrowRight') {
                if (!overlayDismissed) {
                    startExperience();
                } else {
                    nextSection();
                }
            } else if (e.code === 'ArrowLeft' && currentSectionIndex > 0) {
                currentSectionIndex--;
                updateSlideUI();
            } else if (e.code === 'Escape') {
                closeModal();
            }
        });