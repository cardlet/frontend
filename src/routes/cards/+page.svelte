<svelte:head>
	<title>cards</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div id="create-container">
		<input type="text" id="question" placeholder="Question" bind:value={question}>
		<input type="text" id="solution" placeholder="Solution" bind:value={solution}>
		<button name="" id="create" on:click={onCreateCard}>Create</button>

	</div>
	<div id="cards">
		{#each cards as card}
			<span>
				<div>
					<img src={book} alt="">
					<span>Question: {card.question}</span>
					<span>Solution: {card.solution}</span>
				</div>
				<button on:click={editCard(card)} id="edit">Edit</button>
				<button on:click={deleteCard(card)} >Delete</button>
			</span>
		{/each}
	</div>

</section>

<script>
	import fetchJson from '../../lib/util/FetchJson.js'
	import book from '$lib/images/book.svg';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	
	const deskId = $page.url.searchParams.get('deskId')

	let cards = [];

	let question, solution;
	

	
	function onCreateCard() {
		if (!solution || !question) {
			alert("Card name can't be empty!"); 
			return;
		}
		fetchJson("/cards/create", {
			method: 'POST',
			headers: {
				"Authorization": localStorage.getItem("token"),
			},
			body: JSON.stringify(
				{
					solution: solution,
					question: question,
					deskId: parseInt(deskId),
				}
			)
		}).then((json) => {
			alert(JSON.stringify(json));
			if (!json.error) {
				cards.push(json);
				cards = cards;
				question = "";
				solution = "";
			}
		})
	}

	async function getCards() {
		fetchJson("/cards", {})
		.then((json) => {
			cards = json;
		})
	}

	function deleteCard(card) {
		const id = card.ID;
		fetchJson(`/cards/delete/${id}`, {
			method: 'DELETE',
			headers: {
				"Authorization": localStorage.getItem("token"),
			},
		}).then((json) => {
			if (json.ok) {
				let index = cards.indexOf(card);
				cards.splice(index, 1);
				cards = cards;
			}
		})

	}

	function editCard() {

	}

	onMount(() => {
		getCards();
	})
	
</script>

<style>
	#create-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 3rem;
	}

	#cards {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	
	#cards>span {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0.3rem 0;
	}

	#cards>span>div {
		display: flex;
		align-items: center;
	}

	#cards>span>div>* {
		margin-right: 1.5rem;
	}

	#solution {
		justify-content: right;
		position: relative;
		margin-right: 40%;
	}

	#edit {
		display: flex;
		align-items: right;
		margin-right: 0.7rem;
		margin-left: auto;
	}
</style>