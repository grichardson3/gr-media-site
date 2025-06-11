<template>
    <div>
        <div id="container" class="container" v-if="loaded">
            <article style="text-align: center; max-width: 640px; margin: 0 auto;">
                <h1>Gareth Richardson</h1><br>
                <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 50px;">
                    <img style="width: 420px; border-radius: 50%;" src="/img/profile-pic.jpg" alt="Profile Pic">
                </div>
                <h2>Hello!</h2><br>
                <p>I am a multimedia designer with more than 5 years of experience based out of St. Thomas, Ontario. I am a graduate of the Interactive Media Design program at Fanshawe College!</p>
                <p>I specialize in creating 3D video animations, fluid &amp; fully responsive web applications, as well as creating UX / UI designs and developing web based database systems. I am always looking forward to learning new things!</p>
                <p>Aside from my professional life. I enjoy playing baseball, volleyball, <br>playing guitar, making music on my computer &amp; playing video games.</p>
                <br><h3>Skills &amp; Technology</h3><br>
                <p><b>Creative Software</b><br>Adobe CC Suite (Photoshop, InDesign, Illustrator, Premiere Pro, After Effects), <br> Cinema 4D, Blender</p>
                <p><b>AI Software</b><br>OpenAI GPT-4 (ChatGPT), Microsoft Bing Copilot, Github Copilot, <br> Devin Prompting, Stable Diffusion Prompting, Midjourney Prompting</p>
                <p><b>Programming Languages</b> <br>HTML5, CSS3, Javascript / Typescript, PHP, SQL</p>
                <p><b>Frameworks & Libraries</b><br><br><span><i style="text-decoration: underline;">Javascript / Typescript</i></span><br>React.js (w/ Redux) &amp; Next.js 13 (React SSR), <br> Vue.js (w/ Vuex) &amp; Nuxt 3 (Vue SSR), <br> GraphQL, Express.js &amp; Axios, WebGL, WebGPU &amp; Three.js</p>
                <p><span><i style="text-decoration: underline;">PHP</i></span><br>Laravel, MySQL</p>
                <p><b>Headless CMS Development</b><br>Headless Wordpress + Next 13 CMS &amp; Wordpress + Nuxt 3 CMS Development Environments (Next / Nuxt Frontend + Wordpress Backend w/Wordpress API),</p>
                <p><b>Tech Stacks</b><br>XAMP Stack (OS (Windows, Mac, Linux), Apache, MySQL, PHP), <br> MERN / MEVN Stack (MySQL, Express.js, React.js and/or Vue.js, Node.js / Deno.js)</p>
                <p><b>CMS + CRM Software</b><br>Wordpress, Drupal, Magneto, Hubspot</p>
                <p><b>Javascript Package Managers</b><br>Node.js / Deno.js, NPM, Yarn, Bun</p>
                <p><b>Database Services</b><br>MySQL, PostGreSQL, MongoDB, Firebase (Database Services)</p>
                <p><b>Web Build Tools</b><br>Webpack, Babel, SASS/SCSS</p>
                <p><b>Continuous Integration / Continuous Deployment Tools (CI/CD)</b><br>AWS (S3, EC2), Google Cloud Platform (GCP), <br> Docker, Heroku, Netlify, Atlas, Gitlab</p>
                <p><b>Productivity Software</b><br>Office 365 Suite (Word, Excel, Powerpoint), <br> Google Office Suite (Docs, Sheets, Slides), <br> Microsoft Teams, Slack, Jira, Hubspot</p>
                <p><b>Social Media Tools + CRM Software</b><br>Meta Business Suite (Facebook, Instagram), TikTok for Business, YouTube Studio, Wordpress, Google Analytics, Hubspot CRM</p>
            </article><br>
            <NuxtLink to="/contact">
                <div style="display: flex; align-items: center; justify-content: center; width: 100%;">
                    <button 
                    class="btn btn-primary btn-large"
                    style="padding: 12px 20px;"
                >Get in touch...</button>
                </div>
            </NuxtLink>
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