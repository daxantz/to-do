import Project from "./projects";

export default function projectCreationForm(){
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

    closeBtn.addEventListener("click", ()=>{
        createProjectForm.close();
    })

    // addProjectBtn.addEventListener("click",)
    
    createProjectForm.append(formHeading, nameLbl, nameInput, closeBtn, addProjectBtn);
    mainContainer.append(createProjectForm);
    createProjectForm.showModal();
}