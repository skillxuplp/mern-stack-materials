document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addTodoButton = document.getElementById("add-todo");
    const todoList = document.getElementById("todo-list");

    // function to add a new todo item
    const addTodo = () => {
        const todoText = todoInput.value.trim();
        if (todoText === "") {
            return;
        }

        const todoItem = document.createElement("li");
        todoItem.textContent = todoText;

        // add a delete item
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            todoList.removeChild(todoItem);
        });

        // add a complete toggle functionality
        todoItem.addEventListener("click", () => {
            todoItem.classList.toggle("completed");
        });

        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
        todoInput.value = "";
    };

    addTodoButton.addEventListener("click", addTodo);
    todoInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTodo();
        }
    });
});