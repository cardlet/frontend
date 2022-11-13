<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#if !showResult}    
<section>
    {#if card}
    <h2>{card.question}</h2>
    <div>
        <input type="text" placeholder="Answer" id="answer" bind:value={answer}>
        {#if !showNextButton}
        <button id="confirm" on:click={confirmAnswer}>Confirm</button>
        {/if}
    </div>
    {/if}
    <h3 style="color: {color}">{validation}</h3>
    {#if correction}
    <p style="color: green;">{correction}</p>
    {/if}
    {#if showNextButton}
    <button on:click={onNext}>Next</button>
    {/if}
</section>
{:else}
    <section>
        <h1 id="feedback" style="color: {feedbackColor}">{feedbackMessage}</h1>
        <h2> Correct answers: {correctAnswerCount}</h2>
    </section>
{/if}

<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
	import fetchJson from '../../lib/util/FetchJson';
	
	const deskId = $page.url.searchParams.get('deskId');

    let showNextButton = false;

    let answer;

    let cards = [];

    let color = "red";

    let index = 0;
    let validation = "";
    let correction = "";

    let card = cards[index];

    let showResult = false;
    let correctAnswerCount = 0;

    let feedbackColor; 
    let feedbackMessage;


    onMount(() => {
        fetchJson("/cards/" + deskId)
        .then((json) => {
            if (json.error){
                alert(JSON.stringify(json))
            } else {
                cards = json;
                shuffleArray(cards);
                card = cards[index];
            }
            
        })
    })

    function confirmAnswer() {
        if (answer == card.solution) {
            validation = "Correct answer!"
            color = "green"
            correctAnswerCount += 1;
        }
        else {
            validation = "Wrong answer!";
            color = "red";
            correction = card.solution;
        }
        showNextButton = true;
    }
     function onNext() {
        showNextButton = false;
        validation = "";
        correction = "";
        answer = "";
        if (index < cards.length - 1) {
            index += 1;
            card = cards[index];
        } else { 
            showResult = true;
            onShowResult();
        }    
     }

    function shuffleArray(arr) {
        arr.sort(() => Math.random() - 0.5);
    }

    function onShowResult() {
        let percentage = correctAnswerCount / cards.length;
        switch (Math.round(percentage * 2) / 2) {
            case 0:
                feedbackColor = "red";
                feedbackMessage = "Failure!";
                break;
            case 0.5:
                feedbackColor = "yellow";
                feedbackMessage = "Average!";
                break;
            case 1:
                feedbackColor = "green";
                feedbackMessage = "Awesome!"
                break;
        }
    }
</script>

<style>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 75vh;
    }
    button{
        margin: 1rem 0;
    }
    #feedback {
        font-weight: 900;
    }
</style>