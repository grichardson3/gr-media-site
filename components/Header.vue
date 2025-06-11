<template>
    <div>
        <header>
            <div id="logo">
                <div id="desktopLogo">
                    <NuxtLink to="/">
                        <h1>GARETH RICHARDSON MEDIA</h1>
                    </NuxtLink>
                </div>
                <div id="mobileLogo">
                    <NuxtLink to="/">
                        <img src="/icon/gr-mobile-logo-opt-retina.png" alt="GR Media Logo">
                    </NuxtLink>
                </div>
            </div>
            <div id="menu">
                <div id="desktopMenu">
                    <div id="websiteMenu">
                        <NuxtLink class="menuItem" to="/">Home</NuxtLink>
                        <NuxtLink class="menuItem" to="/about">About</NuxtLink>
                        <NuxtLink class="menuItem" to="/contact">Contact</NuxtLink>
                    </div>
                    <div id="socialMenu">
                        <a href="https://www.facebook.com/garethrichardsonmedia/" target="_blank" title="Facebook" aria-label="Facebook">
                            <img src="/icon/sm-icons-facebook-logo.png" alt="Facebook">
                        </a>
                        <a href="https://www.youtube.com/channel/UC2Li3MDBqK-tq78KK93hp1w" target="_blank" title="YouTube" aria-label="YouTube">
                            <img src="/icon/sm-icons-youtube.png" alt="YouTube">
                        </a>
                        <a href="https://www.linkedin.com/in/gareth-richardson/" target="_blank" title="LinkedIn" aria-label="LinkedIn">
                            <img src="/icon/sm-icons-linkedin-logo.png" alt="LinkedIn">
                        </a>
                        <a href="https://github.com/grichardson3" target="_blank" title="GitHub" aria-label="GitHub">
                            <img src="/icon/sm-icons-github-logo.png" alt="Github">
                        </a>
                    </div>
                </div>
                <div id="mobileMenu">
                    <div id="hamburgerMenu" @click="toggleMenu">
                        <div class="ham-menu-line"></div>
                        <div class="ham-menu-line"></div>
                        <div class="ham-menu-line"></div>
                    </div>
                    <div id="mobileMenuOverlay" v-show="isMenuOpen" >
                        <div id="websiteMenuMobile">
                            <div class="mobileMenuItem" @click="navigateMobileMenu">
                                <NuxtLink to="/">Home</NuxtLink>
                            </div>
                            <div class="mobileMenuItem" @click="navigateMobileMenu">
                                <NuxtLink to="/about">About</NuxtLink>
                            </div>
                            <div class="mobileMenuItem" @click="navigateMobileMenu">
                                <NuxtLink to="/contact">Contact</NuxtLink>
                            </div>
                        </div>
                        <div id="socialMenuMobile">
                            <div style="display: flex; align-items: center">
                                <a href="https://www.facebook.com/garethrichardsonmedia/" target="_blank" aria-label="Facebook">
                                    <img src="/icon/sm-icons-facebook-logo.png" alt="Facebook">
                                </a>
                                <a href="https://www.youtube.com/channel/UC2Li3MDBqK-tq78KK93hp1w" target="_blank" aria-label="YouTube">
                                    <img src="/icon/sm-icons-youtube.png" alt="YouTube">
                                </a>
                            </div>
                            <div style="display: flex; align-items: center">
                                <a href="https://www.linkedin.com/in/gareth-richardson/" target="_blank" title="LinkedIn" aria-label="LinkedIn">
                                    <img src="/icon/sm-icons-linkedin-logo.png" alt="LinkedIn">
                                </a>
                                <a href="https://github.com/grichardson3" target="_blank" aria-label="GitHub">
                                    <img src="/icon/sm-icons-github-logo.png" alt="Github" title="GitHub">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<style scoped >
    #hamburgerMenu {
        cursor: pointer;
        opacity: 1;
        transition: .15s ease;
    }

    #hamburgerMenu:hover {
        opacity: .8;
        transition: .15s ease;
    }

    .ham-menu-line {
        background-color: white;
        width: 36px;
        height: 4px;
        border-radius: 2px;
        margin-bottom: 8px;
    }

    .ham-menu-line:nth-child(3) {
        margin-bottom: 0;
    }
</style>

<script setup lang="ts">

    const isMenuOpen = ref(false);

    const toggleMenu = () => {
        if (isMenuOpen.value === false) {
            isMenuOpen.value = true;
        } else {
            isMenuOpen.value = false;
        }
    }

    const navigateMobileMenu = () => {
        isMenuOpen.value = false;
    }
</script>