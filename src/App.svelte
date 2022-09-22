<script>
  import TodoContainer from './lib/TodoContainer.svelte';

  let isOpen = false;
  
  
  const handleClick = () => {
    isOpen = !isOpen;
  }
</script>

<main>
  <TodoContainer {handleClick} {isOpen} />
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e6e9ed;
  }
  
</style>
