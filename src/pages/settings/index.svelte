<script>
  let name = "waluigi";
</script>

<svelte:head>
  <title>Settings</title>
</svelte:head>

<h1>Hello {name}</h1>
<div>
  <button>Log Out</button>
  <hr />
  <form>
    <label for="name">Name</label>
    <input type="text" name="name" placeholder="Name" />
    <label for="profile">Profile</label>
    <textarea placeholder="Profile"></textarea>
    <button type="submit">Update Profile</button>
  </form>
  <hr />
  <button class="error">Delete Account</button>
</div>
