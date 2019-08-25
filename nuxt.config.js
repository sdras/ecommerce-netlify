import data from './static/storedata.json';
let dynamicRoutes = () => {
    return new Promise(resolve => {
        const routes = [];
        routes.push(data.map(el => `product/${el.id}`));
        // fr routes
        routes.push(['/fr', ...data.map(el => `fr/product/${el.id}`)]);
        resolve(routes);
    });
};

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        script: [{ src: 'https://js.stripe.com/v3/' }],
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },

            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Montserrat:300,600|PT+Serif&display=swap',
            },
        ],
    },

    router: {
        middleware: 'i18n',
    },

    generate: {
        routes: dynamicRoutes,
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['normalize.css', { src: '~/assets/main.scss', lang: 'sass' }],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [`~/plugins/currency-filter.js`, `~/plugins/vue-i18n.js`],
    /*
     ** Nuxt.js modules
     */
    modules: [],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
    },
};
