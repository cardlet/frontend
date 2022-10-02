<svelte:head>
	<title>Account</title>
	<meta name="description" content="Login/Register" />
</svelte:head>

<section>
    <form action="">
        <input type="text" placeholder="Username" name="username" required>
        <input type="password" placeholder="Password" name="password" required>
        <button id="Login" type="submit" on:submit={onLogin}>Login</button>
        <button id="Signup" type="submit" on:submit={onSignup}>Sign up</button>
    </form>
</section>

<script>
    function onLogin() {
        alert("Clicked login btn")
      }
      function onSignup(){

      }
</script>

<style>
    form {
        min-height: 90vh;
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
        margin-bottom: 3rem;
        border-radius: 0.5rem;
    }

    button:hover {
        cursor: pointer;
        filter: sepia(0.7);
        transition: all 0.3s ease-in-out;
    }

    #Signup {
        color: blue;
    }
</style>