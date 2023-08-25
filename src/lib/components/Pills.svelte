<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let data = {};

  let availableWords = [];
  let selectedWords = [];

  if (typeof data.answer === "string") {
    availableWords = data.answer.split(" ");
    availableWords = availableWords.sort((a, b) => 0.5 - Math.random());
  }

  function selectWord(index) {
    let word = availableWords[index];
    selectedWords = [...selectedWords, word];
    availableWords = availableWords.filter((_, i) => i !== index);
    checkAnswer();
  }

  function deselectWord(index) {
    let word = selectedWords[index];
    availableWords = [...availableWords, word];
    selectedWords = selectedWords.filter((_, i) => i !== index);
    checkAnswer();
  }

  function checkAnswer() {
    const selectedString = selectedWords.join(" ");
    if (selectedString === data.answer) {
      dispatch("answerSelected", true); // Correct answer
    } else {
      dispatch("answerSelected", false); // Incorrect answer
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center">
  <div class="flex flex-col space-y-4">
    <h1 class="text-2xl">{data.text}</h1>
    <div>
      {#each selectedWords as word, index}
        <button on:click={() => deselectWord(index)} class="btn btn-accent m-1"
          >{word}</button
        >
      {/each}
    </div>

    <div>
      {#each availableWords as word, index}
        <button on:click={() => selectWord(index)} class="btn btn-outline m-1"
          >{word}</button
        >
      {/each}
    </div>
  </div>
</div>
