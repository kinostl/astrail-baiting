<script>
  export let name = "No Name Found";
  export let description = "No Description Found";
  export let stats = [];
</script>

<style>
  h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

<h2>{name}<button class="success">Anchor</button></h2>
<div class="flex two-500">
  <div>
    <p>{description}</p>
  </div>
  <div>
    <table>
      <tr>
        <th>Entity</th>
        <th>Percent Chance</th>
      </tr>
      {#each stats as stat}
        <tr>
          <td>{stat.name}</td>
          <td>{stat.chance}</td>
        </tr>
      {/each}
    </table>
  </div>
</div>
