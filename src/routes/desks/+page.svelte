<svelte:head>
	<title>desks</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

	<input type="text" id="deskname" placeholder="Name of your new desk">
	<button name="" id="save">Save</button>

</section>


<style>
	#deskname {
		position: absolute;
		align-items: center;
		width: 14%;
		left: 2%;
		top: 10%;
		display: flex;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		background-color: var(--color-bg-2);
	}

	#save {
		position: absolute;
		right: 2%;
		top: 10%;
		display: flex;
		align-items: center;
		background-color: var(--color-bg-2);
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
	}

	#save:hover {
		text-decoration: none;
		filter: drop-shadow(2);
	}

</style>