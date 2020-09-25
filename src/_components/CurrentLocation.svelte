<script>
  export let entities = [];
</script>

<style>
  h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

<h2>Unanchored Location <button class="success">Anchor</button></h2>
<div class="flex two-500">
  <div>
    <p>Random nonsense</p>
  </div>
  <div>
    <table>
      <tr>
        <th>Entity</th>
        <th>Percent Chance</th>
      </tr>
      {#each entities as entity}
        <tr>
          <td>{entity.name}</td>
          <td>{entity.chance}</td>
        </tr>
      {/each}
    </table>
  </div>
</div>
