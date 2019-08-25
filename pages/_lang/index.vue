<template>
    <div>
        <app-textlockup />
        <app-sales-boxes />
        <app-textlockup>
            <template v-slot:img>
                <img src="/bag.jpg" alt="bag" />
            </template>
            <template v-slot:new>{{ $translate('Pages.Index.new') }}</template>
            <template v-slot:sale>{{ $translate('Pages.Index.sale') }}</template>
            <template v-slot:collection>{{ $translate('Pages.Index.collection') }}</template>
            <template v-slot:details>{{ $translate('Pages.Index.details') }}</template>
        </app-textlockup>
        <app-featured-products />
    </div>
</template>

<script>
import AppTextlockup from '~/components/AppTextlockup.vue';
import AppSalesBoxes from '~/components/AppSalesBoxes.vue';
import AppFeaturedProducts from '~/components/AppFeaturedProducts.vue';

export default {
    components: {
        AppTextlockup,
        AppSalesBoxes,
        AppFeaturedProducts,
    },
};
</script>

<style>
.test {
    margin: 3vh;
}

main {
    width: 75vw;
}
</style>
