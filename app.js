//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Functions
function addTodo(event){
    event.preventDefault();
    const newDiv = document.createElement('div');
    newDiv.classList.add('todo');

    const newLi = document.createElement('li');
    newLi.innerText = todoInput.value;
    newLi.classList.add('todo-item');
    newDiv.appendChild(newLi);
    todoInput.value = '';

    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add('check-btn');
    newDiv.appendChild(checkButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.classList.add('delete-btn');
    newDiv.appendChild(deleteButton);

    todoList.appendChild(newDiv);
}

function deleteOrCheck(event){
    const item = event.target;
    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitioned', function(){
            console.log('animation completed');//doesnt reach here!
            todo.remove();
        });
    }
    
    if(item.classList[0] === 'check-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('checked');
    }
}

//Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteOrCheck);