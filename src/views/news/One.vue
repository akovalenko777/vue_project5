<template>
    <div class="container">
        <h1>{{ item.title }}</h1>
        <time>{{ item.publishedAt }}</time>
        <div>
        <img :src="item.urlToImage" :alt="item.title" />
        </div>
        <div class="content">
            {{item.content}}
        </div>
        <a :href="item.url" target="_blank">{{ item.source.name }}</a>
        <br>
        <router-link to="/news" class="btn">Back to all news</router-link>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "OneNews",
    data() {
        return {
            item:{}
        }
    },
    created(){
        console.log(this.$route.params.title);
        this.fetchData()
    },
    methods: {
        fetchData(){
            let url = 'https://newsapi.org/v2/everything?apiKey=e23c4f3c33e34a7ab9e2bfab2dcfe29f'
            url += '&searchIn=title'
            url += `&q=${this.$route.params.title}`
            url += '&language=en'
            url += '&sortBy=publishedAt'
            url += `&pageSize=1`
            url += `&page=1`
            axios
                .get(url)
                .then(resp=>{
                    this.item = resp.data.articles[0]
                })
        }
    }
}
</script>

