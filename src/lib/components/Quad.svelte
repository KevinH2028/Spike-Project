<script>
  export let data;
</script>

<div class="h-screen flex flex-col">
  <!-- This is for the H1 to be centered in the top half of the viewport -->
  <div class="flex-1 flex items-center justify-center">
    <h1 class="text-4xl">{data.text}</h1>
  </div>

  <!-- This is for the buttons on the bottom half of the viewport -->
  <div class="flex-1 flex justify-around items-center flex-wrap">
    <!-- Button styles have been modified to meet your requirements -->
    <button
      class="flex-1 m-5 px-8 py-4 bg-blue-500 text-white text-2xl rounded max-h-[50vh] focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-700"
    >
      {data.options[0]}
    </button>

    <button
      class="flex-1 m-5 px-8 py-4 bg-green-500 text-white text-2xl rounded max-h-[50vh] focus:outline-none focus:ring focus:ring-offset-2 focus:ring-green-700"
    >
      {data.options[1]}
    </button>

    <button
      class="flex-1 m-5 px-8 py-4 bg-yellow-500 text-white text-2xl rounded max-h-[50vh] focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-700"
    >
      {data.options[2]}
    </button>

    <button
      class="flex-1 m-5 px-8 py-4 bg-red-500 text-white text-2xl rounded max-h-[50vh] focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-700"
    >
      {data.options[3]}
    </button>
  </div>
</div>
