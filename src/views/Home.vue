<template>
  <div class="home">
    <last-news />
    <PromoBlock title="Hello Vue" pic="work-1.jpg" />
    <FeaturesList />
    <numbers />
    <WorksList />
  </div>
</template>

<script>
import FeaturesList from '../components/FeaturesList.vue';
import WorksList from '../components/WorksList.vue';
import PromoBlock from '../components/PromoBlock.vue';
import LastNews from '../components/LastNews.vue';
import Numbers from '../components/Numbers.vue';
export default {
    name: "Home",
    components: { FeaturesList, WorksList, PromoBlock, LastNews, Numbers }
}
</script>
