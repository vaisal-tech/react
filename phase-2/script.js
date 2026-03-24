document.addEventListener('DOMContentLoaded',() =>{

    const addBtn=document.getElementById('add')
    const createBox=document.getElementById('creation')
    const input = document.getElementById('name')
    const save = document.getElementById('save')
    const taskList = document.getElementById('task_list')

    addBtn.addEventListener("click",()=>{

        createBox.style.display="flex"
    })

    save.addEventListener("click",()=>{
        taskVal = input.value
        console.log(taskVal)
        if (taskVal === "") {
            alert("Enter a task!");
            return;
        }

       // Create new task container
        const newTask = document.createElement('div')
        newTask.classList.add('task-item')

        // Task name
        const taskName = document.createElement('h6')
        taskName.innerText = taskVal

        // Status dropdown
        const statusDiv = document.createElement('div')
        const statusSelect = document.createElement('select')
        statusSelect.name = "status"
        const statuses = ["active", "completed", "incomplete"]
        statuses.forEach(status => {
            const option = document.createElement('option')
            option.value = status
            option.innerText = status.charAt(0).toUpperCase() + status.slice(1)
            statusSelect.appendChild(option)
        })
        statusDiv.appendChild(statusSelect)

        // Buttons container
        const btnDiv = document.createElement('div')

        // Delete button
        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Delete"
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(newTask)
        })

        // Edit button
        const editBtn = document.createElement('button')
        editBtn.innerText = "Edit"
        editBtn.addEventListener('click', () => {
            const newVal = prompt("Edit your task:", taskName.innerText)
            if (newVal !== null && newVal.trim() !== "") {
                taskName.innerText = newVal
            }
        })

        btnDiv.appendChild(deleteBtn)
        btnDiv.appendChild(editBtn)

        // Append everything to the task container
        newTask.appendChild(taskName)
        newTask.appendChild(statusDiv)
        newTask.appendChild(btnDiv)

        // Append task to the list
        taskList.appendChild(newTask)

        // Clear input and hide creation box
        input.value = ''
        


    })
    

})


