const crypto = require("crypto");
const hash = crypto.createHash("sha256");
const fs = require("fs");
const encrypt = require("./encrypt");
const decrypt = require("./decrypt");

const myData = {
  firstName: "Nimra",
  lastName: "Ahmed",
  socialSecurityNumber: `NO NO NO. Never put personal info in a digitally signed message since this form of cryptography does not hide data`,
};

//compress data into sha-256 hash first

//String version of our data that can be hashed
const myDataString = JSON.stringify(myData);

//Set value on hash object
hash.update(myDataString);

//hash data in hex format
const hashedData = hash.digest("hex");

//sign data

const senderPrivateKey = fs.readFileSync(
  __dirname + "/id_rsa_priv.pem",
  "utf-8"
);

const signedMessage = encrypt.encryptWithPrivateKey(
  senderPrivateKey,
  hashedData
);

const packageOfDataToSend = {
  algorithm: "sha256",
  originalData: myData,
  signedAndEncryptedData: signedMessage,
};

module.exports.packageOfDataToSend = packageOfDataToSend;
