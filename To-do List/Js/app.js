const item= document.querySelector("#item");
const toDoBox= document.querySelector("#to-do-box");

const saveTask= ()=>{
    const list= document.querySelectorAll(".box input");
    const data= [];
    list.forEach(
        (note)=>{
            data.push(note.value);
        }
    )
    if(data.length === 0){
        localStorage.removeItem("list");
    }else{
        localStorage.setItem("list", JSON.stringify(data))
    }

}

item.addEventListener(
    "keyup",
    function(event){
        if(event.key === "Enter"){
            saveTask();
            addToDo(this.value);
            this.value=""
        }
    }
    )
    
const addToDo= (item)=>{
    const listItem= document.createElement("li");
    listItem.innerHTML= `
    ${item}
    <i class=" fa-solid fa-circle-xmark"></i>
    `;
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove();
        }
    )
    toDoBox.appendChild(listItem);
}
(
    function(){
        const loadItem= JSON.parse(localStorage.getItem("list"));
        // console.log(loadItem)
        if(loadItem != null){
            loadItem.forEach(
                (loadItem)=>{
                    addToDo(loadItem);
                }
            )
        }
    }
)