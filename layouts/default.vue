<template>
    <div v-show="loaded">
        <Link rel="preload" href="https://fonts.googleapis.com"/>
        <Link rel="preload" href="https://fonts.gstatic.com" crossorigin=""/>
        <Link rel="preload" onload="this.onload=null;this.rel='stylesheet'" as="style" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Slab:wght@100..900&family=Saira+Extra+Condensed:wght@100;200;300;400;500;600;700;800;900&display=block"/>

        <Header></Header>
        <NuxtLoadingIndicator :height="6" />
        <NuxtPage></NuxtPage>
        <Footer></Footer>
    </div>
    
</template>

<script setup lang="ts">
    import 'bootstrap/dist/css/bootstrap.css';

    const loaded = ref(false);

    onMounted(() => {
        if (process.client) {
            loaded.value = true;
        }
    });

</script>