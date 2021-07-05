const addForm = document.querySelector('.add'); //submit form
const list = document.querySelector('.todos '); //the ul
// const listItem = document.querySelector('li'); //list items

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

//deletion
// removing item from the todo list
//add a click eventv to trash icon that deletes a todo
list.addEventListener('click',e=>{
    //we want to check if the item clicked is the trash can icon
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        
    }

});