# AI Reservation Workflow (Make.com/Zapier Blueprint)

**Purpose:** To automate the flow of reservations from a web form or chatbot directly into the restaurant's central booking system (e.g., OpenTable or a Google Sheet CRM) and send an automated SMS confirmation.

## 1. Trigger
* **Platform:** Webhook from Voiceflow (or Typeform)
* **Event:** User completes the "Book a Table" conversational flow.
* **Data Payload Expected:** 
  * `Customer_Name`
  * `Customer_Phone`
  * `Date_Requested`
  * `Time_Requested`
  * `Party_Size`
  * `Special_Requests` (Allergies, anniversaries, etc.)

## 2. Validation & Formatting
* **Module 1 (Text Parser):** Format the `Customer_Phone` to E.164 standard (e.g., +15551234567) so the SMS API accepts it.
* **Module 2 (Date/Time Formatter):** Ensure the `Date_Requested` matches the specific format required by the reservation API (e.g., YYYY-MM-DD).

## 3. The CRM / Booking Action
* **Platform:** OpenTable API / Resy API / Google Sheets
* **Action:** Create Reservation.
* **Mapping:** Map the parsed webhook data into the corresponding fields in the reservation system.

## 4. The Confirmation (SMS)
* **Platform:** Twilio (or GoHighLevel)
* **Action:** Send SMS Message.
* **To:** `Customer_Phone`
* **Message Body:** 
  > "Hi {{Customer_Name}}, your reservation for {{Party_Size}} at Luigi's Trattoria is confirmed for {{Date_Requested}} at {{Time_Requested}}. If you need to cancel, please reply to this text. We look forward to hosting you!"

## 5. The Notification (Internal)
* **Condition:** ONLY trigger if `Special_Requests` is NOT empty.
* **Platform:** Slack (or Manager's Email)
* **Action:** Send Message to `#front-desk`
* **Message Body:**
  > "🚨 Special Request for tonight: {{Customer_Name}} (Party of {{Party_Size}} at {{Time_Requested}}) noted: {{Special_Requests}}. Please ensure the hostess is aware."

