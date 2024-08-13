<script lang="ts">
    export let data;
</script>

<div>
  {#each data.names as { name }}
    <div class=""> {name}</div>
  {/each}
</div>