<script lang="ts">
  export let display;
</script>

<div>{display.station} - {display.status}</div>

<style>
  div {
    border: solid 1px rgba(255, 255, 255, 0.6);
    border-radius: 2px;
    padding: 30px;
    margin-top: 10px;
  }
</style>
