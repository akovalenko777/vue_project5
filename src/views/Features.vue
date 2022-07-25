<template>
    <div class="container">
        <page-title :title="'Features'" />
        <FeaturesList />
    </div>
</template>

<script>
import FeaturesList from '../components/FeaturesList.vue';
import PageTitle from '../components/PageTitle.vue';
export default {
    name: "Features",
    components: { FeaturesList, PageTitle }
}
</script>

<style lang="scss" scoped>
ul {
    padding: 0;
    margin: 0;
    li {
        margin-bottom: 10px;
    }
}
</style>