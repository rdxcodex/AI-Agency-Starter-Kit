document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('lead-form');
    const resultsPanel = document.getElementById('results');
    const resetBtn = document.getElementById('reset-btn');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const q1 = parseInt(document.getElementById('q1').value);
        const q2 = parseInt(document.getElementById('q2').value);
        const q3 = parseInt(document.getElementById('q3').value);
        const q4 = parseInt(document.getElementById('q4').value);

        if (isNaN(q1) || isNaN(q2) || isNaN(q3) || isNaN(q4)) return;

        const totalScore = q1 + q2 + q3 + q4;
        displayResults(totalScore);
    });

    function displayResults(score) {
        form.classList.add('hidden');
        resultsPanel.classList.remove('hidden');
        
        // Remove old status classes
        resultsPanel.className = 'results-panel';

        document.getElementById('final-score').textContent = score;
        const statusEl = document.getElementById('lead-status');
        const actionEl = document.getElementById('action-plan');

        if (score >= 110) {
            resultsPanel.classList.add('status-hot');
            statusEl.textContent = '🔥 HOT LEAD';
            actionEl.textContent = 'Action: Call them IMMEDIATELY. They have the budget, the need, and the authority to sign today. Do not send an automated email, pick up the phone.';
        } else if (score >= 70) {
            resultsPanel.classList.add('status-warm');
            statusEl.textContent = '☀️ WARM LEAD';
            actionEl.textContent = 'Action: Worth a discovery call. They likely need education on your pricing or solutions, but they are a viable prospect. Schedule a 15-min intro.';
        } else if (score >= 40) {
            resultsPanel.classList.add('status-cold');
            statusEl.textContent = '❄️ COLD LEAD';
            actionEl.textContent = 'Action: Do not hop on a call yet. Put them in an automated email nurture sequence. They either lack budget right now or are too early in the buying cycle.';
        } else {
            resultsPanel.classList.add('status-junk');
            statusEl.textContent = '🗑️ DISQUALIFIED';
            actionEl.textContent = 'Action: Decline politely. They do not have the budget or authority to buy your services. Do not waste sales resources here.';
        }
    }

    resetBtn.addEventListener('click', () => {
        resultsPanel.classList.add('hidden');
        form.classList.remove('hidden');
        form.reset();
    });
});
