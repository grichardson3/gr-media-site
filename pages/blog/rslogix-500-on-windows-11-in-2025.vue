<template>
    <div>
        <div id="container" class="container" v-if="loaded">
            <h1>Setting up RsLogix 500 (Studio 500) on Windows 11 in 2025 using a Virtual Machine (Oracle VirtualBox)</h1>
            <br><p class="datePosted">Date Published: May 20th, 2025</p>
            <img class="blogImage" src="/img/blog/rslogix-500-logo-banner.jpg" alt="RsLogix 500 Logo">
            <small class="imageCaption">Credit: Rockwell Automation</small>
        </div>
        <div v-else>
            <div style="display: flex; align-items: center; justify-content: center; height: 100vh; width: 100%;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" height="200" width="200"><circle fill="none" stroke-opacity="1" stroke="#002366" stroke-width=".5" cx="100" cy="100" r="0"><animate attributeName="r" calcMode="spline" dur="0.5" values="1;80" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate><animate attributeName="stroke-width" calcMode="spline" dur="0.5" values="0;25" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" calcMode="spline" dur="0.5" values="1;0" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate></circle></svg>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    const loaded = ref(false);

    onMounted(() => {
        if (process.client) {
            setTimeout(() => {
                loaded.value = true;
            }, 1000);
        }
    });

</script>