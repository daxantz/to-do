import { Projectlist } from "./projectList";
import { Project } from "./projects";
const list = new Projectlist();
function renameProject(listElement, listItemName,projectOptions, project){
    //div - renameConifm btn - cancelRename btn
    const renameInput = document.createElement("input");
    const buttonContainer = document.createElement("div");
    const confirmRenameBtn = document.createElement("button");
    const cancelRenameBtn = document.createElement("button");
    confirmRenameBtn.innerText = "Confirm rename";
    cancelRenameBtn.innerText = "Cancel Rename";

    buttonContainer.classList.add("rename-btn-container");
    confirmRenameBtn.classList.add("confirm-rename-btn");
    cancelRenameBtn.classList.add("cancel-rename-btn");
    buttonContainer.append(confirmRenameBtn, cancelRenameBtn);
    listElement.append(renameInput, buttonContainer);

    confirmRenameBtn.addEventListener("click" ,()=>{
        project.editName(renameInput.value);
        listItemName.innerText = renameInput.value;
        renameInput.replaceWith(listItemName);
        buttonContainer.replaceWith(projectOptions);
        console.log("clicked confirm rename", list);
    });

    cancelRenameBtn.addEventListener("click", ()=>{
        renameInput.replaceWith(listItemName);
        buttonContainer.replaceWith(projectOptions);
        
        console.log("rename canceled");
    })
    
    
}
function makeProjectListItem(project){
    //elements
    const projectList = document.querySelector("#project-list");
    const listElement = document.createElement("li");
    const errorElement = document.createElement("span");
    const projectOptions = document.createElement("div");
    const renameProjectBtn = document.createElement("button");
    const deleteProjectBtn = document.createElement("button");
    const listItemName = document.createElement("p");


    
    //add classes to elements
    renameProjectBtn.classList.add("rename-project-btn");
    deleteProjectBtn.classList.add("delete-project-btn");
    listItemName.classList.add("list-item-name");
    listElement.classList.add("list-item");

    
    renameProjectBtn.innerText = "Rename";
    deleteProjectBtn.innerText = "Delete";
    errorElement.innerText = "Project with this name already exists";
    listItemName.innerText = project.name
    
    projectOptions.append(renameProjectBtn, deleteProjectBtn);
    listElement.append(listItemName, projectOptions);
    projectList.append(listElement);


    //event listeners to rename and delete projects
    renameProjectBtn.addEventListener("click", () =>{
        // const renameInput = document.createElement("input"); 
        // listItemName.replaceWith(renameInput);
        // project.editName(renameInput.value)
        listElement.removeChild(projectOptions);
        renameProject(listElement, listItemName,projectOptions, project);
        
    })

    deleteProjectBtn.addEventListener("click", ()=>{
        list.deleteProject(project.name);
        listElement.remove();
        console.log(list);
    })
}

function addNewProject(nameValue){ //checks projectlist array to see if it exists makes it, adds to dom 
    
    const projectExists = list.projects.some(item => {
        if(item.name === nameValue){
            return true
        } else {
            return false;
        }
    });

    if(projectExists){
        console.log("Project Exists already, choose a new name")
    } else {
        const project = new Project(nameValue);
        list.addProject(project);
        makeProjectListItem(project);
        console.log(list);
    }
    
}

function makeProjectForm(){
    const mainContainer = document.querySelector("#container")
    const createProjectForm = document.createElement("dialog");
    

    const formHeading = document.createElement("h2");
    formHeading.innerText = "New Project";
    const nameLbl = document.createElement("label");
    nameLbl.innerText = "Name:";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    const closeBtn = document.createElement("button");
    closeBtn.innerText = "Close";
    const addProjectBtn = document.createElement("button");
    addProjectBtn.innerText = "Add Project";

    
    
    createProjectForm.append(formHeading, nameLbl, nameInput, closeBtn, addProjectBtn);
    mainContainer.append(createProjectForm);
    createProjectForm.showModal();


    closeBtn.addEventListener("click", ()=>{
        createProjectForm.close();
    })

    addProjectBtn.addEventListener("click",()=>{
        addNewProject(nameInput.value);
        createProjectForm.close();
    });
}

function showTaskForm(){
    const taskForm = document.querySelector("form");
    if(taskForm.classList.contains("hidden")){
        taskForm.classList.toggle("hidden");
    }else {
        taskForm.classList.add("hidden");
    }


}



export {makeProjectForm, showTaskForm}