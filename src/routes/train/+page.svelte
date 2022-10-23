<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <h2>{card.question}</h2>
    <input type="text" placeholder="Answer" id="answer" bind:value={answer}>
    <button id="confirm" on:click={confirmAnswer}>Confirm</button>
    <h3 style="color: {color}">{validation}</h3>
</section>

<script>
    let answer;

    let cards = [{
        question: "alskdjf",
        solution: "franz"
    }]

    let color = "red";

    let card = cards[0];
    let validation = "";
    function confirmAnswer() {
        if (answer == card.solution) {
            validation = "Correct answer!"
            color = "green"
        }
        else {
            validation = "Wrong answer!";
            color = "red";
        }
    }
</script>