<script>
	import { page } from '$app/stores';
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src="/favicon.svg" alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<input type="checkbox" name="nav-toggle" id="nav-toggle">
		<label id="hamburger" for="nav-toggle">
			<span></span>
			<span></span>
			<span></span>
		</label>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a href="/">Home</a>
			</li>
			<li class:active={$page.url.pathname === '/account'}>
				<a href="/account">Account</a>
			</li>
			<li class:active={$page.url.pathname.startsWith('/about')}>
				<a href="/about">About</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 2vw;
		position: relative;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	nav ul {
		position: absolute;
		top: 5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 1rem;
		padding: 1rem 2rem;
		width: calc(100% - 2rem);
		left: 0;
		list-style: none;
		transition: all ease-in-out 0.3s;
		border-radius: 1rem;
		background-color: var(--color-bg-2);
		z-index: 100;
		opacity: 0;
		visibility: hidden;
	}

	nav li {
		padding: 0.2rem 0.5rem;
	}

	nav a {
		color: var(--color-theme-2);
		font-weight: 700;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration-style: solid;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	#nav-toggle {
		display: none;
	}

	#hamburger {
		width: 2rem;
		height: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		cursor: pointer;
	}

	#hamburger span {
		width: 100%;
		height: 15%;
		background-color: var(--color-text);
		transition: all 0.3s ease-in-out;
	}

	#nav-toggle:checked ~ ul {
		opacity: 1;
		visibility: visible;
	}

	#nav-toggle:checked ~ #hamburger span {
		width: 95%;
	}

	#nav-toggle:checked ~ #hamburger span:nth-child(1) {
		transform: rotate(45deg);
		transform-origin: top left;
	}

	#nav-toggle:checked ~ #hamburger span:nth-child(2) {
		transform-origin: center;
		width: 0;
	}

	#nav-toggle:checked ~ #hamburger span:nth-child(3) {
		transform: rotate(-45deg);
		transform-origin: bottom left;
	}

	@media (min-width: 720px) {
		nav ul {
			display: flex;
			flex-direction: row;
			opacity: 1;
			width: min-content;
			position: initial;
			background-color: transparent;
			padding: 0;
			visibility: visible;
		}

		#hamburger {
			display: none;
		}
	}
</style>
