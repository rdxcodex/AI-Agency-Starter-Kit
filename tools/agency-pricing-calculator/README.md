# Agency Pricing Calculator

This internal tool is designed for agency owners and freelancers to accurately calculate profitable pricing for their services. It takes into account labor costs, hard costs (like software or API usage), and a target profit margin to ensure you never underprice a project.

## 📸 Screenshots

> **Note for Contributors:** Please add screenshots of the calculator.
> 
> *[Placeholder: Add screenshot of empty pricing form here]*
> *[Placeholder: Add screenshot of recommended pricing tiers here]*

## 🚀 Features

* **True Margin Calculation:** Uses the correct formula for profit margin `Price = Cost / (1 - Margin)` rather than simple markup.
* **Value-Based Recommendation:** Automatically suggests a 50% premium "Value-Based" tier for high ROI projects.
* **Cost Breakdown:** Transparently shows exactly where the money is going (Labor, COGS, Profit).
* **Responsive Design:** Clean, modern interface that works on any device.

## 🛠️ Usage Instructions

1. Open `index.html` in your web browser.
2. Input your estimated hours and blended hourly rate (what you *need* to make per hour to keep the lights on).
3. Add any direct project costs (e.g., $100/mo for Make.com, or $500 for a one-off Zapier expert).
4. Set your target margin (typically 30-50% for healthy agencies).
5. Use the generated "Base Price" as your minimum acceptable floor, and pitch the "Value-Based Price".

## 📝 Example Inputs & Outputs

**Example Input:**
* Estimated Hours: 40
* Hourly Rate: $150
* Software Costs: $100
* Contractor Costs: $500
* Target Margin: 40%

**Example Output:**
* Labor Cost: $6,000
* Hard Costs: $600
* Total Cost (COGS): $6,600
* **Base Price (to hit 40% margin):** $11,000
* **Value-Based Price:** $16,500
* Profit Amount (at base): $4,400

## 🤝 For Contributors

* Stick to vanilla HTML, CSS, and JS.
* If adding new cost categories, ensure the total COGS formula is updated correctly in `script.js`.
