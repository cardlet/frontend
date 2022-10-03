<svelte:head>
	<title>Account</title>
	<meta name="description" content="Login/Register" />
</svelte:head>

<section>
    <input type="text" placeholder="Username" bind:value={username} required>
    <input type="password" placeholder="Password" bind:value={password} required>
    <button id="Login" on:click={onLogin}>Login</button>
    <button id="Signup" on:click={onSignup}>Sign up</button>
</section>

<script>
    import fetchJson from "../../lib/util/FetchJson.js"

    let username;
    let password;
    function onLogin() {
        if (!username || !password) {
            alert("Please fill out all the fields!");
            return;
        }
        alert("Clicked login btn")
      }
      function onSignup() {
        if (!username || !password) {
            alert("Please fill out all the fields!");
            return;
        }
        fetchJson("http://localhost:8000/user/register", {
            method: "POST",
            body: JSON.stringify(
                {
                    name: username,
                    password: password,
                    bio: ""
                }
            )
        })
        .then((json) => {
            alert(JSON.stringify(json));
            
        })
      }
</script>

<style>
    section {
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0rem;
        
    }
        
    input {
        padding: 0.6rem 1rem;
        border-radius: 0.5rem;
        margin: 0.5rem 0;
        width: 20rem;
        
    }

    button {
        width: 22.3rem;
        transform: translate(-0rem, 0rem);
        padding: 0.5rem;
        margin-top: 1rem;
        border-radius: 0.5rem;
    }

    button:hover {
        cursor: pointer;
        filter: sepia(0.7);
        transition: all 0.3s ease-in-out;
    }
</style>