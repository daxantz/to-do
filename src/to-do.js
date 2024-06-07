
import {Project} from "./projects";

class Todo {
    constructor(title, description, dueDate, project){
        this.id = Date.now().toString();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = 1;
        this.isComplete = false;
        this.project = project
    }

    completeStatus(status) {
        if(typeof status === "boolean"){
            this.isComplete = status;
            
            console.log(this.title, "'s completed status is set to" + status)
        } else {
            console.error("isComplete should be true or flase")
        }
        
    }

    addToProject(project){
        if(project instanceof Project){
            this.project = project;
            project.addTodo(this);
        }else {
            console.log("this project doesnt exist");
        }
    }

    
}

export {Todo}