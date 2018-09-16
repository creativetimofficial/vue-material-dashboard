// const CryptoJS = require('cryptojslib');
const Cookies = require('js-cookie');
function getRandomAddress() {
  console.log('- -')
  var  ethcount=Cookies.get('ethcount');
  if(ethcount!=''&&ethcount!=undefined){
    return ethcount
  }
  const pubKey = Math.random().toString(36).substring(7);
  // pubKey -> address
  var pubKeyWordArray = CryptoJS.enc.Hex.parse(pubKey);
  var hash = CryptoJS.SHA3(pubKeyWordArray, { outputLength: 256 });
  var address = hash.toString(CryptoJS.enc.Hex).slice(24);

  Cookies.set('ethcount', address, {  path: '/',expires: 365  });
  return address;
}

export default getRandomAddress
