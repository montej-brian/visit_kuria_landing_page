// Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Interactive button effects
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', function() {
                alert(' Welcome to VISIT KURIA Journey!\n\nPrepare to discover the authentic Kenyan experience!');
            });
        });

        // Feature card interaction
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('click', function() {
                this.style.animation = 'glow 0.5s ease-in-out';
            });
        });

        // Placeholder for openSchoolsModal function
        function openSchoolsModal() {
            alert('Displaying schools in Kehancha Town:\n- KMTC Kehancha\n- Kehancha TVET\n- Various Primary & Secondary Schools\n- Numerous Kindergartens');
        }