<script>
	import Modal from "../../components/modal.svelte";
	import { goto } from "$app/navigation";
	import Svg from "../../icons/facebook.png";

	function closeModal() {
		goto("/");
	}
</script>

<Modal>
	<div class="card">
		<div class="close" on:click={closeModal}>&times;</div>
		<div class="title">
			<div class="image">
				<img
					src="https://ik.imagekit.io/YusufWebDev/Leather_in_Style/Logo-Bag.png"
					alt=" line drawing of a bag"
				/>
			</div>
			<h3>Contact Me</h3>
			<hr />
		</div>
		<div class="info">
			<strong class="name">Fareeda Davids</strong>
			<p class="cell">cell: <strong>073 009 1693</strong></p>
			<p class="email">email: <strong>fareeda.davids@gmail.com</strong></p>
			<a
				class="fb"
				href="https://web.facebook.com/people/Leathers-in-Style/100083457819938/"
				target="_blank"><img src={Svg} alt="facebook logo" /></a
			>
		</div>
	</div>
</Modal>

<style>
	.card {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		height: 350px;
		width: 340px;
		background-color: rgba(250, 208, 208, 0.685);
		border-radius: 20px;
		box-shadow: 2px 5px 8px rgb(0, 0, 0);
	}
	.image {
		width: 90%;
		height: auto;
		text-align: center;
		margin: 0 auto;
	}
	.title {
		font-size: 2rem;
	}

	.info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.name {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
	.email,
	.cell {
		font-size: 1.1rem;
	}
	.close {
		position: absolute;
		display: grid;
		place-items: center;
		top: 25px;
		right: 20px;
		width: 35px;
		height: 35px;
		/* background-color: red; */
		color: #fff;
		cursor: pointer;
		font-size: 2rem;
		color: #000;
		z-index: 100;
		background-color: #fff;
		border-radius: 50%;
	}

	.fb {
		padding: 10px;
		font-size: 30px;
		width: 50px;
		text-align: center;
		text-decoration: none;
		margin: 3px 2px;
	}

	.fb:hover {
		opacity: 0.7;
	}
</style>
