import  {Todo}  from "./to-do";
import Project from "./projects";

const toDo1 = new Todo("title1", "this is the first task", "11/24/24");
const project = new Project("Project1");
const toDo2 = new Todo("title2", "second task", "12/25/24");

project.addTodo(toDo1);
project.addTodo(toDo2);
project.printProject();

toDo1.completeStatus(true);
console.log(toDo1.isComplete)

toDo2.completeStatus(true);
console.log(toDo2.isComplete)

