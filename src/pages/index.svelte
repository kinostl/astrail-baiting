<script>
  import { client, session } from "../store";
  import { metatags } from "@sveltech/routify";
  metatags.title = "Space Fishing";
  metatags.description = "Fishing ... IN SPACE";
  let errors = null;
  let doSubmit = async () => {
    try {
      errors = null;
      let _session = await client.authenticateEmail({
        email: "auth@example.com",
        password: "password",
      });
      session.login(_session);
    } catch (e) {
      errors = e;
    }
  };
</script>

{#if $session}
  You logged in!
{:else}
  <form on:submit|preventDefault={doSubmit}>
    {#if errors}
      <span class="label error">There was a problem logging in <br /> Please check
        your password and username.</span>
    {/if}
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <button type="submit">Log In</button>
  </form>
{/if}
