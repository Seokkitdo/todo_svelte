<script>
  import {todos} from './store'
  import CreateTodo from "./CreateTodo.svelte";
  import Todo from "./Todo.svelte";

</script>

<div class="todo_body">
  <ul>
    {#each $todos as todo}
      <Todo todo={todo}  />
    {/each}
  </ul>

  <CreateTodo />
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