const input = document.querySelector(".input-item")
const todoUl = document.querySelector(".todo-ul")
const inputBtn = document.querySelector(".input-btn")
const filter = document.querySelectorAll(".all-btn button")
//

inputBtn.innerHTML = `
        <button class="add same" onclick="addtodo()">Add To List</button>
`

//model
let todos = []

//function
function addtodo() {
    if (input.value) {
        const todoItem = {
            name: input.value,
            isComplete: false,
        }
        todos.push(todoItem)
        input.value = ""
        input.focus()
        render(todos)
    }
}
function cleartodo() {
    todos = []
    render(todos)
}
function compleletHandler(index) {
    const todoTaggel = todos[index].isComplete
    todos[index].isComplete = !todoTaggel
    render(todos)
}

function deleteHandler(index) {
    todos.splice(index, 1)
    render(todos)
}
function editHandler(index) {
    input.value = todos[index].name

    inputBtn.innerHTML = `
        <button class="add same " onclick="editTodo(${index})">edit To List</button>
    `
}

function editTodo(index) {

    inputBtn.innerHTML = `
    <button class="add same " onclick="addtodo()">add To List</button>
    `
    todos[index].name = input.value
    input.value = ""
    render(todos)
    input.focus()
}
//view
function render(todos) {
    const result = todos.map((item, index) => {
        return `<li class="li-item">
        <sapn class="${item.isComplete ? "complete" : "incomplete"}">${item.name}</sapn>
        <div>
        <button class="same comp m-0" onclick="compleletHandler(${index})"><i class="fa ${item.isComplete?"fa-times":"fa-check"}"></i></button>
        <button class="same delete m-0" onclick="deleteHandler(${index})"><i class="fa fa-trash"></i></button>
        <button class="same edit m-0" onclick="editHandler(${index})"><i class="fa fa-pencil"></i></button>
        </div> 
        </li>`
    })

    todoUl.innerHTML = result.join("")
}

//event
filter.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("button.active").classList.remove("active")
        btn.classList.add("active")
        let btnId = btn.id
        if (btnId == "all") {
            render(todos)
        } else if (btnId == "complete") {
            const result = todos.filter(item => {
                return item.isComplete == true
            })
            render(result)
        } else if (btnId == "Active") {
            const result = todos.filter(item => {
                return item.isComplete == false
            })
            render(result)
        }
    })
})