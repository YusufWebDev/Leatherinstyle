<script>
	import { blur } from "svelte/transition";
	import {
		modalBaseUrl,
		modalOpen,
		modalImage,
		modalImageSet,
		modalImageIndex,
		allImages,
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

	// creates an array from the stores images list to get the list of url's(image names from imagekit.io)
	let modalImageArray = [];
	function setModalImageArray() {
		$allImages.forEach((item) => {
			modalImageArray.push(item.url);
		});
	}
	setModalImageArray();

	// changes the current modal image index in the modalImageArray function
	function nextModalImage() {
		$modalImageIndex++;

		if ($modalImageIndex >= modalImageArray.length) $modalImageIndex = 0;
		$modalImage = modalImageArray[$modalImageIndex];
	}
	function previousModalImage() {
		$modalImageIndex--;

		if ($modalImageIndex <= 0) $modalImageIndex = modalImageArray.length - 1;
		$modalImage = modalImageArray[$modalImageIndex];
	}
	$: $modalImageIndex = modalImageArray.indexOf($modalImage);
	// console.log($modalImage);
	// $: modalCurrentImageIndex;
	// $: $modalImage = modalImageArray[modalCurrentImageIndex];
	// $modalImage = modalImageArray[modalCurrentImageIndex];
	// console.log(modalImageArray[modalCurrentImageIndex]);
	// nextModaleImage($modalImage);
	// console.log($modalBaseUrl);
	// console.log($allImages);
</script>

<!-- src="https://ik.imagekit.io/YusufWebDev/RHDesigns/vinylGallery/tr:w-1440/MILNERTON.webp" -->

<div class="modal">
	<div class="close" on:click={closeModal}>&times;</div>
	<div class="image-container" transition:blur={{ amount: 25 }}>
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
	<div class="arrows">
		<button class="arrow left" on:click={previousModalImage}>&lArr;</button>
		<button class="arrow right" on:click={nextModalImage}>&rAarr;</button>
	</div>
</div>

<style>
	.close {
		position: absolute;
		display: grid;
		place-items: center;
		top: 20px;
		right: 20px;
		width: 100px;
		height: 100px;
		/* background-color: red; */
		color: #fff;
		cursor: pointer;
		font-size: 3rem;
		color: #eee;
		z-index: 100;
	}

	.arrow {
		outline: none;
		font-size: 2rem;
		background-color: transparent;
		border: none;
		color: #555;
		z-index: 5;
		cursor: pointer;
	}

	.arrows {
		/* background-color: red; */
		width: 100%;
		height: 25%;

		display: grid;
		justify-self: center;
		align-items: stretch;
		grid-template-columns: 1fr 1fr;
		padding: 1rem;
	}
	.left {
		text-align: left;
		padding-left: 2rem;
	}
	.right {
		padding-right: 2rem;
		text-align: right;
	}
	.modal {
		display: grid;
		place-items: center;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.9);
		z-index: 20;
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
		height: 97vh;
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
			/* padding: 0.25rem; */
			width: 99vw;
			height: 95vh;
		}
		.arrows {
			padding: 0;
		}
		.close {
			right: 0;
			place-items: end;
			padding: 0.5rem;
		}
		.right {
			padding-right: 0.5rem;
		}
		.left {
			padding-left: 0.5rem;
		}
	}
</style>
