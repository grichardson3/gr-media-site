<script setup lang="ts">

    import type { PropType } from 'vue';
    import type { NuxtError } from '#app';
    import { isStaging } from '#imports';

    const props = defineProps({
        error: {
            type: Object as PropType<NuxtError>,
            required: true
        }
    });

    if (props.error.statusCode !== 404) {
        console.error(props.error.message);
    } else if (props.error.statusCode >= 500) {
        console.log(props.error.message);
    }

</script>

<template>
    <div></div>
    <div v-if="props.error.statusCode >= 500" class="container">
        <h1>Error!</h1>
        <h2>Error Status Code = 500</h2>
        <h4>Server is unavailable or down for maintenance, check back later...</h4>
    </div>
    <div v-else-if="props.error.statusCode >= 400 && props.error.statusCode < 500" class="container">
        <h1>Error!</h1>
        <h2>Error Status Code = 404</h2>
        <h4>Page is not available, go back to the home page <NuxtLink to="/">Click Here...</NuxtLink></h4>
    </div>
    <div :error="error"></div>
</template>

<style scoped>
    .container {
        min-height: calc(100vh - 100px);
    }
</style>