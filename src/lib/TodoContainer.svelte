<script>
  import TodoBody from "./TodoBody.svelte";
  import TodoHeader from "./TodoHeader.svelte";

</script>

<div class="container">
  <TodoHeader  />
  <TodoBody />
</div>

<style>
  .container {
    width: 400px;
    border-radius: 8px;
    background-color: #fffFFF;
  }
</style>