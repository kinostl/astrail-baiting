<script>
  import CurrentLocation from "../../_components/CurrentLocation.svelte";
  let name = "waluigi";
</script>

<svelte:head>
  <title>{name}'s Ship</title>
</svelte:head>
<h1>Welcome Back to Ship Name, {name}!</h1>

<CurrentLocation />

<h2>Loadout and Supplies</h2>
<div class="flex two-500">
  <div>
    <dl>
      <dt>Engine</dt>
      <dd>Huntmaster 9000</dd>
      <dt>Tractor Net</dt>
      <dd>Reelord 2600</dd>
    </dl>
  </div>
  <div>
    <table>
      <tr>
        <th>Supply</th>
        <th>Count</th>
        <th>
          <button class="warning">Rez All</button>
        </th>
      </tr>
      <tr>
        <td>Bait</td>
        <td>100</td>
        <td>
          <button>Resupply</button>
        </td>
      </tr>
    </table>
  </div>
</div>
