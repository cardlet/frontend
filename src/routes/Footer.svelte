<footer>
	<div></div>
    <p>Copyright © {year}</p>
	<div id="social-links">
		<a href="https://github.com/cardlet">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</footer>

<script>
	import github from '$lib/images/github.svg';

	let year = new Date().getFullYear();
</script>

<style>
    footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 2rem;
	}

	footer p {
		font-weight: bold;
	}

	#social-links a img {
		height: 1.8rem;
		width: auto;
	}

	#social-links a:hover {
		filter: drop-shadow(0 0 0.7rem var(--color-theme-1));
	}
</style>