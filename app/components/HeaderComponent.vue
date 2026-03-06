<script setup lang="ts">

    import { onMounted, ref } from 'vue'
    import { useWPGeneralSettings } from '#wpnuxt'
    import type { GeneralSettingsFragment } from '#graphql-operations'

    const site = ref<GeneralSettingsFragment[]>([]);
    const isVisible = ref(false);

    let errorMsg;

    onMounted(async () => {
        const { data, pending, error } = await useWPGeneralSettings();
        site.value = data || []
    });

    const toggleVisibility = () => {
        isVisible.value = !isVisible.value;
    };

</script>

<style>
    .menu {
        background-color: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        padding: 0;
    }
    .line {
        fill: none;
        stroke: white;
        stroke-width: 6;
        transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .line1 {
        stroke-dasharray: 60 207;
        stroke-width: 6;
    }
    .line2 {
        stroke-dasharray: 60 60;
        stroke-width: 6;
    }
    .line3 {
        stroke-dasharray: 60 207;
        stroke-width: 6;
    }
    .opened .line1 {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
        stroke-width: 6;
    }
    .opened .line2 {
        stroke-dasharray: 1 60;
        stroke-dashoffset: -30;
        stroke-width: 6;
    }
    .opened .line3 {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
        stroke-width: 6;
    }
</style>

<template>
    <div class="navigation relative w-full p-4 h-85px mx-auto bg-darkblue-800">
        <div class="navigation-siteInfoContainer">
            <div class="navigation-siteInfoContainer_siteLogo">
                <NuxtLink to="/">
                    <img 
                        src="\img\GR_Technology_Fix_Final_Small.svg"
                        alt="Gareth Richardson Technology & Media Logo"
                    >
                </NuxtLink>
            </div>
            <NuxtLink to="/">
                <div class="navigation-siteInfoContainer__siteTitles">
                    <h1 v-if="site.title" id="siteTitle">{{ site.title }}</h1>
                    <h1 v-else id="siteTitle">Error!</h1>
                    <h2 id="siteTagline" v-if="site.description">{{ site.description }}</h2>
                </div>
            </NuxtLink>
        </div>
        <div class="navigation-menuContainer">
            <div class="navigation-menuContainer_menuItems">
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                    <li><NuxtLink to="/blog" class="blogLink">Blog</NuxtLink></li>
                </ul>
            </div>
            <div class="navigation-menuContainer_socialMenu">
                <ul>
                    <li><a href="https://www.facebook.com" title="Facebook"><img src="\img\facebook-round-svgrepo-com.svg" alt="Facebook Logo" width="32"></a></li>
                    <li><a href="https://www.youtube.com" title="YouTube"><img src="\img\youtube-round-svgrepo-com.svg" alt="YouTube Logo" width="32"></a></li>
                </ul>
                <ul>
                    <li><a href="https://www.linkedin.com" title="LinkedIn"><img src="\img\linkedin-round-svgrepo-com.svg" alt="LinkedIn Logo" width="32"></a></li>
                    <li><a href="https://www.github.com" title="Github"><img src="\img\github-round-svgrepo-com.svg" alt="Github Logo" width="32"></a></li>
                </ul>
            </div>
        </div>
        <div class="navigation-menuContainer_hamburgerMenu">
            <button 
                class="menu"
                v-on:click="toggleVisibility"
                onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))" aria-label="Main Menu"
            >
                <svg width="64" height="64" viewBox="0 0 100 100">
                    <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path class="line line2" d="M 20,50 H 80" />
                    <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
        </div>
        <Transition>
            <div 
                v-if="isVisible"
                class="navigation-menuContainer_mobileMenu"
            >
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                    <li><NuxtLink class="blogLink" to="/blog">Blog</NuxtLink></li>
                </ul>
                <div class="navigation-menuContainer_mobileSocialMenu" style="display: flex;">
                    <div><a href="https://www.facebook.com" title="Facebook"><img src="\img\facebook-round-svgrepo-com.svg" alt="Facebook Logo" width="64"></a></div>
                    <div><a href="https://www.youtube.com" title="YouTube"><img src="\img\youtube-round-svgrepo-com.svg" alt="YouTube Logo" width="64"></a></div>
                    <div><a href="https://www.linkedin.com" title="LinkedIn"><img src="\img\linkedin-round-svgrepo-com.svg" alt="LinkedIn Logo" width="64"></a></div>
                    <div><a href="https://www.github.com" title="Github"><img src="\img\github-round-svgrepo-com.svg" alt="Github Logo" width="64"></a></div>
                </div>
            </div>
        </Transition>
    </div>
</template>