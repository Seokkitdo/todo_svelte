<script>
  export let todoText;
  export let handleClick;
  export let handleKeyUp;
  export let isOpen;

</script>

{#if isOpen}
  <div class="add_todo">
    <div class="add_form">
      <input on:keyup="{e => handleKeyUp(e)}" type="text" bind:value="{todoText}" name="todo" id="todo_content" placeholder="할 일을 입력 후, Enter 를 누르세요">
    </div>
  </div>

{/if}

<button on:click="{handleClick}" class="add_btn">
  <div class="add_icon">+</div>
</button>


<style>
  .add_todo {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  .add_form {
    background: #f8f9fa;
    padding: 1rem 2rem 3rem 2rem;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .add_todo input {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
  }

  .add_btn {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    background-color: #20c997;
    outline: none;
  }

  .add_btn div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 3rem;
    color: #eee;
  }
</style>
