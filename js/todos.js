var listElement = document.querySelector('#lista ul');
var inputElement = document.querySelector('#lista input');
var buttonElement = document.querySelector('#lista button');

var todos = JSON.parse(localStorage.getItem('list_todos'))|| [];

function renderTodos() {
    
    listElement.innerHTML = '';
    
    for (todo of todos){
        var todoElement = document.createElement('ul');

        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        var linkElement = document.createElement('a');
       
        linkElement.setAttribute('href', '#');
        
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        
                                 
        var linkText = document.createTextNode('Excluir');
        
        linkElement.appendChild(linkText);
        
        
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;
    
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick= addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    
    localStorage.setItem('list_todo', JSON.stringify(todos));
}