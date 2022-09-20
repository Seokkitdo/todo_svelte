<script>
  import TodoBody from "./TodoBody.svelte";
  import TodoHeader from "./TodoHeader.svelte";

  export let todos;
  export let deleteTodo;
  export let todoText;
  export let handleClick;
  export let handleKeyUp;
  export let isOpen;
  export let checkTodo;

</script>

<div class="container">
  <TodoHeader {todos} />
  <TodoBody {todos} bind:todoText {deleteTodo} {handleClick} {checkTodo} {handleKeyUp} {isOpen}/>
</div>

<style>
  .container {
    width: 400px;
    border-radius: 8px;
    background-color: #fffFFF;
  }
</style>