## Passport local

Passport Local Strategy uses cookies and express sessions. To understand this strategy, it's important to keep in mind the following:

1. Request headers are made by browsers and are basically metadata about our HTTP requests. Response headers are set by the server. The response header includes a set-cookie header which instructs the client to set cookies in subsequent request headers.
2. The HTTP protocol is stateless & each time you refresh your browser, you'll have to put in your credentials to authenticate yourself if there's no persistent storage. One option for persistent storage is cookies.
3. Under the hood, Passport uses sessions.
4. Sessions vs. Cookies -> Sessions are stored on the server side and can store bigger types of data. It can also store user credentials without having hackers tamper with it. Cookies store data in the browser that the browser then attaches to each request that it makes. You can't store credentials or sensitive information in cookes since hackers can easily access it.

### About Passport local strategy

You should use Passport local when you're authenticating against a username and password that's stored locally in your app's database. The word 'local' here refers to the application server instead of the end user. The strategy requires a verifyCallback function that accepts the credentials and calls done, providing a user.
