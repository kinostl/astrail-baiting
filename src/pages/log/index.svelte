<script>
  let name = "waluigi";
</script>

<svelte:head>
  <title>Hello {name}</title>
</svelte:head>

<h1>Hello {name}</h1>
<form
  on:submit|preventDefault={(event) => {
    name = event.target[0].value;
  }}>
  <label for="log">Captain's Log</label>
  <textarea id="log" class="stack" />
  <button class="stack" type="submit">Submit</button>
</form>
