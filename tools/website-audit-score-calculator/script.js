document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('audit-form');
    const resultsPanel = document.getElementById('results');
    const resetBtn = document.getElementById('reset-btn');
    const totalScoreSpan = document.getElementById('total-score');
    const gradeBadge = document.getElementById('grade-badge');
    const insightText = document.getElementById('insight-text');

    const criteria = [
        { id: 'design', max: 15 },
        { id: 'ux', max: 15 },
        { id: 'mobile', max: 20 },
        { id: 'seo', max: 15 },
        { id: 'performance', max: 15 },
        { id: 'conversion', max: 20 }
    ];

    function validateInput(input, max) {
        const val = parseInt(input.value, 10);
        if (isNaN(val) || val < 0 || val > max) {
            input.parentElement.classList.add('invalid');
            return false;
        }
        input.parentElement.classList.remove('invalid');
        return val;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        let totalScore = 0;

        criteria.forEach(c => {
            const input = document.getElementById(c.id);
            const val = validateInput(input, c.max);
            if (val === false) isValid = false;
            else totalScore += val;
        });

        if (isValid) {
            displayResults(totalScore);
        }
    });

    function displayResults(score) {
        form.classList.add('hidden');
        resultsPanel.classList.remove('hidden');

        // Animate score counter
        animateValue(totalScoreSpan, 0, score, 1000);

        // Determine grade
        gradeBadge.className = 'grade'; // reset
        if (score >= 80) {
            gradeBadge.textContent = 'Grade: Excellent (A)';
            gradeBadge.classList.add('excellent');
            insightText.textContent = "This website is well-optimized! A few minor tweaks could push it to perfection, but overall it serves as a strong foundation for scaling AI or automation services.";
        } else if (score >= 50) {
            gradeBadge.textContent = 'Grade: Average (C)';
            gradeBadge.classList.add('average');
            insightText.textContent = "There are significant growth opportunities here. The site functions, but is likely bleeding leads due to missed UX/Conversion optimizations. An AI Chatbot or UI overhaul would drastically improve ROI.";
        } else {
            gradeBadge.textContent = 'Grade: Poor (F)';
            gradeBadge.classList.add('poor');
            insightText.textContent = "This website needs an urgent overhaul. It is currently acting as a bottleneck for the business. A complete rebuild focused on mobile responsiveness and conversion architecture is highly recommended before deploying advanced AI tools.";
        }
    }

    resetBtn.addEventListener('click', () => {
        resultsPanel.classList.add('hidden');
        form.classList.remove('hidden');
        form.reset();
        criteria.forEach(c => {
            document.getElementById(c.id).parentElement.classList.remove('invalid');
        });
    });

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
});
