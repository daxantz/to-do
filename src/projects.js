export default class Project {
    constructor(name){
        this.name = name;
        this.toDos = [];
    }

    addTodo(toDo){
        this.toDos.push(toDo);
    }

    deleteTodo(toDo){
        let index = this.toDos.indexOf(toDo)
        this.toDos.splice(index,1);
    }

    printProject(){
        console.log("Project Name: " + this.name + "\n",this.toDos);
    }
}