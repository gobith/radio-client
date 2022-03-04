<script lang="ts">
  import Display from "../src/components/Display.svelte";
  import List from "../src/components/List.svelte";
  import radio_list from "./stores/radio-list-store";
</script>

{#if $radio_list}
<div />
<Display />
<div />
<div />
<List list={$radio_list} />
<div />
{/if}

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #4b4b4b;
  }
  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: min-content 1fr;
    overflow: hidden;
    color: white;
  }
</style>
