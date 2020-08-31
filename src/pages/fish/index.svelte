<script>
  import CurrentLocation from "../../_components/CurrentLocation.svelte";
  let name = "waluigi";
</script>

<style>
  .random-teleport {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .random-teleport {
    font-size: 1.5em;
    font-weight: bold;
    gap: 0.5em;
  }
  .random-teleport .warning {
    margin: 0 auto;
    padding: 0.75em;
  }
  .random-teleport .small {
    font-weight: normal;
    font-size: 0.75em;
  }
</style>

<svelte:head>
  <title>Welcome to Fish</title>
</svelte:head>
<h1>Welcome to Fishing Hole, {name}</h1>
<CurrentLocation />
<div class="random-teleport">
  <p class="label warning">
    <span>Warning!</span>
    <br />
    <span class="small">
      You can never teleport back to an unanchored location.
    </span>
  </p>
  <button class="error">Teleport</button>
</div>
<h2>Your Anchors</h2>
<div class="flex">
  <div>
    <article class="card">
      <header>
        <h3>Unanchored Location</h3>
      </header>
      <button class="stack">View</button>
    </article>
  </div>
  <div>
    <article class="card">
      <header>
        <h3>Dockland</h3>
      </header>
      <button class="stack">View</button>
    </article>
  </div>
  <div>
    <article class="card">
      <header>
        <h3>Rockland</h3>
      </header>
      <button class="stack">View</button>
    </article>
  </div>
  <div>
    <article class="card">
      <header>
        <h3>Sockland</h3>
      </header>
      <button class="stack">View</button>
    </article>
  </div>
</div>
