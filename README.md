# 🛍 E-Commerce Store with Nuxt, Netlify Functions, Tigris Cloud and Stripe

> This is forked from [sdras/ecommerce-netlify](https://github.com/sdras/ecommerce-netlify).
> 
> We have made the e-commerce site dynamic by using 
> [Tigris](https://www.tigrisdata.com/jamstack) as the backend and also 
> added search capability. Tigris is responsible for storing the product 
> catalog and providing querying and search capabilities. It is integrated 
> with Netlify Functions.

Demo site is here: [E-Commerce Store](https://nuxt-ecommerce-netlify.netlify.app/)

![screenshot of site](https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/ecommerce-screenshot.jpg "E-Commerce Netlify Site")

# ⚙️ Deploying the site

All you need is a [Github](https://github.com), 
[Netlify][https://www.netlify.com/] and Tigris account
([sign up for a free account](https://www.tigrisdata.com/jamstack#signup-form)). 
Now, Hit "Deploy" and follow instructions to deploy app to your Netlify account.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tigrisdata/tigris-netlify-ecommerce&utm_source=github)

## 📖 Building & Running locally

### Prerequisites

1. Tigris installed on your dev computer
   - For **macOS**: `brew install tigrisdata/tigris/tigris-cli`
   - Other operating systems: [See installation instructions here](https://docs.tigrisdata.com/cli/installation)
2. Netlify CLI installed on your dev computer
   ```shell
   npm install netlify-cli -g
   ```
3. Node.js version 16+

### Instructions

1. Install dependencies
   ```shell
   npm install
   ```
2. Start Tigris local development environment
   ```shell
   tigris dev start
   ```
3. Run the app server locally with hot reload to preview your site
   ```shell
   netlify dev
   ```

:tada: All done. Feel free to play around. :tada:

## Helpful links

- Getting started with Tigris: [Quickstart](https://docs.tigrisdata.com/quickstart)
- Explanation of Netlify Functions and Stripe: [Let's Build a Jamstack E-Commerce Store with Netlify Functions](https://css-tricks.com/lets-build-a-jamstack-e-commerce-store-with-netlify-functions/)
- Explanation of dynamic routing in Nuxt for the individual product pages: 
  [Creating Dynamic Routes in Nuxt Application](https://css-tricks.com/creating-dynamic-routes-in-a-nuxt-application/)
