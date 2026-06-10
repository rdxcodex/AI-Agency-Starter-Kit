document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('roi-form');
    
    const elements = {
        monthlySavings: document.getElementById('monthly-savings'),
        annualSavings: document.getElementById('annual-savings'),
        hoursSaved: document.getElementById('hours-saved'),
        roiPercentage: document.getElementById('roi-percentage')
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get values
        const hoursPerWeek = parseFloat(document.getElementById('hours-per-week').value);
        const hourlyRate = parseFloat(document.getElementById('hourly-rate').value);
        const automationCost = parseFloat(document.getElementById('automation-cost').value);
        const efficiency = parseFloat(document.getElementById('efficiency').value) / 100;

        // Validations
        if (isNaN(hoursPerWeek) || isNaN(hourlyRate) || isNaN(automationCost) || isNaN(efficiency)) {
            return;
        }

        // Calculations
        const currentMonthlyCost = (hoursPerWeek * 4.33) * hourlyRate; // 4.33 weeks in a month
        
        const hoursSavedMonthly = (hoursPerWeek * 4.33) * efficiency;
        const grossMonthlySavings = hoursSavedMonthly * hourlyRate;
        
        const netMonthlySavings = grossMonthlySavings - automationCost;
        const netAnnualSavings = netMonthlySavings * 12;
        
        const hoursSavedAnnually = hoursSavedMonthly * 12;
        
        const annualAutomationCost = automationCost * 12;
        
        // ROI Calculation: (Net Profit / Cost of Investment) * 100
        let roi = 0;
        if (annualAutomationCost > 0) {
            roi = ((netAnnualSavings) / annualAutomationCost) * 100;
        } else {
            roi = netAnnualSavings > 0 ? Infinity : 0; // If no cost but there are savings
        }

        // Update UI
        updateUI(netMonthlySavings, netAnnualSavings, hoursSavedAnnually, roi);
    });

    function updateUI(monthly, annual, hours, roi) {
        elements.monthlySavings.textContent = formatCurrency(monthly);
        elements.annualSavings.textContent = formatCurrency(annual);
        elements.hoursSaved.textContent = `${formatNumber(hours)} hrs`;
        
        if (roi === Infinity) {
            elements.roiPercentage.textContent = '∞%';
        } else {
            elements.roiPercentage.textContent = `${formatNumber(roi)}%`;
        }

        // Color coding based on positive/negative
        if (monthly < 0) {
            elements.monthlySavings.style.color = 'var(--error)';
            elements.annualSavings.style.color = 'var(--error)';
        } else {
            elements.monthlySavings.style.color = '';
            elements.annualSavings.style.color = '';
        }
    }

    function formatCurrency(value) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(value);
    }

    function formatNumber(value) {
        return new Intl.NumberFormat('en-US', {
            maximumFractionDigits: 1
        }).format(value);
    }
});
