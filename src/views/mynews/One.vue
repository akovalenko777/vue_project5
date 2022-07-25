<template>
    <div class="container">
        <h1>{{ item.title }}</h1>
        <time v-format-date="{sep:'/', showTime: true}">{{ item.publishedAt }}</time>
        <div class="news-pic">
            <img :src="item.urlToImage" :alt="item.title" class="img-responsive">
        </div>
        <div class="content">{{ item.content }}</div>
        <br>
        <router-link to="/mynews" class="btn">Back to all news</router-link>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            item: {}
        }
    },
    created(){
        let url = `https://newsapi.org/v2/everything?q=${this.$route.params.title}&searchIn=title&apiKey=e23c4f3c33e34a7ab9e2bfab2dcfe29f`
        axios
            .get(url)
            .then(resp => {
                this.item = resp.data.articles[0]
            })
    }
}
</script>