# Automated Review Collection Workflow

**Purpose:** To systematically increase a restaurant's 5-star Google Reviews by filtering out negative feedback internally and pushing positive feedback to public platforms.

## 1. Trigger
* **Platform:** Reservation System (e.g., OpenTable) or POS System (e.g., Toast)
* **Event:** Table Status changed to "Finished/Paid" OR 2 hours post-reservation time.

## 2. The Initial SMS (The Ask)
* **Platform:** Twilio / GoHighLevel
* **Action:** Send SMS.
* **Message Body:**
  > "Hi {{Customer_Name}}, thanks for dining at Luigi's Trattoria tonight! Quick question: On a scale of 1 to 5, how was your experience?"

## 3. The Routing Logic (Waiting for Reply)
* **Platform:** GoHighLevel (or Make.com with a webhook catch)
* **Event:** Customer replies with a number.

### Branch A: Positive (Replies 4 or 5)
* **Action:** Send SMS.
* **Message Body:**
  > "That is so great to hear! Our staff works really hard. Would you mind taking 30 seconds to tap this link and leave that as a Google Review? It helps us immensely! https://g.page/r/12345/review"

### Branch B: Negative (Replies 1, 2, or 3)
* **Action 1:** Send Apology SMS.
* **Message Body:**
  > "I am so sorry we didn't meet your expectations tonight. I'm having our General Manager reach out to you tomorrow to see how we can make this right."
* **Action 2:** Internal Notification.
* **Platform:** Slack/Email to General Manager.
* **Message Body:**
  > "⚠️ LOW SCORE ALERT: {{Customer_Name}} (Phone: {{Customer_Phone}}) rated their meal a {{Score}}. Please call them tomorrow to resolve."

### Branch C: Invalid Reply (Text instead of a number)
* **Action:** Use ChatGPT API to parse the sentiment of the text. If Positive -> Branch A. If Negative -> Branch B.


