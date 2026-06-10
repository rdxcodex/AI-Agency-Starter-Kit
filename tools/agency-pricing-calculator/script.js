document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('pricing-form');
    const resultsPanel = document.getElementById('results');
    const resetBtn = document.getElementById('reset-btn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get values
        const hours = parseFloat(document.getElementById('hours-estimated').value);
        const rate = parseFloat(document.getElementById('hourly-rate').value);
        const software = parseFloat(document.getElementById('software-costs').value) || 0;
        const contractors = parseFloat(document.getElementById('contractor-costs').value) || 0;
        const targetMargin = parseFloat(document.getElementById('margin-target').value) / 100;

        if (isNaN(hours) || isNaN(rate) || isNaN(targetMargin)) return;

        // Calculations
        const laborCost = hours * rate;
        const hardCosts = software + contractors;
        const cogs = laborCost + hardCosts; // Cost of Goods Sold
        
        // Formula: Price = Cost / (1 - Margin)
        // This ensures the profit margin is a percentage of the total PRICE, not a markup on cost.
        let basePrice = 0;
        if (targetMargin >= 1) {
            basePrice = cogs * 10; // Fallback if they enter 100% or more by mistake
        } else {
            basePrice = cogs / (1 - targetMargin);
        }

        const profitAmount = basePrice - cogs;
        const valuePrice = basePrice * 1.5; // 50% premium for value-based pricing

        // Update UI
        document.getElementById('base-price').textContent = formatCurrency(basePrice);
        document.getElementById('value-price').textContent = formatCurrency(valuePrice);
        
        document.getElementById('breakdown-labor').textContent = formatCurrency(laborCost);
        document.getElementById('breakdown-hard').textContent = formatCurrency(hardCosts);
        document.getElementById('breakdown-cogs').textContent = formatCurrency(cogs);
        document.getElementById('breakdown-profit').textContent = formatCurrency(profitAmount);

        form.classList.add('hidden');
        resultsPanel.classList.remove('hidden');
    });

    resetBtn.addEventListener('click', () => {
        resultsPanel.classList.add('hidden');
        form.classList.remove('hidden');
        form.reset();
    });

    function formatCurrency(value) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(value);
    }
});
