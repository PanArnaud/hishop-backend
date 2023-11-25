# HiShop - Back-end

## Prerequisites
- Ensure Node and NPM (or yarn) are installed.
- Install firebase-tools globally.
- Create a Stripe account.
- Create a Firebase project and activate Hosting, Cloud Firestore, and Functions services.

## Installation
Start by cloning the git repository. In the command prompt of a terminal, navigate to the project directory.

Run the command `npm i` to install all the necessary packages.

Next, define the environment variables for the project by executing the following command:
`firebase functions:config:set [KEY]="[VALUE]"`

Here are the KEY values to set:

- `stripe.secret_key`: The secret key obtainable from the Stripe dashboard.
- `domains.prod`: The URL of the Firestore hosting for the front-end project.

To verify that the variables have been set successfully, run the command `firebase functions:config:get`.

## Deployment of Functions
To deploy the functions, execute the command `firebase deploy --only functions`.
