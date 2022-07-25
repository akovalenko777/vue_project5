<template>
    <section id="features" class="features section">
        <div class="container">
            <div class="row">
                <div v-for="(feature, index) in featuresListData" :key="index" class="col-md-4 col-sm-6 feature text-center">
                    <span class="icon" :class="feature.icon"></span>
                    <div class="feature-content">
                        <h5>{{ feature.title }}</h5>
                        <p>{{ feature.text }}</p>
                    </div>
                </div>
            </div>
            <font-awesome-icon icon="fa-solid fa-user-secret" />

            <font-awesome-icon icon="fa-brands fa-facebook-f" />
            <font-awesome-icon icon="fa-brands fa-android" />
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
    name: 'FeaturesList',
    data () {
        return {
            featuresListData: []
        }
    },
    components: {
        FontAwesomeIcon
    },
    created() {
        axios
            .get('../data/features.json')
            .then(resp=>{
                this.featuresListData = resp.data
            })
            .catch(err => {
                this.$toast.error(err);
            })
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/features.scss';
</style>