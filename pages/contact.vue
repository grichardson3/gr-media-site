<template>
    <div>
        <div id="container" class="container" v-if="loaded">
            <div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-7">
                        <h2>Let's Get in Touch!</h2><br>
                        <p>Please fill out the form below if you have an idea in mind for a project. For general inquiries, feel free to let me know in the comment section below! I will make sure to get back to you within the next 24 hours.</p>
                        <p>I am looking forward to speaking with you!</p>
                        <small>Fields marked with a <span style="color: salmon; font-size: 20px;">*</span> are required.</small><br><br>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-5">
                        <div id="businessCardContainer">
                            <img src="/img/business-card-back.jpg" alt="GR Media Business Card">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-md-7 col-lg-8">
                        <h3>Contact Form</h3>
                        <div id="formErrorMsg" v-if="nameErrorStatus || emailErrorStatus || commentsErrorStatus">
                            <small>{{ nameErrorMsg }} </small><div v-if="nameErrorMsg !== ''"></div>
                            <small>{{ emailErrorMsg }} </small><div v-if="emailErrorMsg !== ''"></div>
                            <small>{{ commentsErrorMsg }} </small><div v-if="commentsErrorMsg !== ''"></div>
                        </div>
                        <div id="contactForm">
                            <form method="post" @submit.prevent="onSubmit" enctype="application/x-www-form-urlencoded">
                                <div class="row">
                                    <div class="col-xs-12 col-md-6 col-lg-6">
                                        <div id="nameForm">
                                            <label for="name">Name <span style="color: salmon; font-size: 20px;">*</span></label><br>
                                            <input 
                                                id="name" class="form-control" 
                                                v-model="formData.name" 
                                                type="text" placeholder="John Doe" name="name"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-6 col-lg-6">
                                        <div id="emailForm">
                                            <label for="email">E-Mail <span style="color: salmon; font-size: 20px;">*</span></label><br>
                                            <input 
                                                id="email" class="form-control" 
                                                v-model="formData.email" 
                                                type="text" placeholder="example@email.com" name="email"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-12 col-lg-12">
                                        <div id="commentsForm">
                                            <label for="comments">Comments <span style="color: salmon; font-size: 20px;">*</span></label><br>
                                            <textarea 
                                                id="comments" class="form-control" rows="10" 
                                                v-model="formData.comments" 
                                                type="text" name="comments"
                                            ></textarea><br>
                                            <button class="btn btn-primary" type="submit" value="Submit">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form><br>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-5 col-lg-4">

                        <h3>Reach Out To Me!</h3>
                        <div id="emailCTC">
                            <div class="input-group mb-2 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                                            <path fill="black" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                                        </svg>
                                    </div>
                                </div>
                                <input class="form-control" type="text" :value="contactData.contactEmail" name="emailInfo" disabled/>
                                <div 
                                    class="input-group-append"
                                    @click="copyToClipboard(contactData.contactEmail, linkCopied)"
                                >    
                                    <div v-if="!linkCopied.status">
                                        <button class="btn btn-success input-group-text" title="Copy to Clipboard">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
                                                <path fill="white" d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div v-else>
                                        <button class="btn btn-success input-group-text" title="Copied! ✅">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" length="24">
                                                <path fill="limegreen" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br><h3>My Socials</h3><br>

                        <div id="socialLinks">
                            <div class="input-group mb-2 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                                            <path fill="#4267B2" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
                                        </svg>
                                    </div>
                                </div>
                                <input class="form-control" type="text" :value="contactData.contactFacebook" name="emailInfo" disabled/>
                                <div class="input-group-append">
                                    <a 
                                        :href="contactData.contactFacebook"
                                        target="_blank"
                                        class="btn btn-secondary input-group-text"
                                        title="Facebook"
                                        aria-label="Facebook"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                                            <path fill="white" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div class="input-group mb-2 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24" height="24">
                                            <path fill="red" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                                        </svg>
                                    </div>
                                </div>
                                <input class="form-control" type="text" :value="contactData.contactYouTube" name="emailInfo" disabled/>
                                <div class="input-group-append">
                                    <a 
                                        :href="contactData.contactYouTube"
                                        target="_blank"
                                        class="btn btn-secondary input-group-text"
                                        title="YouTube"
                                        aria-label="YouTube"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                                            <path fill="white" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div class="input-group mb-2 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
                                            <path fill="#0077b5" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                                        </svg>
                                    </div>
                                </div>
                                <input class="form-control" type="text" :value="contactData.contactLinkedIn" name="emailInfo" disabled/>
                                <div class="input-group-append">
                                    <a 
                                        :href="contactData.contactLinkedIn"
                                        target="_blank"
                                        class="btn btn-secondary input-group-text"
                                        title="LinkedIn"
                                        aria-label="LinkedIn"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                                            <path fill="white" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div class="input-group mb-2 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
                                            <path fill="" d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"/>
                                        </svg>
                                    </div>
                                </div>
                                <input class="form-control" type="text" :value="contactData.contactGitHub" name="emailInfo" disabled/>
                                <div class="input-group-append">
                                    <a 
                                        :href="contactData.contactGitHub"
                                        target="_blank"
                                        class="btn btn-secondary input-group-text"
                                        title="GitHub"
                                        aria-label="GitHub"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                                            <path fill="white" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div style="display: flex; align-items: center; justify-content: center; height: 100vh; width: 100%;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" height="200" width="200"><circle fill="none" stroke-opacity="1" stroke="#002366" stroke-width=".5" cx="100" cy="100" r="0"><animate attributeName="r" calcMode="spline" dur="0.5" values="1;80" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate><animate attributeName="stroke-width" calcMode="spline" dur="0.5" values="0;25" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" calcMode="spline" dur="0.5" values="1;0" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate></circle></svg>
            </div>
        </div> 
    </div>
    
