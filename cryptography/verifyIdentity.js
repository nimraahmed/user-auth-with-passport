const crypto = require("crypto");
const fs = require("fs");
const decrypt = require("./decrypt");
const recievedData = require("./signMessage").packageOfDataToSend; //data recieved from the sender

const hash = crypto.createHash(recievedData.algorithm);

const publicKey = fs.readFileSync(__dirname + "/id_rsa_pub.pem", "utf-8");

const decryptedMessage = decrypt.decryptWithPublicKey(
  publicKey,
  recievedData.signedAndEncryptedData
);

const decryptedMessageHex = decryptedMessage.toString();

const hashOfOriginal = hash.update(JSON.stringify(recievedData.originalData));
const hashOfOriginalHex = hash.digest("hex");

if (hashOfOriginalHex === decryptedMessageHex) {
  console.log(
    "Success! The data has not been tampered with and the sender is valid."
  );
} else {
  console.log(
    "Uh oh! Someone is trying to manipulate the data or someone else is sending this"
  );
}
