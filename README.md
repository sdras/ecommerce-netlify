# 🛍 Ecommerce Store with Netlify Functions, Tigris Cloud and Stripe

> A serverless function to process stripe payments with Nuxt, Netlify, Tigris Cloud and Lambda. Tigris Cloud is used as a backend to the store and providing storage, search, query for the product items.

Demo site is here: [E-Commerce Store](https://ecommerce-netlify.netlify.com/)

![screenshot of site](https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/ecommerce-screenshot.jpg "E-Commerce Netlify Site")

## 📖 1. Netlify & Tigris Cloud (Recommended)

All you need is a [Github](https://github.com), [Netlify][https://www.netlify.com/] and Tigris 
account([sign up for a free account](https://www.tigrisdata.com/beta#signup-form)). Now, Hit "Deploy"
and follow instructions to deploy app to your Netlify account

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tigrisdata/tigris-netlify-ecommerce&utm_source=github)


There are two articles explaining how this site is set up:
* Explanation of Netlify Functions and Stripe: [Let's Build a JAMstack E-Commerce Store with Netlify Functions](https://css-tricks.com/lets-build-a-jamstack-e-commerce-store-with-netlify-functions/)
* Explanation of dynamic routing in Nuxt for the individual product pages: [Creating Dynamic Routes in Nuxt Application](https://css-tricks.com/creating-dynamic-routes-in-a-nuxt-application/)
* Tigris Documentation: [Query](https://docs.tigrisdata.com/typescript/documents/query), [Search](https://docs.tigrisdata.com/typescript/documents/search), [Auth] (https://docs.tigrisdata.com/auth/)

## 📖 Building & Running locally

### Prerequisites

1. Install Tigris CLI
   - For **macOS**: `brew install tigrisdata/tigris/tigris-cli`
   - Other operating systems: [See installation instructions here](https://docs.tigrisdata.com/cli/installation)
2. Install Netlify CLI
   - npm install netlify-cli -g

``` bash
# install dependencies
$ yarn install or npm run install

# serve with hot reload at localhost:3000
$ yarn dev or npm run dev

# build for production and launch server
$ yarn build or npm run build
$ yarn start or npm run start

# generate static project
$ yarn generate or npm run generate

## Using Netlify CLI
# Sign into your Netlify account
$ netlify login

# Run the app server locally with hot reload to preview your site
$ netlify dev

# Build for production
$ netlify build

# Deploy
$ netlify deploy
```

For detailed explanation on how things work, checkout [Tigris docs](https://docs.tigrisdata.com/), [Nuxt.js docs](https://nuxtjs.org).
