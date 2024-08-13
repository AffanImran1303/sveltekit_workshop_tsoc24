<script>
  import Navbar from "$lib/Navbar.svelte";
  import "../app.css";
</script>
<style lang="postcss">
  :global(html){
      background-color: black;
      color:white;
  }
</style>
<Navbar/>
<slot/>