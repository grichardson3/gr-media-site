<script setup lang="ts">

    import { useHead, useAsyncData } from '#imports'
    import { useWPGeneralSettings } from '#wpnuxt'

    const { data: settings } = await useAsyncData('settings', () => useWPGeneralSettings())

    useHead({
        title: settings.value?.data?.title
    });

</script>

<template>
    <NuxtLayout>
        <UsePosts/>
    </NuxtLayout>
</template>