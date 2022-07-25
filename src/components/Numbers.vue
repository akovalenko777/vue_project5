<template>
    <div id="numbers-sections">
        <div class="container">
            <div class="numbers">
                <div v-for="(c, index) in values" :key="index" class="counter-item">
                    <vue3-autocounter 
                        :ref="`counter${index+1}`"
                        :startAmount="0"
                        :endAmount="c.value"
                        separator="" 
                        :duration="3" 
                        :autoinit="false"/>
                </div>
            </div>
            <button type="button" class="btn" @click="startCounters">Start</button>
        </div>
    </div>
</template>

<script>
import Vue3autocounter from 'vue3-autocounter';

export default {
    data(){
        return {
            values:[
                {
                    value: 1050,
                    title: 'Lorem ipsum'
                },
                {
                    value: 750,
                    title: 'Lorem ipsum'
                },
                {
                    value: 550,
                    title: 'Lorem ipsum 2'
                },
                {
                    value: 86,
                    title: 'Lorem ipsum 3'
                }
            ]
        }
    },
    computed: {
        numberOffset(){
            return document.getElementById('numbers-sections').offsetTop - window.outerHeight
        }
    },
    components: {
        'vue3-autocounter': Vue3autocounter
    },
    created() {
        window.addEventListener('scroll', this.checkStartCounters)
    },
    methods: {
        checkStartCounters(){
            if(window.scrollY > this.numberOffset){
                this.startCounters()
                window.removeEventListener('scroll', this.checkStartCounters)
            }
        },
        startCounters(){
            for(let c in this.$refs){
                this.$refs[c][0].start()
            }
        }
    }
}
</script>

<style lang="scss">
.numbers {
    font-size: 50px;
    font-weight: 600;
    display: flex;
    justify-content: space-evenly;
    > span {
        display: inline-block;
        text-align: center;
        flex-basis: 25%;
    }
}

@media screen and (max-width: 460px){
    .numbers {
        flex-direction: column;
        align-items: center;
    }
}
</style>