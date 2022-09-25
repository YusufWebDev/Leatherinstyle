<div class="modal">
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
		background-color: rgba(0, 0, 0, 0.9);
		z-index: 20;
		place-items: center;
	}
</style>
