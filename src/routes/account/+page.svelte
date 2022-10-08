<svelte:head>
	<title>Account</title>
	<meta name="description" content="Login/Register" />
</svelte:head>

{#if !loggedIn}
<section>
    <input type="text" placeholder="Username" bind:value={username} required>
    <input type="password" placeholder="Password" bind:value={password} required>
    <button id="Login" on:click={onLogin}>Login</button>
    <button id="Signup" on:click={onSignup}>Sign up</button>
</section>
{/if}

{#if loggedIn}
<section>
    <h1>Logged in</h1>
    <button on:click={onLogout}>Log out</button>
    <button on:click={onDelete}>Delete Account</button>
</section>
{/if}

<script>
    import fetchJson from "../../lib/util/FetchJson.js"
    import { onMount } from "svelte"

    let username;
    let password;

    let loggedIn;

    onMount(() => {
        loggedIn = localStorage.getItem("token") ? true : false;
    })

    function onLogin() {
        if (!username || !password) {
            alert("Please fill out all the fields!");
            return;
        }
        fetchJson("/user/login", {
            method: "POST",
            body: JSON.stringify(
                {
                    name: username,
                    password: password
                }
            )
        })
        .then((response) => {
            localStorage.setItem("token", response.token);  
            console.log (response.token);
            console.log(JSON.stringify(response));

            if (response.error){
                alert(response.error);
                return;
            }

            window.location.href = "";
        })
      }
      function onSignup() {
        if (!username || !password) {
            alert("Please fill out all the fields!");
            return;
        }
        fetchJson("/user/register", {
            method: "POST",
            body: JSON.stringify(
                {
                    name: username,
                    password: password
                }
            )
        })
        .then((response) => {
            localStorage.setItem("token", response.token);
            window.location.href = "/";
        })
      }
      function onLogout() {
        localStorage.removeItem("token");
        window.location.reload();
      }
      function onDelete(){
        fetchJson("/user/delete", {
            method: "DELETE",
            headers: {
                "Authorization": localStorage.getItem("token"),
            }
        })
        .then((response)=> {
            if (!response.error) {
                localStorage.removeItem("token");
                window.location.reload();
            }
        });
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