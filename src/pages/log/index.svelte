<script>
  import { onMount } from "svelte";

  import { client, session } from "../../store";
  let name = "waluigi";
  let report = "";
  let past_logs = [];
  let errors = null;
  let doSubmit = async () => {
    try {
      errors = null;
      let objects = [
        {
          collection: "logs",
          key: "latest_log",
          value: { report },
        },
      ];
      console.log(objects);
      await client.writeStorageObjects($session, objects);
    } catch (e) {
      errors = e;
    }
  };

  onMount(async () => {
    past_logs = await client.listStorageObjects($session, "logs", $session.user_id, 10);
    past_logs=past_logs.objects
  });
</script>

<svelte:head>
  <title>Hello {name}</title>
</svelte:head>

<h1>Hello {name}</h1>
{#if errors}
  <span class="label error">Something went wrong adding your log.</span>
{/if}
<form on:submit|preventDefault={doSubmit}>
  <label for="log">Captain's Log</label>
  <textarea
    id="log"
    class="stack"
    placeholder="Captains Log"
    bind:value={report} />
  <button class="stack" type="submit">Submit</button>
</form>
{#each past_logs as log}
  <h1>{log.key}</h1>
  <p>{log.value.report}</p>
{/each}
