<template>
    <div>
        <div v-if="loaded">
            <div id="modals">
                <UModal v-model="isOpen1">
                    <div class="modalContainer">
                        <svg @click="isOpen1 = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48"><path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        <img src="/img/4k-render-touchup.jpg" alt="Bed">
                    </div>
                </UModal>
                <UModal v-model="isOpen2">
                    <div class="modalContainer">
                        <svg @click="isOpen2 = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48"><path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        <img src="/img/BurstFireTVCoverRenderAdj.jpg" alt="Burstfire">
                    </div>
                </UModal>
                <UModal v-model="isOpen3">
                    <div class="modalContainer">
                        <svg @click="isOpen3 = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48"><path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        <img src="/img/bus-final-textured.jpg" alt="Tour Bus">
                    </div>
                </UModal>
                <UModal v-model="isOpen4">
                    <div class="modalContainer">
                        <svg @click="isOpen4 = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48"><path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        <img src="/img/fingerprint-render-touchup.jpg" alt="Fingerprint">
                    </div>
                </UModal>
                <UModal v-model="isOpen5">
                    <div class="modalContainer">
                        <svg @click="isOpen5 = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48"><path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        <img src="/img/marble-final.jpg" alt="Marble Render">
                    </div>
                </UModal>
                <UModal v-model="isOpen6">
                    <div class="modalContainer">
                        <svg @click="isOpen6 = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48"><path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        <img src="/img/mechanical-heart-animation-screenshot.png" alt="Mechanical Heart Animation">
                    </div>
                </UModal>
            </div>
            <div id="videoModals">
                <UModal v-model="isOpen7">
                    <div class="col-xs-12 col-md-12 col-lg-12">
                        <div class="modalContainerVideo">
                            <svg @click="isOpen7 = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48"><path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            <video controls poster="/img/mechanical-heart-animation-screenshot.png">
                                <source src="/videos/Gareth_Richardson_Motion_Reel_2017.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </UModal>
                <UModal v-model="isOpen8">
                    <div class="col-xs-12 col-md-12 col-lg-12">
                        <div class="modalContainerVideo">
                            <svg @click="isOpen8 = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48"><path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            <video controls poster="/videos/thumbnail/batman_lung_thumbnail.png">
                                <source src="/videos/batman-lung.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </UModal>
                <UModal v-model="isOpen9">
                    <div class="col-xs-12 col-md-12 col-lg-12">
                        <div class="modalContainerVideo">
                            <svg @click="isOpen9 = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48"><path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            <video controls poster="/videos/thumbnail/water_sphere_thumbnail.png">
                                <source src="/videos/Comp_1.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </UModal>
                <UModal v-model="isOpen10">
                    <div class="col-xs-12 col-md-12 col-lg-12">
                        <div class="modalContainerVideo">
                            <svg @click="isOpen10 = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48"><path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            <video controls poster="/videos/thumbnail/dust_2_thumbnail.png">
                                <source src="/videos/dust2-trailer-badge-animation.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </UModal>
                <UModal v-model="isOpen11">
                    <div class="col-xs-12 col-md-12 col-lg-12">
                        <div class="modalContainerVideo">
                            <svg @click="isOpen11 = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48"><path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            <video controls poster="/videos/thumbnail/autism_ontario_thumbnail.png">
                                <source src="/videos/final-render-video.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </UModal>
                <UModal v-model="isOpen12">
                    <div class="col-xs-12 col-md-12 col-lg-12">
                        <div class="modalContainerVideo">
                            <svg @click="isOpen12 = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48"><path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            <video controls poster="/videos/thumbnail/furball_thumbnail.png">
                                <source src="/videos/Fur_Ball_Animation.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </UModal>
                <UModal v-model="isOpen13">
                    <div class="col-xs-12 col-md-12 col-lg-12">
                        <div class="modalContainerVideo">
                            <svg @click="isOpen13 = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48"><path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            <video controls poster="/videos/thumbnail/biotronix_intro_thumbnail.png">
                                <source src="/videos/biotronix-intro.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </UModal>
                <UModal v-model="isOpen14">
                    <div class="col-xs-12 col-md-12 col-lg-12">
                        <div class="modalContainerVideo">
                            <svg @click="isOpen14 = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48"><path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            <video controls poster="/videos/thumbnail/noisetacticz_thumbnail.png">
                                <source src="/videos/noisetacticz-intro-render.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </UModal>
                <UModal v-model="isOpen15">
                    <div class="col-xs-12 col-md-12 col-lg-12">
                        <div class="modalContainerVideo">
                            <svg @click="isOpen15 = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48"><path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            <video controls poster="/videos/thumbnail/rain_thumbnail.png">
                                <source src="/videos/rain-overlay-4k60fps.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </UModal>
                <UModal v-model="isOpen16">
                    <div class="col-xs-12 col-md-12 col-lg-12">
                        <div class="modalContainerVideo">
                            <svg @click="isOpen16 = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48"><path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            <video controls poster="/videos/thumbnail/snow_thumbnail.png">
                                <source src="/videos/snow-overlay-final-render.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </UModal>
            </div>
            <div id="heroContainer" class="heroContainer">
                <div></div><div></div>
                <h1 style="color: white; font-size: 5em !important; text-align: center; padding-bottom: 20px;">GARETH RICHARDSON</h1>
                <div><h2 style="color: white; font-size: 3em !important; text-align: center; padding-bottom: 20px;">MULTIMEDIA DESIGNER</h2></div>
                <div></div>
                <h2 style="color: white; font-size: 2em !important; text-align: center; padding-bottom: 20px;">GRAPHIC DESIGN - UX/UI DESIGN - MOTION DESIGN - WEB DEVELOPMENT</h2>
                <div><h3 style="color: white; font-size: 1.75em !important; text-align: center;">Check out my portfolio below!</h3></div>
                <div></div><div></div>
            </div>
            <div id="container" class="container">
                <div>
                    <h2>Photos</h2><br>
                    <h4>Click or tap below to see the photos in more detail...</h4><br>
                    <div id="gallery" class="row">
                        <button class="col-xs-12 col-md-6 col-lg-4" @click="isOpen1 = true" aria-label="Bed">
                            <img src="/img/opt/bed-opt.jpg" alt="Bed">
                        </button>
                        <button class="col-xs-12 col-md-6 col-lg-4" @click="isOpen2 = true" aria-label="Burstfire">
                            <img src="/img/opt/burstfire-opt.jpg" alt="Burstfire">
                        </button>
                        <button class="col-xs-12 col-md-6 col-lg-4" @click="isOpen3 = true" aria-label="Tour Bus">
                            <img src="/img/opt/bus-final-textured-opt.jpg" alt="Tour Bus">
                        </button>
                        <button class="col-xs-12 col-md-6 col-lg-4" @click="isOpen4 = true" aria-label="Fingerprint">
                            <img src="/img/opt/fingerprint-opt.jpg" alt="Fingerprint">
                        </button>
                        <button class="col-xs-12 col-md-6 col-lg-4" @click="isOpen5 = true" aria-label="Marble Render">
                            <img src="/img/opt/marble-opt.jpg" alt="Marble Render">
                        </button>
                        <button class="col-xs-12 col-md-6 col-lg-4" @click="isOpen6 = true" aria-label="Mechanical Heart Animation">
                            <img src="/img/opt/mechanical-heart-opt.jpg" alt="Mechanical Heart Animation">
                        </button>
                    </div>
                    <br><br><h2>Videos</h2><br>
                    <h4>Click or tap below to watch the videos...</h4><br>
                    <div id="videos" class="row">
                        <button class="col-xs-12 col-md-6 col-lg-6" @click="isOpen10 = true">
                            <div>
                                <br><h4>Dust 2 Badge Animation</h4>
                            </div>
                            <div class="videoThumbnailContainer">
                                <img class="videoThumbnail" src="/videos/thumbnail/jpg/dust_2_thumbnail.jpg" alt="Fingerprint">
                                <img class="playButton" src="/icon/play-button-opt.png" alt="Play Button">
                            </div>
                        </button>
                        <button class="col-xs-12 col-md-6 col-lg-6" @click="isOpen13 = true">
                            <div>
                                <br><h4>Biotronix Video Intro Animation</h4>
                            </div>
                            <div class="videoThumbnailContainer">
                                <img class="videoThumbnail" src="/videos/thumbnail/biotronix_intro_thumbnail.png" alt="Fingerprint">
                                <img class="playButton" src="/icon/play-button-opt.png" alt="Play Button">
                            </div>
                        </button>
                        <button class="col-xs-12 col-md-6 col-lg-6" @click="isOpen14 = true">
                            <div>
                                <br><h4>NoiseTacticz Video Intro Amination</h4>
                            </div>
                            <div class="videoThumbnailContainer">
                                <img class="videoThumbnail" src="/videos/thumbnail/jpg/noisetacticz_thumbnail.jpg" alt="Marble Render">
                                <img class="playButton" src="/icon/play-button-opt.png" alt="Play Button">
                            </div>
                        </button>
                        <button class="col-xs-12 col-md-6 col-lg-6" @click="isOpen9 = true">
                            <div>
                                <br><h4>Hot4D - Cinema 4D Water Demo</h4>
                            </div>
                            <div class="videoThumbnailContainer">
                                <img class="videoThumbnail" src="/videos/thumbnail/jpg/water_sphere_thumbnail.jpg" alt="Pool Table">
                                <img class="playButton" src="/icon/play-button-opt.png" alt="Play Button">
                            </div>
                        </button>
                        <button class="col-xs-12 col-md-6 col-lg-6" @click="isOpen15 = true">
                            <div>
                                <br><h4>4K Rain Overlay Animation</h4>
                            </div>
                            <div class="videoThumbnailContainer">
                                <img class="videoThumbnail" src="/videos/thumbnail/jpg/rain_thumbnail.jpg" alt="Mechanical Heart Animation">
                                <img class="playButton" src="/icon/play-button-opt.png" alt="Play Button">
                            </div>
                        </button>
                        <button class="col-xs-12 col-md-6 col-lg-6" @click="isOpen16 = true">
                            <div>
                                <br><h4>4K Snow Overlay Animation</h4>
                            </div>
                            <div class="videoThumbnailContainer">
                                <img class="videoThumbnail" src="/videos/thumbnail/jpg/snow_thumbnail.jpg" alt="Mechanical Heart Animation">
                                <img class="playButton" src="/icon/play-button-opt.png" alt="Play Button">
                            </div>
                        </button>
                        <button class="col-xs-12 col-md-6 col-lg-6" @click="isOpen12 = true">
                            <div>
                                <br><h4>Fur Ball Animation</h4>
                            </div>
                            <div class="videoThumbnailContainer">
                                <img class="videoThumbnail" src="/videos/thumbnail/jpg/furball_thumbnail.jpg" alt="Mechanical Heart Animation">
                                <img class="playButton" src="/icon/play-button-opt.png" alt="Play Button">
                            </div>
                        </button>
                        <button class="col-xs-12 col-md-6 col-lg-6" @click="isOpen11 = true">
                            <div>
                                <br><h4>Autism Ontario Logo Animation</h4>
                            </div>
                            <div class="videoThumbnailContainer">
                                <img class="videoThumbnail" src="/videos/thumbnail/jpg/autism_ontario_thumbnail.jpg" alt="Marble Render">
                                <img class="playButton" src="/icon/play-button-opt.png" alt="Play Button">
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div style="display: flex; align-items: center; justify-content: center; height: 100vh; width: 100;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" height="200" width="200"><circle fill="none" stroke-opacity="1" stroke="#002366" stroke-width=".5" cx="100" cy="100" r="0"><animate attributeName="r" calcMode="spline" dur="0.5" values="1;80" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate><animate attributeName="stroke-width" calcMode="spline" dur="0.5" values="0;25" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" calcMode="spline" dur="0.5" values="1;0" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate></circle></svg>
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

    const isOpen1 = ref(false);
    const isOpen2 = ref(false);
    const isOpen3 = ref(false);
    const isOpen4 = ref(false);
    const isOpen5 = ref(false);
    const isOpen6 = ref(false);

    const isOpen7 = ref(false);
    const isOpen8 = ref(false);
    const isOpen9 = ref(false);
    const isOpen10 = ref(false);
    const isOpen11= ref(false);
    const isOpen12 = ref(false);
    const isOpen13 = ref(false);
    const isOpen14 = ref(false);
    const isOpen15 = ref(false);
    const isOpen16 = ref(false);
</script>