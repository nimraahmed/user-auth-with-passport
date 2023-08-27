## About this repo

The purpose of this repo is to explore two passport strategies: Passport Local & Passport JWT. To fully understand JWT, it's important to get a good understanding of cryptography (implemented & explained in the cryptography directory) & the role it plays in the JWT signature.

## A few important notes

When it comes to user authentication, two of the most basic authentication strategies are:

1. Passport Local Strategy
2. Passport JWT Strategy

Note that the purpose of authentication is to determine who the user is.

There's OAuth too, but this protocol is used mostly for authorization (which tells us who has access to what resources).

### About Passport library

Passport.js is a middleware with a plethora of strategies, but this repo explores only local and JWT. When it comes to middleware, it's important to remember that order is important.

On each HTTP request, Passport uses a "Strategy" to determine if the requestor exists and can view the requested resource.
