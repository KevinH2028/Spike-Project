<script>
  import { onMount } from "svelte";
  import { activities, currentActivityIndex } from "$lib/stores.js";

  import Lesson from "$lib/components/Lesson.svelte";
  import Pills from "$lib/components/Pills.svelte";
  import Quad from "$lib/components/Quad.svelte";

  async function fetchData() {
    try {
      const response = await fetch("/activities.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      activities.set(await response.json());
    } catch (error) {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
    }
  }

  onMount(fetchData);
</script>

{#if $activities.length > 0}
  <pre>{JSON.stringify($activities, null, 2)}</pre>

  {#if $activities[$currentActivityIndex].type === "lesson"}
    <Lesson />
  {:else if $activities[$currentActivityIndex].type === "pills"}
    <Pills />
  {:else if $activities[$currentActivityIndex].type === "quad"}
    <p>G</p>
    <Quad data={$activities[$currentActivityIndex].content} />
  {/if}
{:else}
  <p>Loading...</p>
{/if}
