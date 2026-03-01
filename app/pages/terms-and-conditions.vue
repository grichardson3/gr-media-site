<template>
    <div>
        <div id="container" class="container" v-if="loaded">
            <article style="text-align: center; max-width: 740px; margin: 0 auto;">
                <h3 class="content">Website Terms and Conditions</h3><br>
                <p style="text-align:center;"><strong><u>TERMS AND CONDITIONS</u></strong></p><br>
                <p style="text-align:left;">These terms and conditions (the "Terms and Conditions") govern the use of <strong>www.garethrichardson.ca</strong> (the "Site"). This Site is owned and operated by Gareth Richardson Media. This Site is a portfolio.<br><br>By using this Site, you indicate that you have read and understand these Terms and Conditions and agree to abide by them at all times.</p><br>
                <p style="text-align:left;"><strong><u>Intellectual Property</u></strong><br>All content published and made available on our Site is the property of Gareth Richardson Media and the Site's creators. This includes, but is not limited to images, text, logos, documents, downloadable files and anything that contributes to the composition of our Site.</p><br>
                <p style="text-align:left;"><strong><u>Links to Other Websites</u></strong><u><br></u>Our Site contains links to third party websites or services that we do not own or control. We are not responsible for the content, policies, or practices of any third party website or service linked to on our Site. It is your responsibility to read the terms and conditions and privacy policies of these third party websites before using these sites.</p><br>
                <p style="text-align:left;"><strong><u>Limitation of Liability</u></strong><br>Gareth Richardson Media and our directors, officers, agents, employees, subsidiaries, and affiliates will not be liable for any actions, claims, losses, damages, liabilities and expenses including legal fees from your use of the Site.</p><br>
                <p style="text-align:left;"><strong><u>Indemnity</u></strong><br>Except where prohibited by law, by using this Site you indemnify and hold harmless Gareth Richardson Media and our directors, officers, agents, employees, subsidiaries, and affiliates from any actions, claims, losses, damages, liabilities and expenses including legal fees arising out of your use of our Site or your violation of these Terms and Conditions.</p><br>
                <p style="text-align:left;"><strong><u>Applicable Law</u></strong><br>These Terms and Conditions are governed by the laws of the Province of Ontario.</p><br>
                <p style="text-align:left;"><strong><u>Severability</u></strong><br>If at any time any of the provisions set forth in these Terms and Conditions are found to be inconsistent or invalid under applicable laws, those provisions will be deemed void and will be removed from these Terms and Conditions. All other provisions will not be affected by the removal and the rest of these Terms and Conditions will still be considered valid.</p><br>
                <p style="text-align:left;"><strong><u>Changes</u></strong><br>These Terms and Conditions may be amended from time to time in order to maintain compliance with the law and to reflect any changes to the way we operate our Site and the way we expect users to behave on our Site. We will notify users by email of changes to these Terms and Conditions or post a notice on our Site.</p><br>
                <p style="text-align:left;"><strong><u>Contact Details</u></strong><br>Please contact us if you have any questions or concerns. Our contact details are as follows: <span><a href="mailto:grichardson@live.ca">grichardson@live.ca</a></span><br></p><br>
                <p style="text-align:left;">You can also contact us through the feedback <span><NuxtLink to="/contact">form</NuxtLink></span> available on our Site.</p><br>
                <p style="text-align:left;"><b>Effective Date:</b> 25th day of February, 2025</p>
            </article>
        </div>
        <div v-else>
            <div style="display: flex; align-items: center; justify-content: center; height: 100vh; width: 100%;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" height="200" width="200"><circle fill="none" stroke-opacity="1" stroke="#fff" stroke-width=".5" cx="100" cy="100" r="0"><animate attributeName="r" calcMode="spline" dur="0.5" values="1;80" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate><animate attributeName="stroke-width" calcMode="spline" dur="0.5" values="0;25" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" calcMode="spline" dur="0.5" values="1;0" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate></circle></svg>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    const img = useImage();

    const loaded = ref(false);

    onMounted(() => {
        if (process.client) {
            setTimeout(() => {
                loaded.value = true;
            }, 1000);
        }
    });
</script>

<style scoped>
    .container {
        margin-top: 160px;
    }
</style>