<template>
    <div>
        <div class="searchHeader">
            <input type="text" v-model="keyword" placeholder="Search Keyword" />
            <button 
                class="searchBtn"
                @click="search"
                :disabled="loading || !keyword"
                >{{(!loading) ? 'Search Products' : 'Loading...'}}</button>
        </div>

        <p class="noResults" v-if="usingSearch && !loading && searchResult.length<1">No results found..</p>

        <app-store-grid :data="(usingSearch) ? searchResult : storedata" />
    </div>
</template>
<script>
import AppStoreGrid from "~/components/AppStoreGrid.vue"
import { mapGetters, mapState } from 'vuex';

export default {
    components: {
        AppStoreGrid
    },
    computed: {
        ...mapGetters(["searchResult"]),
        ...mapState(["storedata"])
    },
    data() {
        return {
            keyword: "",
            error: "",
            loading: false,
            usingSearch: false,
        };
    },
    methods: {
        search() {
            this.loading = true;
            this.usingSearch = true;
            this.$store.dispatch("searchProducts", this.keyword).
            then(() => {
                this.loading = false;
            })

        }
    }
};
</script>

<style lang="scss" scoped>
.noResults {
    text-align: center;
}
.searchBtn {
    width: 180px;
}
.searchHeader {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 40px;
}
</style>