document.addEventListener('DOMContentLoaded', () => {
    // Show More Bio
    const showMoreBtn = document.getElementById('show-more-btn');
    const moreBio = document.getElementById('more-bio');

    showMoreBtn.addEventListener('click', () => {
        moreBio.classList.toggle('hidden');
        showMoreBtn.textContent = moreBio.classList.contains('hidden') ? 'Show More' : 'Show Less';
    });

    // Skill Details
    const skillCards = document.querySelectorAll('.skill-card');
    const skillDetails = document.getElementById('skill-details');
    const skillDescription = document.getElementById('skill-description');

    const skillDescriptions = {
        JavaScript: "Proficient in modern JavaScript (ES6+), including async/await, promises, and functional programming concepts.",
        Python: "Experienced in Python for web development (Django, Flask) and data analysis (Pandas, NumPy).",
        React: "Skilled in building responsive and performant user interfaces with React and Redux.",
        "Node.js": "Proficient in server-side JavaScript with Node.js and Express.js for building scalable web applications.",
        HTML5: "Expert in semantic HTML5 markup and accessibility best practices.",
        CSS3: "Advanced CSS3 skills, including Flexbox, Grid, and CSS animations.",
        SQL: "Experienced in database design, optimization, and querying with SQL (MySQL, PostgreSQL).",
        Git: "Proficient in version control with Git, including branching strategies and collaborative workflows."
    };

    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            const skill = card.getAttribute('data-skill');
            skillDescription.textContent = skillDescriptions[skill] || "Skill description not available.";
            skillDetails.classList.remove('hidden');
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Submission
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send this data to a server
        console.log("Form submitted:", { name, email, message });

        // For demo purposes, we'll just show an alert
        alert("Thanks for your message! I'll get back to you soon.");
        contactForm.reset();
    });

    // Scroll Reveal Animation
    window.addEventListener('scroll', reveal);

    function reveal() {
        const reveals = document.querySelectorAll('.skill-card, .project-card');
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        reveals.forEach(element => {
            const revealTop = element.getBoundingClientRect().top;
            if(revealTop < windowHeight - revealPoint) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }

    // Initial call to reveal function
    reveal();
});