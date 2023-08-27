const crypto = require("crypto");

// for data encryption
function encryptWithPublicKey(publicKey, message) {
  const bufferMessage = Buffer.from(message, "utf-8");

  return crypto.publicEncrypt(publicKey, bufferMessage);
}

//for digital signatures
function encryptWithPrivateKey(privateKey, message) {
  const bufferMessage = Buffer.from(message, "utf-8");

  return crypto.privateEncrypt(privateKey, bufferMessage);
}

module.exports.encryptWithPublicKey = encryptWithPublicKey;
module.exports.encryptWithPrivateKey = encryptWithPrivateKey;
