const list = document.querySelector('.todos');//UL
const addTodo = document.querySelector('.add');
const search = document.querySelector('.search input');
const todosList = document.querySelector('.todos');
// Adding todos function

const  generateTodo = (todo)=>{
    const todoHtml = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt  delete"></i>
    </li>
    `;
    list.innerHTML += todoHtml;
};


//Submitting the todo
addTodo.addEventListener('submit',e=>{
    e.preventDefault();
    const addTodoItm = addTodo.add.value.trim();
    if (addTodoItm.length) {
        generateTodo(addTodoItm);

    }
    addTodo.reset();
});

//deleting the todos
 list.addEventListener('click', e =>{
       if (e.target.classList.contains('delete')) {
           e.target.parentElement.remove();
       }
 });

//  Write a func that searches for the todos
const searchTodos = (todos)=>{
    Array.from(list.children)
    .filter((todo)=> !todo.textContent.toLowerCase.includes(todos))
    .forEach((todo)=>todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo)=> todo.textContent.toLowerCase.includes(todos))
    .forEach((todo)=>todo.classList.add('filtered'));
};

//  Searching for todos using key up event
search.addEventListener('keyup',(e)=>{
    // e.preventDefault();
    const todoTerm = search.value.trim().toLowerCase();
    searchTodos(todoTerm);
    });
