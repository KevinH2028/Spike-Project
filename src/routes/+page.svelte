<script>
  import { onMount } from "svelte";
  import { activities, currentActivityIndex } from "$lib/stores.js";

  import Lesson from "$lib/components/Lesson.svelte";
  import Pills from "$lib/components/Pills.svelte";
  import Quad from "$lib/components/Quad.svelte";

  let selectedOption = null; // This will store the selected option from Quad component
  let isPillsAnswerCorrect = false; // Variable to keep track of the Pills component's answer

  onMount(async () => {
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
  });

  function handleOptionSelected(event) {
    selectedOption = event.detail; // Capture the selected option index from the Quad component
  }

  function handleAnswerSelectedForPills(event) {
    isPillsAnswerCorrect = event.detail;
  }

  function nextSlide() {
    if ($activities[$currentActivityIndex].type === "quad") {
      const correctAnswer = $activities[$currentActivityIndex].content.answer;
      if (selectedOption === correctAnswer) {
        alert("Correct!");

        // Move to the next activity
        if ($currentActivityIndex < $activities.length - 1) {
          $currentActivityIndex += 1;
        } else {
          alert("You've finished all activities!");
        }
      } else {
        alert("Incorrect. Try again.");
      }
    } else if ($activities[$currentActivityIndex].type === "pills") {
      if (isPillsAnswerCorrect) {
        alert("Correct!");

        // Move to the next activity
        if ($currentActivityIndex < $activities.length - 1) {
          $currentActivityIndex += 1;
        } else {
          alert("You've finished all activities!");
        }
      } else {
        alert("Incorrect. Try again.");
      }
    } else {
      // Handle other types if needed
      if ($currentActivityIndex < $activities.length - 1) {
        $currentActivityIndex += 1;
      } else {
        alert("You've finished all activities!");
      }
    }
  }
</script>

{#if $activities.length > 0}
  {#if $activities[$currentActivityIndex].type === "lesson"}
    <Lesson data={$activities[$currentActivityIndex].content} />
  {:else if $activities[$currentActivityIndex].type === "pills"}
    <Pills
      on:answerSelected={handleAnswerSelectedForPills}
      data={$activities[$currentActivityIndex].content}
    />
  {:else if $activities[$currentActivityIndex].type === "quad"}
    <Quad
      on:optionSelected={handleOptionSelected}
      data={$activities[$currentActivityIndex].content}
    />
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
