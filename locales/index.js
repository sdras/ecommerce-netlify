import fr from './fr.json';
import en from './en.json';

export const locales = {
	fr,
	en,
};

export const dateTimeFormats = {
	en: {
		short: {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		},
		long: {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			weekday: 'short',
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
		},
		login: {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long',
		},
	},
	fr: {
		short: {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		},
		long: {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long',
			hour: 'numeric',
			minute: 'numeric',
		},
		login: {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long',
		},
	},
};
