<template>
    <div id="app">
        <div v-if="cartUIStatus === 'idle'" class="payment">
            <h3>{{ $translate('AppCard.payment.title') }}</h3>
            <label for="email">{{ $translate('AppCard.payment.email.label') }}</label>
            <br />
            <input id="email" type="email" v-model="stripeEmail" :placeholder="$translate('AppCard.payment.email.placeholder')" />
            <br />
            <label for="card">{{ $translate('AppCard.payment.card.label') }}</label>
            <br />
            <small v-html="$translate('AppCard.payment.card.description')"></small>
            <card
                class="stripe-card"
                id="card"
                :class="{ complete }"
                stripe="pk_test_5ThYi0UvX3xwoNdgxxxTxxrG"
                :options="stripeOptions"
                @change="complete = $event.complete"
            />
            <button class="pay-with-stripe button" @click="pay" :disabled="!complete || !stripeEmail">
                {{ $translate('AppCard.payment.pay-with-stripe') }}
            </button>
        </div>

        <div v-else class="statussubmit">
            <div v-if="cartUIStatus === 'failure'">
                <h3>{{ $translate('AppCard.failure.title') }}</h3>
                <p>{{ $translate('AppCard.failure.description') }}</p>
                <button @click="clearCart">{{ $translate('AppCard.failure.button') }}</button>
            </div>

            <div v-else-if="cartUIStatus === 'loading'" class="loadcontain">
                <h4>{{ $translate('AppCard.loading.title') }}</h4>
                <p>{{ $translate('AppCard.loading.description') }}</p>
            </div>

            <div v-else-if="cartUIStatus === 'success'" class="loadcontain">
                <h4>{{ $translate('AppCard.status.success') }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
import { Card, createToken } from 'vue-stripe-elements-plus';

import { mapState } from 'vuex';

export default {
    components: { Card },
    computed: {
        ...mapState(['cartUIStatus']),
    },
    data() {
        return {
            complete: false,
            stripeOptions: {
                // you can configure that cc element. I liked the default, but you can
                // see https://stripe.com/docs/stripe.js#element-options for details
            },
            stripeEmail: '',
        };
    },
    methods: {
        pay() {
            createToken().then(data => {
                const stripeData = { data, stripeEmail: this.stripeEmail };
                this.$store.dispatch('postStripeFunction', stripeData);
            });
        },
        clearCart() {
            this.complete = false;
            this.$store.commit('clearCartCount');
        },
    },
};
</script>

<style lang="scss" scoped>
input,
button {
    width: 100%;
}

button {
    margin-top: 20px;
}

.payment {
    margin-top: 20px;
}

.stripe-card {
    margin-top: 10px;
    width: 100%;
    border: 1px solid #ccc;
    padding: 5px 10px;
}

.stripe-card.complete {
    border-color: green;
}
</style>
