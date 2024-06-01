


class Todo {
    constructor(title, description, dueDate){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = 1;
        this.isComplete = false;
    }

    completeStatus(status) {
        if(typeof status === "boolean"){
            this.isComplete = status;
            
            console.log(this.title, "'s completed status is set to" + status)
        } else {
            console.error("isComplete should be true or flase")
        }
        
    }

    
}

export {Todo}