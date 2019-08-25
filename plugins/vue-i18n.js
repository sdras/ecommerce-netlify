import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { locales, dateTimeFormats } from '~/locales';

Vue.use(VueI18n);

export default ({ app, store }) => {
    // App i18n configuration
    app.i18n = new VueI18n({
        locale: store.state.locale,
        messages: locales,
        dateTimeFormats,
        fallbackLocale: 'en',
    });

    Vue.prototype.$translate = (translateKey, args = {}, count = -1) => {
        if (count >= 0 || Object.keys(args).length > 0) {
            return app.i18n.tc(translateKey, count, store.state.locale, args);
        }
        return app.i18n.t(translateKey, store.state.locale);
    };

    app.i18n.path = link => {
        if (app.i18n.locale === app.i18n.fallbackLocale) {
            return `${link}`;
        }

        return `/${app.i18n.locale}${link}`;
    };
};
