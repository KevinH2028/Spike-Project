<script>
  export let data;
</script>

<div class="h-screen flex flex-col">
  <!-- This is for the H1 to be centered in the top half of the viewport -->
  <div class="flex-1 flex items-center justify-center">
    <h1>{data.text}</h1>
  </div>

  <!-- This is for the buttons on the bottom half of the viewport -->
  <div class="flex-1 flex justify-around items-center flex-wrap">
    <!-- Button styles have been modified to meet your requirements -->
    <button
      class="flex-1 m-5 px-4 py-2 bg-blue-500 text-white rounded max-h-[50vh]"
    >
      {data.options[0]}
    </button>

    <button
      class="flex-1 m-5 px-4 py-2 bg-green-500 text-white rounded max-h-[50vh]"
    >
      {data.options[1]}
    </button>

    <button
      class="flex-1 m-5 px-4 py-2 bg-yellow-500 text-white rounded max-h-[50vh]"
    >
      {data.options[2]}
    </button>

    <button
      class="flex-1 m-5 px-4 py-2 bg-red-500 text-white rounded max-h-[50vh]"
    >
      {data.options[3]}
    </button>
  </div>
</div>
