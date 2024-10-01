/**
 * Get Bank info
 *
 * @param {string} card number or first 6 digits of the card you want to check
 * @return Bank info
 * @customfunction
 */

function getBankInfo(cardNumber) {
  // Get the first 6 digits (BIN) from the card number
  var bin = cardNumber.toString().slice(0, 6);

  // Your API Key from bincodes.com
  var apiKey = 'YOUR API KEY FROM BINCODES.COM'; // replace this with your actual API key

  // Construct the URL for the API request
  var url = 'https://api.bincodes.com/bin/json/' + apiKey + '/' + bin + '/';

  // Make the HTTP GET request
  var response = UrlFetchApp.fetch(url);
  var data = JSON.parse(response.getContentText());

  // Check if the bank information exists in the response
  if (data && data.bank) {
    return data.bank;
  } else {
    return "Bank not found";
  }
}
