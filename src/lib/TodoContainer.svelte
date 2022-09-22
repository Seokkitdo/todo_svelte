<script>
  import TodoBody from "./TodoBody.svelte";
  import TodoHeader from "./TodoHeader.svelte";

  export let handleClick;
  export let isOpen;

</script>

<div class="container">
  <TodoHeader  />
  <TodoBody    {handleClick}  {isOpen}/>
</div>

<style>
  .container {
    width: 400px;
    border-radius: 8px;
    background-color: #fffFFF;
  }
</style>