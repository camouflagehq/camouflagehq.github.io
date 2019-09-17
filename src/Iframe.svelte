<script>
  import queryString from "query-string";
  import { Snackbar } from "svelma";

  let url;
  $: {
    let queryParams = queryString.parse(window.location.search);
    url = decodeURIComponent(queryParams.url);

    Snackbar.create({
      message: `You are looking at ${url} in Camouflage mode`,
      position: "is-bottom",
      type: "is-black"
    });
  }
</script>

<style>
  iframe {
    border: none;
    height: 100%;
    position: fixed;
    width: 100%;
  }
</style>

{#if url}
  <iframe src={url} title={url} />
{/if}
