<script>
	import { fade } from "svelte/transition";
</script>

<div class="modal" transition:fade>
	<slot />
</div>

<style>
	.modal {
		display: grid;
		place-items: center;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100vw;
		height: 100vh;
		background-color: #ddd;
		z-index: 20;
		place-items: center;
	}
</style>
