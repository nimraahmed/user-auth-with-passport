## Passport JWT Strategy

To implement web authentication using JWT, this repo uses the jsonwebtoken NPM module and passport-jwt as the middleware.

### JWT Authentication Process

1. A registered user logs into the web app, which will do the basic password verification process (with the username & password) and is issued a JWT (in the response body) if the credentials are correct. The JWT includes information about the user and a signature from the server.
2. The client (usually a browser) stores the JWT in local storage/cookie.
3. On each HTTP request that needs authentication, the client will attach the JWT in (usually) the 'Authorization' HTTP header.
4. The server looks for JWT in the (usually) 'Authorization' HTTP header and verifies the signature.
5. If the signature is valid, the server decodes the JWT, usually gets the db ID of the user in the 'payload.sub' fields, looks up the user in the db, and stores the user object to use.
6. The user recieves route data.
