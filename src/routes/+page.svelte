<script>
	import welcome from '$lib/images/cardlet.png';
	import book from '$lib/images/book.svg';
	import { onMount } from "svelte"

	let loggedIn;

	onMount(() => {
		loggedIn = localStorage.getItem("token") ? true : false;
	})

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#if loggedIn}
		<a href="/desks" id="corner">
			<img id="image" src={book} alt="">
			<span>New Desk</span>
		</a>
	{/if}
	<h1>
		<span class="welcome">
			<img src={welcome} alt="" />
		</span>

		Cardlet
	</h1>

	<h2>
		<strong>learn2learn</strong>
	</h2>
</section>

<style>
	section {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	a {
		position: absolute;
		right: 0;
		top: 0;
		display: flex;
		align-items: center;
		background-color: var(--color-bg-2);
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
	}

	a:hover {
		text-decoration: none;
		filter: opacity(0.8);
	}
	
	a img {
		width: 20%;
	}

	a span {
		font-size: 1rem;
		margin-left: 0.5rem;		
	}
</style>
