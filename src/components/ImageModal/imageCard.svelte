<script>
	import {
		modalOpen,
		modalBaseUrl,
		modalImage,
		w250,
	} from "../../stores/modalStore";
	export let imageName;
	export let alt;

	function openModal() {
		$modalOpen = true;
		$modalImage = imageName;
	}
</script>

<div class="image-container" on:click={openModal}>
	<img
		class="image"
		src={$modalBaseUrl + $w250 + imageName}
		{alt}
		loading="lazy"
	/>
</div>

<style>
	.image-container {
		padding: 0.25rem;
		width: 250px;
		height: 250px;
		box-shadow: 3px 5px 13px rgba(0, 0, 0, 0.5);
		border-radius: 15px;
		overflow: hidden;
	}

	.image {
		border-radius: 10px;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media screen and (max-width: 750px) {
		.image-container {
			padding: 0.25rem;
			width: 150px;
			height: 150px;
		}
	}
</style>
