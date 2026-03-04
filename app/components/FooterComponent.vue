<template>
    <div>
        <footer>
            <div style="display:grid; justify-content: center; width: 100%;">
                <p style="text-align: center;">Copyright &copy; Gareth Richardson Media <span>{{ copyDate }}</span> - All Rights Reserved</p>
                <div class="footerMenu">
                    <NuxtLink to="/terms-and-conditions">Terms and Conditions</NuxtLink>
                    <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
    const date = new Date();
    const copyDate = ref(date.getFullYear());
</script>

<style scoped>
    footer {
        height: 120px;
        background: rgb(0, 35, 102);
        align-items: center;
        justify-content: center;
        padding-top: 8px;
        display: flex;
        justify-content: space-evenly;
        bottom: 0;
    }

    .footerMenu {
        justify-content: space-around;
        display: inline-flex;
        margin: 4px 0;
    }

    .footerMenu a {
        font-weight: 600;
        text-decoration: underline;
    }
</style>