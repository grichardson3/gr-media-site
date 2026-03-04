<script setup lang="ts">

    import { useHead, useAsyncData } from '#imports'
    import { useWPGeneralSettings } from '#wpnuxt'

    const { data: settings } = await useAsyncData('settings', () => useWPGeneralSettings())

    useHead({
        title: "Portfolio"
    });

</script>

<template>
    <div class="container">
        <h2>Portfolio</h2>
    </div>
</template>

<style scoped>
    .container {
        margin-top: 160px;
    }
</style>