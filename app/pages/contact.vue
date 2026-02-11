<script setup lang="ts">

    import { useHead, useAsyncData } from '#imports'
    import { useWPGeneralSettings } from '#wpnuxt'

    const { data: settings } = await useAsyncData('settings', () => useWPGeneralSettings())

    useHead({
        title: "Contact"
    });

</script>

<template>
    <div class="container">
        <h2>Contact Me!</h2>
    </div>
</template>