document.addEventListener("DOMContentLoaded", () => {
    // declare variables for each part of expected usability deliverables
    const form = document.getElementById("create-task-form");
    const textInput = document.getElementById("new-task-description");
    const taskList = document.getElementById("tasks");
  
    // type a task into the input field

    form.addEventListener("submit",function(event) {
        // suppress default action to reload the page after clicking submit
        event.preventDefault();
        
        // create new list item
        const newTask = document.createElement("li");
        // set the item's text to be the textInput
        newTask.textContent = textInput.value;
        
        // append newTask to the My Todos list
        taskList.appendChild(newTask);
        // clear out form text box after submission
        form.reset();
    });
    
});
