import Vue from 'vue';

export default ({ app, store }) => {
	Vue.filter('currency', function(value) {
		// Using a template literal here, that's why there are two dollar signs.
		// The first is an actual dollar.
		const currency = store.getters.locale.currency;
		return `${currency}${parseFloat(value).toFixed(2)}`;
	});
};
