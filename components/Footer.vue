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