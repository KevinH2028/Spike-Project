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

  function nextSlide() {
    if ($currentActivityIndex < $activities.length - 1) {
      $currentActivityIndex += 1;
    }
  }
</script>

{#if $activities.length > 0}
  {#if $activities[$currentActivityIndex].type === "lesson"}
    <Lesson data={$activities[$currentActivityIndex].content} />
  {:else if $activities[$currentActivityIndex].type === "pills"}
    <Pills data={$activities[$currentActivityIndex].content} />
  {:else if $activities[$currentActivityIndex].type === "quad"}
    <Quad data={$activities[$currentActivityIndex].content} />
  {/if}
{:else}
  <p>Loading...</p>
{/if}

<button
  on:click={nextSlide}
  class="fixed right-5 bottom-5 bg-blue-600 text-white p-4 rounded-full shadow-lg"
>
  Next &rarr;
</button>
