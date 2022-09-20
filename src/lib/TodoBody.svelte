<script>
  import CreateTodo from "./CreateTodo.svelte";
  import Todo from "./Todo.svelte";

  export let todos;
  export let deleteTodo;
  export let todoText;
  export let handleClick;
  export let handleKeyUp;
  export let isOpen;
  export let checkTodo;

</script>

<div class="todo_body">
  <ul>
    {#each todos as todo, index(todo.id)}
      <Todo todo={todo} {deleteTodo} {checkTodo} />
    {/each}
  </ul>

  <CreateTodo bind:todoText {handleClick} {handleKeyUp} {isOpen} />
</div>

<style>
  .todo_body {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 500px;
    padding: 1.5rem;
  }

  ul {
    width: 100%;
    padding: 0;
  }

  ul {
    list-style-type: none;
    text-align: start;
  }
</style>