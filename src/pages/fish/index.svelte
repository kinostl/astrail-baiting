<script>
  import CurrentLocation from "../../_components/CurrentLocation.svelte";
  import { client, session } from "../../store";
  import { onMount } from "svelte";
  let anchors = [];
  let current_location = {
    name:'Test Name',
    description: 'Test Desc',
    stats:[
      {'name':'Doge','chance':5}
    ]
  }
  onMount(async () => {
    anchors = await client.listStorageObjects(
      $session,
      "anchors",
      $session.user_id
    );
    anchors=anchors.objects
    current_location = await client.readStorageObjects($session, {
      object_ids: [
        {
          collection: "player_data",
          key: "current_location",
          user_id: $session.user_id,
        },
      ],
    });
    current_location = current_location.objects[0].value;
    console.log(current_location)
  });

  let doTeleport = async () => {
    current_location = await client.rpcGet("teleport", $session);
    current_location = current_location.payload;
  };

  let viewAnchor = (anchor) => {
    current_location = anchor
  }
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
<CurrentLocation {...current_location} />
<div class="random-teleport">
  <p class="label warning">
    <span>Warning!</span>
    <br />
    <span class="small">
      You can never teleport back to an unanchored location.
    </span>
  </p>
  <button on:click|preventDefault={doTeleport} class="error">Teleport</button>
</div>
<h2>Your Anchors</h2>
<div class="flex">
  {#each anchors as anchor}
  <div>
    <article class="card">
      <header>
        <h3>{anchor.value.name}</h3>
      </header>
      <button on:click={viewAnchor(anchor)} class="stack">View</button>
    </article>
  </div>
  {/each}
</div>
