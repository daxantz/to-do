import  {Todo}  from "./to-do";
import Project from "./projects";
import "./style.css"
import addTaskToPage from "./make-todo";
import makeTodo from "./make-todo";
import addCardToPage from "./add-card-to-page";
import {makeCard} from "./make-task-card";

const todoTitleInput = document.querySelector("#todo-title");
const todoDescInput = document.querySelector("#todo-desc");    
const todoDateInput = document.querySelector("#todo-date");



const addTaskBtn = document.querySelector(".addTodoBtn");
const taskCards = document.querySelectorAll(".task-card");
const card = document.querySelector(".task-card");
const cardContent = document.querySelector(".task-and-content");
addTaskBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    const titleInputValue = todoTitleInput.value;
    const descInputValue = todoDescInput.value;
    const dateInputValue = todoDateInput.value;
    const todo = new Todo(titleInputValue, descInputValue, dateInputValue);
    const todoTitle = todo.title;
    const todoDate = todo.dueDate;
    const todoDesc = todo.description;
    const todoPriority = todo.priority;
    const taskCard = makeCard(todoTitle, todoDate, todoDesc, todoPriority)

    
    addCardToPage(taskCard); 
})







