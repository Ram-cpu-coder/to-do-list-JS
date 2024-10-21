const listContainer = document.getElementById("list-container");
const inputTask = document.getElementById("input-task");


function addTask() {
    if(inputTask.value === ""){
        alert("You have to enter something!!!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputTask.value = '';
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === " LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}),false;