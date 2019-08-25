<template>
    <section>
        <ul>
            <li>{{ $translate('AppFooterLinks.about') }}</li>
            <li>{{ $translate('AppFooterLinks.company') }}</li>
            <li>{{ $translate('AppFooterLinks.locations') }}</li>
            <li>{{ $translate('AppFooterLinks.contact') }}</li>
            <li>{{ $translate('AppFooterLinks.hours') }}</li>
        </ul>
        <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
        </ul>
        <ul>
            <h4>Newsletter:</h4>
            <input type="text" />
        </ul>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
    width: 80%;
    margin-left: 10%;
    padding: 40px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

ul {
    list-style: none;
    padding-left: 0;
}

input {
    width: 100%;
}

@media screen and (min-width: 850px) {
    section {
        padding: 40px !important;
    }
}
</style>
