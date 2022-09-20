<script>

  export let todos;

  $: remainingCount = todos.filter((todo) => !todo.done).length;
  let date = new Date()

  const dayObj = {
    0: '월요일',
    1: '화요일',
    2: '수요일',
    3: '목요일',
    4: '금요일',
    5: '토요일',
    6: '일요일'
  }

  const day = dayObj[date.getDay()-1]

  const getToday = () => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    return year + '년 ' + (month+1) + '월' + day + '일'
  }

  
</script>

<div class="header">
  <h2 class="header_date">{getToday()}</h2>
  <span>{day}</span>
  {#if remainingCount} 
    <p class="remaining_todo_count">할 일 {remainingCount}개 남음</p>
  {:else} 
    <p class="remaining_todo_count">남은 일이 없어요</p>
  {/if}
</div>

<style>
  .header {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 1.5rem;
    border-bottom: 1px solid #e6e9ed;
  }

  .header_date {
    margin-bottom: 0;
    font-size: 1.6rem;
  }

  .header span {
    margin-top: 10px;
    color: #707070
  }

  .remaining_todo_count {
    color: #20c997;
    font-size: 18px;
    font-weight: bold;
  }
</style>