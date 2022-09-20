<script>
  import TodoContainer from './lib/TodoContainer.svelte';

  let todos = []
  let isOpen = false;
  let lastId = todos.length > 0 ? todos[todos.length-1]['id'] : 1;
  let todoText = ""
  
  const handleClick = () => {
    isOpen = !isOpen;
    console.log(todos)
  }

  const handleKeyUp = (e) => {
    if(e.key === 'Enter' && todoText !== '') {
      let newTodo = {
        id: lastId++,
        text: todoText,
        done: false,
      }
      todos[todos.length] = newTodo;
      todoText = ""
    }
  }

  const deleteTodo = (id) => {
    todos = todos.filter((todo) => {
      if(todo.id === id) {
      }
      return todo.id !== id
    });
  }

  const checkTodo = (id) => {
    todos = todos.map((todo) => {
      if(todo.id === id) {
        let newTodo = {
          ...todo,
          done: !todo.done
        }
        return newTodo;
      } else {
        return todo;
      }
    })
  }
</script>

<main>
  <TodoContainer {todos} bind:todoText {deleteTodo} {handleClick} {handleKeyUp} {checkTodo} {isOpen} />
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e6e9ed;
  }
  
</style>
