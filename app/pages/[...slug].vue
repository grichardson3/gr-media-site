<script setup lang="ts">
    import { useHead, useRoute, useWPNodeByUri, usePrevNextPost, useAsyncData } from '#imports'

    const route = useRoute()
    const { data: post } = useAsyncData('post-' + route.path, () => useWPNodeByUri({ uri: route.path }))

    const { prev, next } = await usePrevNextPost(route.path)

    if (post.value?.data?.title) {
        useHead({
            title: post.value.data.title
        });
    }

    console.log(route.path);
</script>

<template>
    <NuxtLayout>
        <h1>{{ post.data.title }}</h1>
        <span v-html="post.data.content"></span>
    </NuxtLayout>
</template>