</template>

<style scoped>

    .container {
        padding: 28px 42px 18px 42px !important;
        margin: 136px auto 36px auto;
        border-radius: 12px;
        min-height: 80vh;
    }

    #businessCardContainer {
        padding: 0 0 32px 48px;
    }

    #businessCardContainer img {
        border-radius: 6px;
    }

    #contactForm {
        padding: 0 42px 0 12px;
    }

    #formErrorMsg {
        background-color: salmon;
        border-radius: 6px;
        color: white;
        padding: 12px 20px;
        margin: 12px 30px 0 0;
    }

    #nameForm {
        padding: 12px 20px 12px 0;
    }

    #emailForm {
        padding: 12px 0px 12px 0;
    }

    #commentsForm {
        padding: 0px 0px 12px 0;
    }

    #emailCTC {
        margin-top: 50px;
    }

    .input-group-append .input-group-text {
        border-top-left-radius: 0 !important;
        border-bottom-left-radius: 0 !important;
    }

    .input-group-prepend .input-group-text {
        border-top-right-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
    }

    .linkCopiedBadge small {
        width: 100%;
        color: white;
    }

    @media screen and (max-width: 991px) {
        #businessCardContainer {
            display: none;
        }

        #emailCTC {
            margin-top: 26px;
        }
    }

    @media screen and (max-width: 767px) {
        .container {
            border-radius: 0;
            margin: 100px auto 0 auto;
        }

        #contactForm {
            padding: 0 0 0 12px;
        }

        #nameForm {
            padding: 12px 0px 12px 0;
        }

        #emailForm {
            padding: 12px 0px 12px 0;
        }

        #commentsForm {
            padding: 12px 0px 12px 0;
        }
    }

</style>
  
<script lang="ts" setup>

import { ref } from 'vue';

import validator from 'validator';
import emailjs from '@emailjs/browser';

const loaded = ref(false);

onBeforeMount(() => {

});

onMounted(() => {
    if (process.client) {
        setTimeout(() => {
            loaded.value = true;
        }, 1000);
    }
});

const linkCopied = ref({
    status: false
});

const formData = ref({
    name: '',
    email: '',
    comments: '',
});

const nameErrorMsg = ref('');
const emailErrorMsg = ref('');
const commentsErrorMsg = ref('');

const nameErrorStatus = ref(false);
const emailErrorStatus = ref(false);
const commentsErrorStatus = ref(false);

const contactData = ref({
    contactEmail: 'grichardson@live.ca',
    contactLinkedIn: 'https://www.linkedin.com/in/gareth-richardson/',
    contactFacebook: 'https://www.facebook.com/garethrichardsonmedia/',
    contactYouTube: 'https://www.youtube.com/channel/UC2Li3MDBqK-tq78KK93hp1w',
    contactGitHub: 'https://github.com/grichardson3'
});

const onSubmit = async () => {

    let formName = formData.value.name.trim().toString();
    let formEmail = formData.value.email.trim().toString();
    let formComments = formData.value.comments.trim().toString();

    const formValidationInit = new Promise((resolve, reject) => {
        resolve("Form validation initiated...");
    });

    formValidationInit.then(() => {
        if (formName === "") {
            nameErrorStatus.value = true;
            if (nameErrorMsg.value === '') {
                nameErrorMsg.value = 'Name field is empty.';
            }
        } else {
            if (nameErrorMsg.value !== '') {
                nameErrorMsg.value = '';
            }
        }
    }).then(() => {
        if (formEmail === "") {
            emailErrorStatus.value = true;
            if (emailErrorMsg.value !== 'E-Mail field is empty.') {
                emailErrorMsg.value = 'E-Mail field is empty.';
            }
        } else {
            if (!validator.isEmail(formEmail)) {
                emailErrorStatus.value = true;
                if (emailErrorMsg.value !== 'E-Mail is not valid.') {
                    emailErrorMsg.value = 'E-Mail is not valid.'
                }
            } else {
                if (emailErrorMsg.value !== '') {
                    emailErrorMsg.value = '';
                }
            }
        }
    }).then(() => {
        if (formComments === "") {
            commentsErrorStatus.value = true;
            if (commentsErrorMsg.value === '') {
                commentsErrorMsg.value = 'Comments field is empty.';
            }
        } else {
            if (commentsErrorMsg.value !== '') {
                commentsErrorMsg.value = '';
            }
        }
    }).then(() => {
        if (
            nameErrorStatus.value === false &&
            emailErrorStatus.value === false &&
            commentsErrorStatus.value === false
        ) {
            submitForm(formName, formEmail, formComments);
        }
    });
}

const submitForm = async (formName:any, formEmail:any, formComments:any) => {
    emailjs.send(
        'service_ucbnhpc',
        'template_depfwxo',
        { from_name: formName, from_email: formEmail, from_comments: formComments },
        "33vxt2r3mcjbb-XTg"
    )
    .then((res) => {
        if (res.status === 200) {
            alert("E-Mail has been sent successfully!");
            return true;
        } else if (res.status > 400) {
            console.log("Error");
            return false;
        }
    }).then((res) => {
        if (res) {
            setTimeout(() => {
                navigateTo('/');
            }, 500);
        }
    });
}

const copyToClipboard = async (copyItem:any, linkCopied:any) => {
    try {
        await navigator.clipboard.writeText(copyItem);
        linkCopied.status = true;
    } catch (error) {
        console.error("Failed to copy to clipboard:", error);
    }
};

</script>