<script>
    /**
	 * @type {any[]}
	 */
    let todos = [];
    let newTodo = '';

    function addTodo() {
        if (newTodo) {
            todos = [...todos, newTodo];
            newTodo = '';
        }
    }

    /**
	 * @param {number} index
	 */
    function removeTodo(index) {
        todos = todos.filter((_, i) => i !== index);
    }
</script>

<svelte:head>
    <title>Todo App</title>
    <meta name="description" content="Svelte Todo app" />
</svelte:head>

<section>
    <h1>Todo App</h1>

    <input bind:value={newTodo} placeholder="New todo" />
    <button on:click={addTodo}>Add</button>

    <ul>
        {#each todos as todo, index}
            <li>
                {todo} <button on:click={() => removeTodo(index)}>Remove</button>
            </li>
        {/each}
    </ul>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }
</style>