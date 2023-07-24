function addtolist(){
    var taskname = document.getElementById('taskname').value
    var tododiv = document.getElementById('todo')

     var newTodoitem = document.createElement('div')
     var todoname = document.createElement('li')
        todoname.innerHTML = taskname 
     

     var delbtn = document.createElement('i')
     delbtn.classList.add('fa-trash-alt')
     delbtn.classList.add('far')
     delbtn.addEventListener('click',()=>{
        tododiv.removeChild(newTodoitem)
     })
     delbtn.innerHTML = ""

     newTodoitem.appendChild(todoname)
    newTodoitem.appendChild(delbtn)
    tododiv.appendChild(newTodoitem)
    }