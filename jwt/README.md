## About JWT

There are three parts to a JWT:

1. Header - includes the algorithm and the type. When transporting JWT over the web, the receiver won't know anything about it, and we include the algorithm as part of the header.
2. Payload - metadata about an entity (commonly the user). It shouldn't include credentials since it's publically available.
3. Signature - multiple types possible and depends on the algo you use

This repo uses:

1. RSA for private/public keys
2. SHA-256 hashing function to take the hash of header and payload data

and essentially goes over how JWT is issued and verified using built-in Node crypto library.

## How JWT works (dumbed-down)

1. Client logs in with username and password. A POST request is made to the server.
2. Server ensures username exists in the database and the credentials are valid. Then server creates JWT, signs it with a private key and sends it to the client.
3. JWT is stored in the browser's local storage until it expires and the client attaches the JWT to all subsequent requests. The server will receive the JWT in the request body and use its public key to verify the signature before giving the client access to some resource.
