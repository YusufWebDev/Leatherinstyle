<script>
	import { logo, modalBaseUrl } from "../../stores/modalStore";
</script>

<div class="header">
	<div class="logo">
		<img src={$modalBaseUrl + $logo.url} alt={$logo.alt} />
	</div>
	<nav class="nav">
		<ul>
			<li>Contact</li>
			<li>How to Order</li>
		</ul>
	</nav>
</div>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
	}
	.logo {
		width: 200px;
		height: 200px;
	}
	.logo img {
		width: 100%;
		height: 100%;
	}
	.nav ul {
		display: flex;
	}
	.nav ul li {
		list-style: none;
		font-size: 1.2rem;
		margin: 1.5rem;
	}
	@media screen and (max-width: 750px) {
		.header {
			flex-direction: column;
		}
	}
</style>
