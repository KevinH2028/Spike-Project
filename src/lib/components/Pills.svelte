<script>
  export let data = {};

  let availableWords = [];
  let selectedWords = [];

  if (typeof data.answer === "string") {
    availableWords = data.answer.split(" ");
  }

  function selectWord(index) {
    let word = availableWords[index];
    selectedWords = [...selectedWords, word];
    availableWords = availableWords.filter((_, i) => i !== index);
  }

  function deselectWord(index) {
    let word = selectedWords[index];
    availableWords = [...availableWords, word];
    selectedWords = selectedWords.filter((_, i) => i !== index);
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
