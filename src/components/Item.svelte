<script lang="ts">
  import { change_station } from "../stores/item-store";
  export let item;

  const clicked = () => {
    // console.log(item);
    change_station(item);
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
