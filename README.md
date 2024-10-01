# Custom Google Sheets Function for BIN Lookup
A google sheets' custom formula for fetch bank information using card number

For this formula we are using free API access to [bincodes.com](https://www.bincodes.com).
Register and obtain your own API key for next steps.

# Features

Extracts the first 6 digits (BIN) from the card number.
Sends a request to the bincodes.com API to retrieve the associated bank information.
Returns the bank name directly in the Google Sheet.

# Setup Instructions

1. Open **Google Sheets** and go to **Extensions > Apps Script.**
2. In the Apps Script editor, replace the default code with the code from main.js
3. Replace the placeholder YOUR_API_KEY in the script with your actual API key
4. Save your project and use the custom function in your sheet.
