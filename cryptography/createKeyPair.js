const crypto = require("crypto");
const fs = require("fs");

function genKeyPair() {
  //Generates an object where the keys are stored as privateKeys and publicKeys
  const keyPair = crypto.generateKeyPairSync("rsa", {
    modulusLength: 4096, //bits - standard for RSA
    publicKeyEncoding: {
      type: "pkcs1", // Public Key Cryptography Standards 1
      format: "pem", // Most common formatting choice
    },
    privateKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
  });

  //create public key file
  fs.writeFileSync(__dirname + "/id_rsa_pub.pem", keyPair.publicKey);

  //create private key file
  fs.writeFileSync(__dirname + "/id_rsa_priv.pem", keyPair.privateKey);
}

genKeyPair();
