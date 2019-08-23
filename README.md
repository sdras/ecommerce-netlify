# 🛍 Ecommerce Store with Netlify Functions and Stripe

> A serverless function to process stripe payments with Nuxt, Netlify, and Lambda

Demo site is here: [E-Commerce Store](https://ecommerce-netlify.netlify.com/)

![screenshot of site](https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/ecommerce-screenshot.jpg "E-Commerce Netlify Site")

There are two articles explaining how this site is set up:

- Explanation of Netlify Functions and Stripe: [Let's Build a JAMstack E-Commerce Store with Netlify Functions](https://css-tricks.com/lets-build-a-jamstack-e-commerce-store-with-netlify-functions/)
- Explanation of dynamic routing in Nuxt for the individual product pages: [Creating Dynamic Routes in Nuxt Application](https://css-tricks.com/creating-dynamic-routes-in-a-nuxt-application/)

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# Run a local netlify dev server
$ netlify dev

# To install netlify cli
$ yarn add global netlify-cli
# or
$ npm install -g netlify-cli
```

Note that for the function to work, you'll need to get a Stripe secret key:

```bash
$ echo 'STRIPE_SECRET_KEY=<your-secret-key>' > .env
```

If you are going into production, you can add your environment variable in your Netlify project:

```
settings > Build & deploy > Environment
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
