<script setup lang="ts">

    import { useHead, useRoute, useWPNodeByUri, usePrevNextPost, useAsyncData } from '#imports'
    import { useWPGeneralSettings } from '#wpnuxt'

    const route = useRoute()

    const { data: post } = useAsyncData('post-' + route.path, () => useWPNodeByUri({ uri: route.path }))
    // const { prev, next } = await usePrevNextPost(route.path)

    const { data: settings } = await useAsyncData('settings', () => useWPGeneralSettings())

    if (post.value?.data.title) {
        useHead({
            title: settings.value?.data?.title + " | " + post.value?.data.title
        });
    }

</script>

<template>
    <NuxtLayout>
        <UsePostByURI/>
        <PrevNext/>
    </NuxtLayout>
</template>