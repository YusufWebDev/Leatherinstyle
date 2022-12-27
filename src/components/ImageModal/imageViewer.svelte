<script>
	import { allImages } from "./../../stores/modalStore.js";
	import ImageCard from "./imageCard.svelte";
	import { fade } from "svelte/transition";
</script>

<div class="grid-container">
	{#each $allImages as image, index}
		<div in:fade={{ duration: 200, delay: index * 25 }}>
			<ImageCard imageName={image.url} alt={image.alt} />
		</div>
	{/each}
</div>

<style>
	.grid-container {
		max-width: 1920px;
		margin: 200px auto 1rem;
		padding: 0 0.5rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		place-items: center;
		gap: 5px;
	}
	@media screen and (max-width: 400px) {
		.grid-container {
			margin: 100px auto 1rem;
		}
	}
	@media screen and (max-width: 500px) {
		.grid-container {
			margin: 125px auto 1rem;
		}
	}
	@media screen and (max-width: 550px) {
		.grid-container {
			margin: 140px auto 1rem;
		}
	}
	@media screen and (max-width: 750px) {
		.grid-container {
			grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
			margin: 150px auto 1rem;
		}
		@media screen and (max-width: 850px) {
			.grid-container {
				margin: 160px auto 1rem;
			}
		}
	}
</style>
