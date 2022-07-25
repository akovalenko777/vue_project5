<template>
    <vue3-progress />
    <template v-if="$route.path === '/'">
        <section class="banner" role="banner">
            <site-header />
            <div class="container">
                <div class="col-md-10 col-md-offset-1">
                    <div class="banner-text text-center">
                        <h1>Your Favorite One Page Multi Purpose Template</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna vel scelerisque nisl consectetur et.</p>
                        <a href="#" class="btn btn-large">Find out more</a>
                    </div><!-- banner text -->
                </div>
            </div>
        </section>
        <router-view/>
    </template>
	<template v-else>
        <site-header :stay-fixed="true" />
        <main class="main">
            <router-view/>
        </main>
    </template>

    <site-header :stay-fixed="smallHeader" />

    <site-footer />
	
</template>

<script>
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default {
	components: {
		SiteHeader,
        SiteFooter
	},
    computed: {
        smallHeader(){
            return this.$router.path !== '/'
        }
    },
    mounted() {
        this.$progress.finish();
    },
    created() {
        this.$progress.start();

        this.$router.beforeEach((to, from, next) => {
            console.log(to, from);
            this.$progress.start();
            next();
        });

        this.$router.afterEach(() => {
            this.$progress.finish();
        });
    },
}
</script>

<style>
.main {
    padding-top: 100px;
}
</style>
