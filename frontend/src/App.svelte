<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  const BACKEND_URL = window.injectedEnv.BACKEND_URL;

  let todos = writable([]);
  let newTodo = writable("");

  async function getAllTodos() {

    try {
      const response = await fetch(`${BACKEND_URL}/todos/`);

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
    if ($newTodo) {
      try {
        const todoToSend = $newTodo;
        const response = await fetch(`${BACKEND_URL}/todos/${todoToSend}`, {
          method: "POST",
        });

        if (response.ok) {
          newTodo.set("");
          window.location.reload();
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }

  async function removeTodo(todoToDelete) {
    try {
      const response = await fetch(`${BACKEND_URL}/todos/${todoToDelete}`, {
        method: "DELETE",
      });

      if (response.ok) {
        window.location.reload();
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
    {#each $todos as todo}
      <li>
        {todo} <button on:click={() => removeTodo(todo)}>Remove</button>
      </li>
    {/each}
  </ul>
</main>
