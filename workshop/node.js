
// document.addEventListener("DOMContentLoaded", function () {
//     const input = document.querySelector(".input");
//     const addButton = document.querySelector(".btn");
//     const taskContainer = document.getElementById("toadd");

// const { title } = require("process");

//     addButton.addEventListener("click", addTask);

//     function addTask() {
//         const taskText = input.value.trim();
//         if (taskText === "") return;

//         const taskElement = document.createElement("div");
//         taskElement.classList.add("listadd");
//         taskElement.innerHTML = `
//             ${taskText}
//             <div><button class="delbtn">delete</button></div>
//         `;

//         taskContainer.appendChild(taskElement);
//         input.value = "";

//         taskElement.querySelector(".delbtn").addEventListener("click", function () {
//             taskElement.remove();
//         });
//     }
// });



// const task = [{title:"pick up dry cleaning:",
//     completed:false
// },{
//     title:"learning javascript",
//     completed:true
// }]

// const completedTask = task.filter((task)=>{return task.completed});
// console.log(completedTask);



const addTaskbtn = document.querySelector("#addTaskbtn");
const taskinput = document.querySelector("#taskInput");
const tasklist = document.querySelector("#tasklist");


addTaskbtn.addEventListener("click",function(){
    const taskText = taskinput.value;
    if(taskText==""){
        alert("task connot be empty");
        return;
    }
    addTasktoDOM(taskText)

});

function addTasktoDOM(taskText){
    const taskitem = document.createElement("li");
    taskitem.classList.add("taskitem");
    taskitem.className = "listadd";
    const taskTextspan = document.createElement("span");
    taskTextspan.textContent=taskText;
    taskitem.appendChild(taskTextspan);
    console.log(taskitem);



    const deletebtn = document.createElement('button');
    deletebtn.textContent = "delete";
    deletebtn.className = "delbtn"
    taskitem.appendChild(deletebtn);
    tasklist.appendChild(taskitem);

    tasklist.addEventListener("click",function(event){
        if(event.target.classList.contains("deletebtn")){
            const taskitem = event.target.parentElement;
            tasklist.removeChild(taskitem);
        }
    })
}




// tasklist.addEventListener("click",function(event){
//     if(event.target.classList.contains("deletebtn")){
//         const taskitem = event.target.parentElement;
//         tasklist.removeChild(taskitem);
//     }
// })