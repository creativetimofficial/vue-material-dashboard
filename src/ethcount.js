// const CryptoJS = require('cryptojslib');

function getRandomAddress() {
  console.log('- -')
  const pubKey = Math.random().toString(36).substring(7);
  // pubKey -> address
  var pubKeyWordArray = CryptoJS.enc.Hex.parse(pubKey);
  var hash = CryptoJS.SHA3(pubKeyWordArray, { outputLength: 256 });
  var address = hash.toString(CryptoJS.enc.Hex).slice(24);
  return address;
}

export default getRandomAddress
