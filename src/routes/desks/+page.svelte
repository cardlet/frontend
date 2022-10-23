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
				<div>
					<img src={book} alt="">
					<a href="/cards?deskId={desk.ID}">{desk.name}</a>
					<span>Cards: {desk.cardCount}</span>
				</div>
				<button  id="start" on:click={start(desk)} >Start</button>
				<button on:click={deleteDesk(desk)}>Delete</button>
			</span>
		{/each}
	</div>

</section>

<script>
	import fetchJson from '../../lib/util/FetchJson.js'
	import book from '$lib/images/book.svg';
	import { onMount } from 'svelte';
	
	let desks = [];

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
			desks.push(json);
			desks = desks;
			deskName = "";
		})
	}

	async function getDesks() {
		fetchJson("/desks", {})
		.then((json) => {
			desks = json;
		})
	}

	function deleteDesk(desk) {
		const id = desk.ID;
		fetchJson(`/desks/delete/${id}`, {
			method: 'DELETE',
			headers: {
				"Authorization": localStorage.getItem("token"),
			},
		}).then((json) => {
			if (json.ok) {
				let index = desks.indexOf(desk);
				desks.splice(index, 1);
				desks = desks;
			}
		})

	}

	onMount(() => {
		getDesks();
	})
	
	const start = (desk) =>  {
		window.location.href = "/train" + "?deskId=" + desk.ID;
	}
</script>

<style>
	#create-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 3rem;
	}

	#desks {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	
	#desks>span {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0.3rem 0;
	}

	#desks>span>div {
		display: flex;
		align-items: center;
	}

	#desks>span>div>* {
		margin-right: 1.5rem;
	}

	#start {
		margin-left: auto;
		margin-right: 0.7rem;
	}
</style>