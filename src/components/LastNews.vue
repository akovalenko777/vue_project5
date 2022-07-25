<template>
    <section id="teams" class="section teams">
        <div class="container">
            <carousel :settings="sliderSettings" :breakpoints="breakpoints">
                <slide v-for="(item, index) in line" :key="index">
                    <router-link :to="{name: 'MyOneNews', params:{title: item.title}}" class="news-line-item">
                        <div class="news-pic">
                            <img :src="item.urlToImage" :alt="item.title" class="img-responsive">
                        </div>
                        
                        <div class="person-content">
                            <h4>{{ item.title }}</h4>
                            <h5 class="role" v-format-date="{sep:'/', showTime: true}">{{ item.publishedAt }}</h5>
                            <p>{{ item.description }}</p>
                        </div>
                    </router-link>
                </slide>

                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </carousel>
        </div>
        
        
        
    </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import axios from 'axios'



export default {
    name: 'NewsLine',
    components: {
        Carousel,
        Slide,
        Navigation,
        Pagination,
        
    },
    data(){
        return {
            line:[],
            initCounter: false,
            sliderSettings: {
                itemsToShow: 4,
                itemsToScroll: 1,
                snapAlign: 'start',
                wrapAround: true,
            },
            breakpoints: {
                350: {
                    itemsToShow: 1,
                },
                // 700px and up
                700: {
                    itemsToShow: 3,
                },
                // 1024 and up
                1024: {
                    itemsToShow: 4,
                },
            },
        }
        
    },
    created(){
        let url = 'https://newsapi.org/v2/everything?q=apple&apiKey=e23c4f3c33e34a7ab9e2bfab2dcfe29f'
            url += '&language=en'
            url += '&pageSize=10'
            url += '&page=1'
            axios
                .get(url)
                .then(resp=>{
                    this.line = resp.data.articles
                })
    }
}
</script>

<style lang="scss">
.news-pic {
    position: relative;
    padding-top: 53%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        left: 0;
        top: 0;
    }
}
.carousel__track {
    align-items: flex-start;
}
.news-line-item {
    display: block;
    padding: 0 10px;
}

.carousel__prev {
    background-color: transparent;
    border-radius: 0;
    svg {
        display: none;
    }
    &:before {
        content: '';
        border-bottom: 2px solid #f00;
        border-left: 2px solid #f00;
        display: block;
        width: 20px;
        height: 20px;
        position: absolute;
        left: 4px;
        top:5px;
        transform: rotate(45deg);
    }
}

.carousel__pagination {
    counter-reset: mycnt;
    li {
        counter-increment: mycnt;
        button {
            width: 20px;
            height: 20px;
            position: relative;
            &::before {
                content: '0'counter(mycnt);
                display: inline-block;
                width: 20px;
                height: 20px;
                position: absolute;
                left: 0;
                top: 0;
                color:#fff;
            }
        }
    }
}

</style>