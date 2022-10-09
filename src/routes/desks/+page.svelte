<svelte:head>
	<title>desks</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div id="create-container">
		<input type="text" id="deskname" placeholder="Name of your new desk" bind:value={deskName}>
		<button name="" id="create" on:click={onCreateDesk}>Create</button>

	</div>

	<div id="desks">
		{#each desks as desk}
			<span>
				<a href="/desks/{desk.ID}">{desk.name}</a>
				<span>Cards: </span>
				<img src={book} alt="">
			</span>
		{/each}
	</div>

</section>

<script>
	import fetchJson from '../../lib/util/FetchJson.js'
	import book from '$lib/images/book.svg';

	let desks = [
		{
		name: "Test",
		cardCount: 2,
	},{
		name: "Hallo",
		cardCount: 3,
	}];

	let deskName; 
	
	function onCreateDesk() {
		if (!deskName) {
			alert("Desk name can't be empty!"); 
			return;
		}
		fetchJson("/desks/create", {
			method: 'POST',
			headers: {
				"Authorization": localStorage.getItem("token"),
			},
			body: JSON.stringify(
				{
					name: deskName,
				}
			)
		}).then((json) => {
			alert(JSON.stringify(json));
		})
	}
</script>

<style>
	#create-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 3rem;
	}

	#deskname {
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		background-color: var(--color-bg-2);
	}

	#create {
		background-color: var(--color-bg-2);
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
	}

	#create:hover {
		text-decoration: none;
		filter: drop-shadow(0 0 2rem var(--color-theme-2));
		cursor: pointer;
	}

</style>