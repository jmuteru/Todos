const addForm = document.querySelector('.add');
const list = document.querySelector('.todos ');

// function below adds a new todo to the list
const generateTemplate = (todo)=>{
    
   const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
   
   `;
//    adding the list item to the ul
   list.innerHTML += html;
};
addForm.addEventListener('submit', e=>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();

    } 
}); 