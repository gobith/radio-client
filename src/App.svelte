<script lang="ts">
  import Display from "../src/components/Display.svelte";
  import Panel from "../src/components/Panel.svelte";
  import List from "../src/components/List.svelte";
  import radio_list from "./stores/list-store";
  import display from "./stores/item-store";
</script>

{#if $radio_list}
  {#if $display}
    <div />
    <Display display={$display} />
    <div />
    <div />
    <Panel />
    <div />
    <div />
    <List list={$radio_list} />
    <div />
  {/if}
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
