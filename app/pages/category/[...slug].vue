<script setup lang="ts">

    import { useHead, useRoute, useWPNodeByUri, useAsyncData } from '#imports'
    import { useWPGeneralSettings } from '#wpnuxt'

    const route = useRoute()
    
    const { data: settings } = await useAsyncData('settings', () => useWPGeneralSettings())

    useHead({
        title: settings.value?.data?.title
    });

</script>

<template>
    <div class="container">
        <!-- route.params.slug[0] fetches value behind last trailing slash in URL -->
        <UsePostsByCategory :category-name="route.params.slug[0]"></UsePostsByCategory>
    </div>
</template>

<style scoped>
    .container {
        margin-top: 160px;
    }
</style>