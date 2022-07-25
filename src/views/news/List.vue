<template>
    <div class="container">
        <h1>News</h1>
        <section id="teams" class="section teams">
            <div class="news-wrap">
                <div class="" v-for="(item, index) in list.articles" :key="index">
                    <div class="person news-item">
                        <router-link :to="{name:'OneNews', params:{ title:item.title }}">
                            <div class="news-pic">
                                <img :src="item.urlToImage" alt="" class="img-responsive">
                            </div>
                        </router-link>
                        <div class="person-content">
                            <h4>
                                <router-link :to="{name:'OneNews', params:{ title:item.title }}">{{ item.title }}</router-link>
                            </h4>
                            <h5 class="role">{{ item.publishedAt }}</h5>
                            <p>{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination :page="page" :total="totalPages" @to-page="goToPage" />
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import Pagination from '../../components/Pagination.vue'

export default {
    name: "NewsList",
    components: {
        Pagination
    },
    data(){
        return {
            list:{},
            pageSize: 20,
            page: 1
        }
    },
    computed: {
        totalPages () {
            const pages = Math.ceil(this.list.totalResults / this.pageSize)
            const maxPages = Math.ceil(100 / this.pageSize)
            return this.list.totalResults < 100 ? pages : maxPages
            // return 5
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData(){
            let url = 'https://newsapi.org/v2/everything?q=building&apiKey=e23c4f3c33e34a7ab9e2bfab2dcfe29f'
            url += '&language=en'
            url += '&sortBy=publishedAt'
            url += `&pageSize=${this.pageSize}`
            url += `&page=${this.page}`
            axios
                .get(url)
                .then(resp=>{
                    this.list = resp.data
                })
        },
        goToPage(page){
            this.page = page
            this.fetchData()
        }
    }
}
</script>

<style lang="scss" scoped>
.news-wrap {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
.news-pic {
    width: 100%;
    padding-top: 53%;
    position: relative;
    img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
