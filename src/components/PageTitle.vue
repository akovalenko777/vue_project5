<template>
    <h1 class="page_title">{{ title }}</h1>
</template>

<script>
export default {
    name: 'PageTitle',
    props: {
        title: {
            type: String,
            default: 'Hello Vue!'
        }
    }
}
</script>

<style scoped>
.page_title {
    text-align: center;
}
</style>