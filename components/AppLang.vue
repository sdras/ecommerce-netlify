<template>
	<div class="appLang">
		<img :src="activeLocaleFlag" :alt="`flag ${locale} icon`" />
		<img class="icon-chevron-down" src="/icon-chevron.svg" alt="chevron icon" />
		<div class="appLang__selectLang">
			<nuxt-link
				class="appLang__selectLang__lang"
				v-for="lang in availableLocales"
				:key="lang"
				v-if="lang !== locale"
				:to="lang !== 'en' ? `/${lang}${$route.fullPath}` : $route.fullPath.replace(/^\/[^\/]+/, '')"
			>
				<img :src="`/flag-${lang}.svg`" alt="service icon" />
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'AppLang',
	computed: {
		...mapGetters(['locale', 'availableLocales']),
		activeLocaleFlag() {
			return `/flag-${this.$i18n.locale}.svg`;
		},
	},
};
</script>

<style lang="scss" scoped>
.appLang {
	position: relative;
	cursor: pointer;
	height: 20px;
	width: 20px;
	position: absolute;
	top: 40px;
	right: 50px;

	&:hover {
		.appLang__selectLang {
			visibility: visible;
		}
	}

	.icon-chevron-down {
		position: absolute;
		top: 7px;
		right: -10px;
		height: 5px;
		width: 5px;
	}

	.appLang__selectLang {
		position: absolute;
		right: 0px;
		visibility: hidden;

		.appLang__selectLang__lang {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			font-size: 10px;
			color: black;
			font-weight: bold;
			transition: all 0.15s;

			&:hover {
				color: blue;
			}
			img {
				max-height: 20px;
				max-width: 20px;
				margin-left: 10px;
			}
		}
	}
}
</style>
