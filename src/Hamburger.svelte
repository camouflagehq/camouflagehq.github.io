<script>
  import { Button } from "svelma";

  function handleClick() {
    console.log("CLICKED");
  }
</script>

<style>
  div {
    bottom: 20px;
    left: 20px;
    position: absolute;
  }
</style>

<div>
  <Button on:click={handleClick} rounded type="is-light">🕶️</Button>
</div>
