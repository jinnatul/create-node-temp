<div align='center'>

![npm](https://badgen.net/npm/v/nano-app)
![publish size](https://badgen.net/packagephobia/publish/nano-app)
![stars](https://badgen.net/github/stars/jinnatul/nano-app)
![npm](https://img.shields.io/npm/dw/nano-app)
![total downloads](https://badgen.net/npm/dt/nano-app)

</div>

<a href="https://www.producthunt.com/posts/nano-app?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-nano&#0045;app" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=579531&theme=light" alt="nano&#0045;app - A&#0032;command&#0045;line&#0032;application&#0032;for&#0032;Node&#0046;js&#0032;projects | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

# Node App

**nano-app** is a command-line application, here you can easily create your node.js project structure.


## Installation

Install my-project with npm

```bash
  npx nano-app my-project
  cd my-project
```

It will create a directory called my-project inside the current folder.
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-project
├── package.json
├── package-lock.json
├── .prettierrc
├── .prettierignore
├── .gitignore
├── .env.production
├── .env.development
├── .babelrc
├── node_modules
└── src
    ├── config
        ├── cloudinary.js
        ├── database.js
        ├── passport.js
        └── sendEmail.js
    ├── controllers
        └── authController.js
    ├── middlewares
        ├── authorizedUser.js
        └── google.js
    ├── models
        ├── auditLogs.js
        ├── userRoleMaps.js
        ├── users.js
        └── validations.js
    ├── routes
        ├── authRouter.js
        └── router.js
    ├── utils
        ├── errors
            └── globalErrorHandler.js
        ├── responses
            ├── sendData.js
            ├── sendMessage.js
            └── sendResponse.js
        ├── templates
            ├── forgotMail.js
            └── signUpMail.js
        ├── createJWT.js
        └── createMFA.js
    ├── app.js
    └── server.js
```
## Features

- ES6+ configuration (Babel)
- Better error handling
- Clean code structure
- Google authentication (Passport strategy)
- Email authentication with OTP verification (Sent mail using Google Gmail)
- Implement MFA using speakeasy
- MFA QR code images stored in Cloudinary
- Forgot Password via mail
- Modern data validation using Joi
- Forgot password mail template
- OTP validation mail template




## Environment Variables

To run this project, you will need to add the following environment variables to your .env.development (Development mode) or .env.production (Production mode) file

- `DB_NAME`
- `DB_USER`
- `DB_PASS`
- `HOST`
- `SCHEMA`

If you want to store MFA QR code at [Cloudinary](https://cloudinary.com)

- `CLOUD_NAME`
- `CLOUD_KEY`
- `CLOUD_SECRET`

If you want to use google login [Google console](https://console.cloud.google.com)

- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_CALLBACK_URL`

If you want to use email verification

- `EMAIL`
- `EMAIL_PASS` (App password)



## API Reference

### Google Log In

```
  Redirect /api/v1/auth/google
```
For google login you need to set your `FrontEnd URL` at .env.development or .env.production [`FRONT_END`]

### Sign Up

```
  POST /api/v1/auth/signup
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `f_name` | `string` | **Required**. Your first name |
| `l_name` | `string` | **Required**. Your last name |
| `email` | `string` | **Required**. Your email |
| `phone` | `string` | **Required**. Your phone number |
| `password` | `string` | **Required**. Your password |


### Sign In

```
  POST /api/v1/auth/signin
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your email |
| `password` | `string` | **Required**. Your password |


### Resent OTP

```
  POST /api/v1/auth/resent-otp
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your email |


### Verify OTP

```
  POST /api/v1/auth/verify-otp
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your email |
| `otp` | `string` | **Required**. Your otp |


### Verify MFA

```
  POST /api/v1/auth/verify-mfa
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `int` | **Required**. Your user id |
| `token` | `string` | **Required**. Your mfa token |


### Forgot Password

```
  POST /api/v1/auth/forgot-password
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your email |


### Reset Password

```
  POST /api/v1/auth/reset-password
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `reset_link` | `string` | **Required**. Reset link |
| `password` | `string` | **Required**. Your password |


### Get Profile

```
  GET /api/v1/auth/profile
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your JWT token |


## Run Locally

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Deployment

To deploy this project run

```bash
  npm run start
```


## Usage/Examples

```
npx nano-app api
```

![Part 1](https://user-images.githubusercontent.com/31995155/229435619-70b424ca-d867-4dae-8212-5f107e42e0bb.png)

![Part 2](https://user-images.githubusercontent.com/31995155/229435818-5a6aa443-ad4c-4179-9b30-59ac7e89ac13.png)


![Part 3](https://user-images.githubusercontent.com/31995155/229435893-6517d7de-0e27-44bc-880f-b2f0e9be397a.png)
## Demo

Insert gif or link to demo

[![Demo Video]](https://user-images.githubusercontent.com/31995155/185107105-5df974f9-ccf0-467d-a365-5225e8d017eb.mp4)


## Tech Stack

**Server:** Node, Express


## Authors

- [@jinnatul](https://www.github.com/jinnatul)


## Feedback

If you have any feedback, please reach out to us at morolswediu@gmail.com




## Support

For support, email morolswediu@gmail.com


## License

[MIT](https://github.com/jinnatul/node-app/blob/master/LICENSE)



If you like, Give a star ⭐

<h3 align="left"> 🧡 Support:</h3>
<p><a href="https://www.buymeacoffee.com/jinnatul"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="Morol" /></a></p>