let task = document.getElementById("task");
let tasklist = document.getElementById("taskList");
function addtask(){
    if(task.value===""){
        alert("ENTER THE TASK");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = task.value;
        tasklist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "❌";
        li.appendChild(span);
    }
    task.value="";
    saveData();
}
tasklist.addEventListener(
    "click",
    function(e){
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
        else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    },
    false);
    function saveData(){
        localStorage.setItem("data",tasklist.innerHTML);
    }
    function showTask(){
        tasklist.innerHTML = localStorage.getItem("data");
    }
    showTask();