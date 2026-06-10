# Automation Requirements Form

**Purpose:** To be completed jointly by the agency and the client *after* the proposal is signed, but *before* development begins. This ensures exact technical clarity and prevents scope creep for Make.com / Zapier / Custom API integrations.

---

## 1. Project Overview
* **Client Name:** Acme Corp
* **Project Name:** [e.g., Lead Routing Automation]
* **Primary Objective:** [e.g., Automatically send incoming Facebook Leads to the correct sales rep in HubSpot and notify them via Slack in under 60 seconds.]

## 2. Trigger (The Event that Starts the Automation)
* **App/System:** [e.g., Facebook Lead Ads]
* **Specific Event:** [e.g., New Lead form submitted on Campaign "Summer Sale 2026"]
* **Required Data Fields from Trigger:**
  * [x] First Name
  * [x] Last Name
  * [x] Email
  * [x] Phone Number
  * [x] Postal Code

## 3. Workflow Steps & Logic
*Describe exactly what happens after the trigger, step-by-step.*

* **Step 1: Data Formatting**
  * Format phone numbers to E.164 standard.
  * Capitalize first and last names.
* **Step 2: Routing Logic (Conditional)**
  * *IF* Postal Code = [Area A] -> Assign to Rep 1
  * *IF* Postal Code = [Area B] -> Assign to Rep 2
* **Step 3: CRM Entry**
  * **App:** [e.g., HubSpot]
  * **Action:** Create or Update Contact.
  * **Mapping:** Map formatted data to standard HubSpot properties.
* **Step 4: Internal Notification**
  * **App:** [e.g., Slack]
  * **Action:** Send message to `#sales-leads` channel.
  * **Format:** "🔥 New Lead: John - [Phone]. Assigned to: [Rep Name]"

## 4. Edge Cases & Error Handling
* **What happens if a field (like phone number) is left blank?**
  * [e.g., Create the contact anyway, but flag it as "Incomplete" in the CRM.]
* **What happens if the lead already exists in the CRM?**
  * [e.g., Do not create a duplicate; update the existing contact's "Last Inquiry Date".]
* **Who receives error notifications if an API fails?**
  * [e.g., Agency Support Email & Client Ops Manager]

## 5. Access & Credentials Required
*Please provide secure access (via LastPass/1Password or invite us as a user) to the following platforms:*
* [ ] [Platform 1 - e.g., Facebook Business Manager] (Sent: October 24, 2023)
* [ ] [Platform 2 - e.g., HubSpot Admin Access] (Sent: October 24, 2023)
* [ ] [Platform 3 - e.g., Slack Workspace Admin] (Sent: October 24, 2023)

## 6. Success Metrics
*How will we objectively know this automation is working?*
* [ ] Leads appear in CRM within 2 minutes of submission.
* [ ] 0% duplicate records created.
* [ ] Slack notifications tag the correct sales rep 100% of the time.

---
**Sign-off**
By signing below, the client agrees that these requirements represent the full scope of the automation. Changes requested after development begins may incur additional hourly fees.

**Client Signature:** ___________________________ **Date:** _______________
**Agency Signature:** ___________________________ **Date:** _______________

