<script>
	import ImageViewer from "../components/ImageModal/imageViewer.svelte";
	import ImageModal from "../components/ImageModal/imageModal.svelte";
	import {
		modalOpen,
		modalBaseUrl,
		allImages,
		logo,
	} from "../stores/modalStore";
	export let data;
	$modalBaseUrl = data.baseURL;
	$allImages = data.images;
	$logo = data.logo;
	// console.log(imagesData);
</script>

{#if $modalOpen}
	<ImageModal />
{/if}
<main class="main">
	<ImageViewer />
</main>

<style>
	.main {
		align-items: center;
	}
</style>
