let plus = document.querySelector("#add-icon")
let Input= document.querySelector("#input")
let listbox = document.querySelector(".listbox")
let msgbox=document.querySelector(".msg")

 function msgremove(){
    setTimeout(() => {
    msgbox.innerText=""; 
},4000);
}


function addtask(){
    let list = document.createElement("div");
    list.classList.add("list");

    let inputtask = document.createElement("div");
    inputtask.classList.add("input-task");

    list.appendChild(inputtask);


    let inp = document.createElement("input");
    inp.type = 'text';
    inp.value = Input.value;
    inp.setAttribute("readonly","reasonly");
    inputtask.append(inp);

   let actions = document.createElement("div");
    actions.classList.add("actions");

     
     let deletebtn = document.createElement("button");
     deletebtn.classList.add(`delete`,'btn','btn-danger','fa','fa-trash');

    let editbtn = document.createElement("button");
     editbtn.classList.add(`edit` ,'btn','btn-success');
     editbtn.type = "button";
     editbtn.innerText="Edit";

  
     actions.appendChild(deletebtn);
     actions.appendChild(editbtn);

     list.appendChild(actions);

    listbox.appendChild(list)
    
deletebtn.addEventListener("click" ,()=>{
    listbox.removeChild(list);
    msgbox.innerText="Task deleted"
    msgremove();
})

editbtn.addEventListener("click" ,()=>{
    if(editbtn.innerText.toLowerCase()==="edit"){
        editbtn.innerText="Save";
        inp.removeAttribute("readonly");
        inp.focus();
    }
  else{
    editbtn.innerText="Edit";
    inp.setAttribute("readonly","readonly");
    // inp.value=inp.value;
    msgbox.innerText="Your task has been updated !!"
    msgremove();
  }

});
Input.value="";
}
plus.addEventListener("click",()=>{
    if(Input.value===""){
        msgbox.innerText="Please write something to add as a task !!"
        msgremove();
    }
    else {
    addtask();
    }

})
