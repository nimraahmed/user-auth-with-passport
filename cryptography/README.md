## Public Key/Asymmetric Cryptography

To understand public key cryptography, it's important to distinguish between symmetric and asymmetric cryptography. Asymmetric cryptography has a public and a private key associated with it. A more basic form (used by TLS) is symmetric cryptography and only has a single key.

The two keys in asymmetric cryptography are mathematically linked and if you have a public key, you can give it to anyone as long as you keep the private key secret. You can then use the key pair for:

1. Encrypting data (encrypt with public key, decrypt with private key)
2. Verifying identities (encrypt with private key, decrypt with public key)

### Trap-door functions

This is a one-way function (like a sha-256 hash function) that takes a big piece of data and compresses it into a deterministic (same value, every time) small piece of data/hash. With a trap-door function, you cannot go backwards, i.e., you can't derive the original data from the output. It's almost impossible to get the same output (like the hash with sha-256) for two different pieces of data.

The trap-door function used for public key cryptography is something called elliptic curve multiplication which mathematically links the public and private keys. So using the private key, you can drive the public key, but with the public key, you can't get back to the private key, allowing us to share the public key with anyone and use it for encryption and verification.

The signing and verificatiob processes implemented in this repo are exactly what JWT uses under the hood. Large packets of data transferred over the net can slow down searches; a much easier way to do it is by compressing it into a much smaller form, i.e., JWT.
