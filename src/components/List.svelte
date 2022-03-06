<script lang="ts">
  import Item from "./Item.svelte";
  export let list;
</script>

<ul>
  {#each list as item}
    <Item {item} />
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    overflow-y: auto;
    margin-bottom: 10px;
    border: solid 1px rgba(255, 255, 255, 0.6);
    border-radius: 2px;
  }
</style>
