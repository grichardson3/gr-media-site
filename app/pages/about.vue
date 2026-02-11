<script setup lang="ts">

    import { useHead, useAsyncData } from '#imports'
    import { useWPGeneralSettings } from '#wpnuxt'

    const { data: settings } = await useAsyncData('settings', () => useWPGeneralSettings())

    useHead({
        title: "About"
    });

</script>

<template>
    <div class="container">
        <h2>About Me</h2>
    </div>
</template>