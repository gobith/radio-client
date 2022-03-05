<script lang="ts">
  import { play } from "../stores/item-store";
  export let item;

  const clicked = () => {
    // console.log(item);
    play(item);
  };
</script>

<li on:click={clicked}>
  {item.station}
</li>

<style>
  li {
    padding: 10px;
    cursor: pointer;
  }
</style>
