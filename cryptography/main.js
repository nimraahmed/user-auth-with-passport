const fs = require("fs");
const encrypt = require("./encrypt");
const decrypt = require("./decrypt");

//encryption
const publicKey = fs.readFileSync(__dirname + "/id_rsa_pub.pem", "utf-8");

//store buffer
const encryptedMessage = encrypt.encryptWithPublicKey(
  publicKey,
  "Super secret message"
);

//will just produce gibberish
console.log(encryptedMessage.toString());

//decryption
const privateKey = fs.readFileSync(__dirname + "/id_rsa_priv.pem", "utf-8");

const decryptedMessage = decrypt.decryptWithPrivateKey(
  privateKey,
  encryptedMessage
);

//Convert buffer to string and print
console.log(decryptedMessage.toString());
