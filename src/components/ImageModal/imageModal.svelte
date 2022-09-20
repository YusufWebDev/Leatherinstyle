<script>
	import { fade } from "svelte/transition";
	import {
		modalBaseUrl,
		modalOpen,
		modalImage,
		modalImageSet,
		w800,
		w900,
		w1200,
		w1440,
	} from "../../stores/modalStore.js";
	import Spinner from "../spinner.svelte";
	function closeModal() {
		$modalOpen = false;
		$modalImage = "";
		$modalImageSet = "";
	}
</script>

<!-- src="https://ik.imagekit.io/YusufWebDev/RHDesigns/vinylGallery/tr:w-1440/MILNERTON.webp" -->

<div class="modal" on:click={closeModal}>
	<div class="image-container" transition:fade>
		<div class="loading">
			<Spinner />
		</div>
		<img
			sizes="(max-width: 1200px) 1200px"
			class="image"
			src={$modalBaseUrl + $modalImage}
			srcset="{$modalBaseUrl + $w800 + $modalImage} 800w,
			{$modalBaseUrl + $w900 + $modalImage} 900w,
			{$modalBaseUrl + $w1200 + $modalImage} 1200w,
			{$modalBaseUrl + $w1440 + $modalImage} 1440"
			alt="some leather products from leather in style"
		/>
	</div>
</div>

<style>
	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100vw;
		height: 100vh;
		background-color: rgba(14, 14, 14, 0.929);
		z-index: 999;
		place-items: center;
	}

	.image-container {
		position: fixed;
		/* background-color: #fff; */
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 0.25rem;
		width: 65%;
		height: 100vh;
	}

	.loading {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
	}

	.image {
		width: 100%;
		height: 100%;
		object-fit: contain;
		/* box-shadow: 3px 5px 13px rgba(0, 0, 0, 0.5); */
	}

	@media screen and (max-width: 750px) {
		.image-container {
			/* background-color: #fff; */
			padding: 0.25rem;
			width: 90vw;
			height: auto;
		}
	}
</style>
