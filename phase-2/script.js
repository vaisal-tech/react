document.addEventListener('DOMContentLoaded', () => {

    const addBtn = document.getElementById('add')
    const createBox = document.getElementById('creation')
    const input = document.getElementById('name')
    const save = document.getElementById('save')
    const taskList = document.getElementById('task_list')
    const filterSelect = document.getElementById('filter')
    const taskCount = document.getElementById('task_count')

    // ---------------- STORAGE ----------------

    function getTasks() {
        return JSON.parse(localStorage.getItem('tasks')) || []
    }

    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    function updateStorage() {
        const tasks = []

        document.querySelectorAll('.task').forEach(task => {
            const name = task.querySelector('h6').innerText
            const status = task.querySelector('select').value
            tasks.push({ name, status })
        })

        saveTasks(tasks)
    }

    // ---------------- CREATE TASK ----------------

    function createTaskElement(taskObj) {

        const newTask = document.createElement('div')
        newTask.classList.add('task')

        const taskName = document.createElement('h6')
        taskName.innerText = taskObj.name

        const statusSelect = document.createElement('select')

        ;["active", "completed", "incomplete"].forEach(status => {
            const option = document.createElement('option')
            option.value = status
            option.innerText = status
            if (status === taskObj.status) option.selected = true
            statusSelect.appendChild(option)
        })

        const btnDiv = document.createElement('div')
        btnDiv.classList.add('btns')

        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Delete"

        const editBtn = document.createElement('button')
        editBtn.innerText = "Edit"

        // DELETE
        deleteBtn.addEventListener('click', () => {
            newTask.remove()
            updateStorage()
            updateCount()
        })

        // EDIT
        editBtn.addEventListener('click', () => {
            const newVal = prompt("Edit your task:", taskName.innerText)
            if (newVal && newVal.trim() !== "") {
                taskName.innerText = newVal
                updateStorage()
            }
        })

        // STATUS CHANGE
        statusSelect.addEventListener('change', () => {
            updateStorage()
            applyFilter()
        })

        btnDiv.appendChild(deleteBtn)
        btnDiv.appendChild(editBtn)

        newTask.appendChild(taskName)
        newTask.appendChild(statusSelect)
        newTask.appendChild(btnDiv)

        return newTask
    }

    // ---------------- LOAD TASKS ----------------

    function loadTasks() {
        const tasks = getTasks()
        taskList.innerHTML = ''

        tasks.forEach(task => {
            const taskEl = createTaskElement(task)
            taskList.appendChild(taskEl)
        })

        updateCount()
    }

    // ---------------- ADD TASK ----------------

    addBtn.addEventListener("click", () => {
        createBox.style.display = "flex"
    })

    save.addEventListener("click", () => {

        const taskVal = input.value.trim()

        if (!taskVal) {
            alert("Enter a task!")
            return
        }

        const taskObj = {
            name: taskVal,
            status: "active"
        }

        const newTask = createTaskElement(taskObj)
        taskList.appendChild(newTask)

        updateStorage()
        updateCount()

        input.value = ''
        createBox.style.display = "none"
    })

    // ---------------- FILTER ----------------

    filterSelect.addEventListener('change', applyFilter)

    function applyFilter() {
        const filter = filterSelect.value
        const tasks = document.querySelectorAll('.task')

        tasks.forEach(task => {
            const status = task.querySelector('select').value

            if (filter === 'all' || filter === status) {
                task.style.display = 'flex'
            } else {
                task.style.display = 'none'
            }
        })

        updateCount()
    }

    // ---------------- COUNT ----------------

    function updateCount() {
        const tasks = document.querySelectorAll('.task')
        let visible = 0

        tasks.forEach(task => {
            if (task.style.display !== 'none') visible++
        })

        taskCount.innerText = `${visible} tasks`
    }

    // ---------------- INIT ----------------

    loadTasks()

})