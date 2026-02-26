<template>
	<div>
		<div class="heroContainer">
			<div>
				<h1>GARETH RICHARDSON</h1>
				<div class="heroContainer_h2">
					<h2 class="heroContainer_h2_1">Technologist</h2>
					<h2 class="heroContainer_h2_2">Software Engineer</h2>
					<h2 class="heroContainer_h2_3">Content Creator</h2>
				</div>
			</div>
		</div>
		<div class="heroContainerMobile">
			<div>
				<h1>GARETH <br> RICHARDSON</h1>
				<div class="heroContainer_h2">
					<h2 class="heroContainer_h2_1">Technologist</h2>
					<h2 class="heroContainer_h2_2">Software Engineer</h2>
					<h2 class="heroContainer_h2_3">Content Creator</h2>
				</div>
			</div>
		</div>
		<div class="noiseBar"></div>
		<div style="display: none;">
			<svg xmlns="http://www.w3.org/2000/svg">
				<filter id="filmGrain">
					<!-- Generate noise: Adjust baseFrequency for size (e.g., 0.5 to 0.8) -->
					<feTurbulence 
					type="fractalNoise" 
					baseFrequency="0.65" 
					numOctaves="12" 
					stitchTiles="stitch" />
					
					<!-- Adjust intensity: Change the last '0.05' for opacity (0-1) -->
					<feColorMatrix 
					type="matrix" 
					values="0 0 0 0 0.5 
							0 0 0 0 0.5 
							0 0 0 0 0.5 
							0 0 0 .1 0" />
				</filter>
			</svg>
		</div>
	</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    #vue-canvas {
        display: block;
        margin: 0 auto;
        margin-top: 120px;
        padding: 0;
        overflow: hidden;
    }

	.grain-overlay {
		filter: url(#filmGrain);
		/* Ensure it covers the target element */
		position: fixed;
		width: 100vh;
	}

	.noiseBar {
		width: 100%;
		height: 667px;
		filter: url(#filmGrain);
		position: absolute;
		top: 186px;
		z-index: 1;
		cursor: pointer;
	}

	@media (width <= 64rem) {

		.noiseBar {
			top: 162px;
		}

		#vue-canvas {
			display: block;
			margin: 0 auto;
			margin-top: 96px;
			padding: 0;
			overflow: hidden;
		}
	}

</style>