//Tue Aug 06 2024 14:05:17 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const ciphertext = $response.body,
  trimmedCiphertext = ciphertext.startsWith("2") ? ciphertext.slice(1) : ciphertext,
  key = CryptoJS.enc.Utf8.parse("n84mUckz"),
  iv = CryptoJS.enc.Utf8.parse("n84mUckz");
try {
  const decryptedBytes = CryptoJS.DES.decrypt(trimmedCiphertext, key, {
      "iv": iv,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    }),
    decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
  if (!decryptedText) throw new Error("Decryption failed or produced empty result.");
  let modifiedText = decryptedText;
  modifiedText = modifiedText.replace(/isLock":\s*\d/g, "isLock\": 1");
  modifiedText = modifiedText.replace(/IsSVIPPic":\s*\d/g, "IsSVIPPic\": 1");
  modifiedText = modifiedText.replace(/userName":\s*".*?"/g, "userName\": \"TG@iuiuiui1\"");
  modifiedText = modifiedText.replace(/applePayPrice":\s*"\d+"/g, "applePayPrice\": \"0\"");
  modifiedText = modifiedText.replace(/price":\s*\d+/g, "price\": 0");
  modifiedText = modifiedText.replace(/lockType":\s*\d+/g, "lockType\": 0");
  modifiedText = modifiedText.replace(/downloadAdType":\s*\d+/g, "downloadAdType\": 1");
  modifiedText = modifiedText.replace(/"vipInfo"\s*:\s*null/g, "\"vipInfo\": {\"vipLevel\": 3, \"isVip\": true, \"isAuto\": true, \"iphoneTag\": \"\", \"ratio\": 0.7, \"rechargeLevel\": 1, \"endDate\": \"2099-09-09\"}");
  const encryptedBody = CryptoJS.DES.encrypt(modifiedText, key, {
      "iv": iv,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    }).toString(),
    finalEncryptedBody = "2" + encryptedBody;
  $done({
    "body": finalEncryptedBody
  });
} catch (iii1Il) {
  console.error("Error during decryption or processing:", iii1Il.message);
  $done({
    "body": ciphertext
  });
}