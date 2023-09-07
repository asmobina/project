const input = document.querySelector(".input-item")
const addBtn = document.querySelector(".add")
const todoUl = document.querySelector(".todo-ul")
const clearBtn = document.querySelector(".clear")

//isotop liberary

var iso = new Isotope('.todo-ul', {
    itemSelector: '.li-item',
    layoutMode: 'fitRows'
});

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



//view
function render(todos) {
    const result = todos.map((item, index) => {
        return `<li class="li-item">
        <sapn class="${item.isComplete ? "incomplete" : "complete"}">${item.name}</sapn>
        <div>
        <button class="same comp " onclick="compleletHandler(${index})">${item.isComplete ? "InCompletet" : "Complete"}</button>
        <button class="same delete m-0" onclick="deleteHandler(${index})">Delete</button>
        </div> 
        </li>`
    })
    todoUl.innerHTML = result.join("")
}

//event
addBtn.addEventListener("click", addtodo)
clearBtn.addEventListener("click", cleartodo)
