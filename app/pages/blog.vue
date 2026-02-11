<script setup lang="ts">

    import { useHead, useAsyncData } from '#imports'
    import { useWPGeneralSettings } from '#wpnuxt'

    const { data: settings } = await useAsyncData('settings', () => useWPGeneralSettings())

    useHead({
        title: "Blog"
    });

</script>

<template>
    <div class="container">
        <NuxtLayout>
            <h1>Blog Posts</h1>
            <UsePosts/>
        </NuxtLayout>
    </div>
</template>