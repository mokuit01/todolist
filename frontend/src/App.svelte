<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  let todos = writable([]);
  let newTodo = writable('');

  async function getAllTodos() {
    try {
      const response = await fetch(`http://localhost:8080/todos`);

      if (response.ok) {
        const data = await response.json();
        todos.set(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  onMount(getAllTodos);

  async function addTodo() {
    try {
      const todoToSend = $newTodo
      const response = await fetch(`http://localhost:8080/todos/${todoToSend}`, {
        method: 'POST'
      });

      if (response.ok) {
        newTodo.set('');
        window.location.reload()
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  /**
   * @param {number} index
   */
  async function removeTodo(index) {
    try {
      const response = await fetch(`http://localhost:8080/todos/${index}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        window.location.reload()
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
</script>

<main>
  <h1>Todo App</h1>

  <input bind:value={$newTodo} placeholder="New todo" />
  <button on:click={addTodo}>Add</button>

  <ul>
    {#each $todos as todo, index}
      <li>
        {todo} <button on:click={() => removeTodo(index)}>Remove</button>
      </li>
    {/each}
  </ul>
</main>
