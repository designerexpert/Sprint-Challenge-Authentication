<!-- Answers to the Short Answer Essay Questions go here -->
# Question: Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
1. Answers:
    * Middleware: Is software that is ran on the server either globally or locally before the route is handled, it is usually passed req, res, and next and it is chained up with other middleware until a result is sent back to the request.
    * Sessions: Sessions are cookies created by the server and stored in the browser locally, they persist after closing the browser, and contain information that can help authenticate a user, but can contain information to identify, locate, and keep track of data.
    * Bcrypt: A node extension used in combination with express to encrypt, and compare passwords and it returns a dificult to hack hash. Bcrypt implements functionality to limit the amount of times a decryption can be executed per user, and thus increases the dificulty for hackers to reverse-engineer the passwords for a given user.
    * JWT: JSON Web Token, is a token that is generated serverside, and sent on the initial request to the client. This token is then required from the client everytime authentication is needed from the server. The token may have a speciffic lifespan, and can persist locally on the client. JWT tokens have an encryption that is specifically useful because it makes it resillient to MIM attacks and other hacking attempts, and due to the nature of the token it will eventually expire making the user having to authenticate again with the server through a log-in or similar method to obtain a new token.
# Question: What does bcrypt do in order to prevent attacks?
1. Answers:
    * Bcrypt encrypts a password and this makes it very dificult to hack.
    * Bcrypt implements functionality to limit the amount of times a decryption can be executed per user by increasing the time it takes to solve each decryption, and thus increases the dificulty for hackers to reverse-engineer the passwords for a given user.
# Question: What are the three parts of the JSON Web Token?
1. Answers:
    * Header: Contains the type of token and the hashing algoritm used
    * Payload: Contains information like: Issuer, expiration, subject, and audience, and aditionally the user.
    * Signature: This is used to verify the sender on the server, and ensure that the token was not altered in any way.