<script lang="ts">
  import Display from "../src/components/Display.svelte";
  import Panel from "../src/components/Panel.svelte";
  import List from "../src/components/List.svelte";
  import radio_list from "./stores/list-store";
  import display from "./stores/item-store";
</script>

{#if $radio_list}
  {#if $display}
    <div class="center">
      <Display display={$display} />
      <Panel />
      <List list={$radio_list} />
    </div>
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
    height: 100vh;
    color: white;
  }

  .center {
    margin: auto;
    width: auto;
    max-width: 500px;
    padding: 10px;
    display: grid;
    gap: 10px;
  }
</style>
