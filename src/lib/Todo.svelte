<script>
  import {todos} from './store'
  export let todo;

  let active = false;
  $: checked = todo.done;
  const hoverIn = () => {
    active = true;
  }

  const hoverOut = () => {
    active = false;
  }

  const deleteTodo = (id) => {
    todos.update(todos => todos.filter((todo) => {
      if(todo.id === id) {
      }
      return todo.id !== id
    }));
  }

  const checkTodo = (id) => {
    todos.update(todos => todos.map((todo) => {
      if(todo.id === id) {
        let newTodo = {
          ...todo,
          done: !todo.done
        }
        return newTodo;
      } else {
        return todo;
      }
    }))
  }


</script>


<li on:mouseenter={() => hoverIn()} on:mouseleave={() => hoverOut()}>
  <div class="checkboxWrap">
    <div class="CheckCircle" class:checked on:click={() => checkTodo(todo.id)}></div>
    <p>{todo.text}</p>
  </div>
  <button class:active on:click={() => deleteTodo(todo.id)}>삭제</button>
</li>



<style>
  .CheckCircle {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
  }

  .CheckCircle.checked {
    border: 1px solid #38d9a9;
    color: #38d9a9;
  } 

  li {
    display: flex;
    justify-content: space-between;
    width: 100%;
    list-style-type: none;
    text-align: start;
  }

  .checkboxWrap {
    display: flex;
    align-items: center;
  }

   button {
    display: none;
    border: none;
    outline: none;
    border-radius: 8px;
  }

  .active {
    display: block;
  }
</style>