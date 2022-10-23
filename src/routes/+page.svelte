<script>
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
	<h1><strong><i>Cardlet</i></strong> is a cross-platform desktop flashcard app.</h1>
	<p>The process is automatically synced with the servers, therefore you can access your flash cards from any device you want to. No personal data is tracked or stored and therefore is privacy friendly in comparison to non-libre alternatives.</p>
	{#if !loggedIn}
	<a id="sign-up" href="/account">Sign up now</a>
	{/if}
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
		width: 90%;
	}

	p {
		width: 90%;
		text-align: center;
	}

	#corner {
		position: absolute;
		right: 0;
		top: 0;
		display: flex;
		align-items: center;
		background-color: var(--color-bg-2);
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
	}

	#corner:hover {
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
