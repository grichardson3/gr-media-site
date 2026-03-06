<script setup lang="ts">

    import { useHead, useAsyncData } from '#imports'
    import { useWPGeneralSettings } from '#wpnuxt'
    
    const { data: settings, pending, error } = await useAsyncData('settings', () => useWPGeneralSettings())

    useHead({
        title: settings.value?.data?.title
    });

</script>

<script lang="ts">
    import VueCanvas from "../components/canvas.component.vue";
    export default {
        name: "App",
        components: {
            VueCanvas
        },
    };

</script>

<template>
    <VueCanvas/>
    <div class="container">
        <h1>Posts by Category</h1>
        <UsePostsAndSeperateCategories/>
    </div>
</template>

<style scoped>
    .container {
        min-height: 50vh;
    }
</style>