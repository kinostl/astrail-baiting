<script>
  import { onMount } from "svelte";
  let name = "waluigi";
  let trades = [];
  onMount(async () => {
    const res = await fetch("http://localhost:1337/trades");
    trades = await res.json();
  });
</script>

<svelte:head>
  <title>Welcome to Store</title>
</svelte:head>

<h1>Welcome to Store, {name}</h1>

<div class="flex">
  {#each trades as trade}
    <div>
      <article class="card">
        <header>
          <h3>{trade.anchor.name}</h3>
          <span>${trade.price}</span>
        </header>
        <button class="stack">Buy</button>
      </article>
    </div>
  {/each}
</div>
