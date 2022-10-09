<script>
	import { fly } from "svelte/transition";
</script>

<div class="header">
	<div class="logo">
		<img
			src="https://ik.imagekit.io/YusufWebDev/Leather_in_Style/Leather_in_Style_Logo_Main.png"
			alt="Leather in style logo"
		/>
	</div>
	<nav class="nav">
		<ul>
			<li><a href="/contact">I'm Interested</a></li>
			<!-- <li>How to Order</li> -->
		</ul>
	</nav>
</div>

<style>
	a {
		text-decoration: none;
	}
	.header {
		position: fixed;
		top: 0;
		left: 0;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
		border-radius: 0px 0px 15px 15px;
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		background-color: rgb(255, 252, 244);
		margin-bottom: 1rem;
	}
	.logo {
		min-width: 300px;
		padding: 1rem;
		width: auto;
		height: auto;
	}
	.logo img {
		width: 100%;
		height: 100%;
		filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.2));
	}
	.nav ul {
		display: flex;
	}
	.nav ul li {
		list-style: none;
		font-size: 1rem;
		margin: 1.5rem;
	}
	@media screen and (max-width: 800px) {
		.header {
			flex-direction: column;
			max-height: 150px;
			min-width: 300px;
		}
		.nav ul li {
			list-style: none;
			font-size: 1rem;
			margin: 0 1rem;
		}
		.logo {
			max-height: 75%;
			max-width: 75%;
			padding: 0rem;
		}
	}
</style>
