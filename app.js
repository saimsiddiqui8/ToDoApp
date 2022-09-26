function enterTodo() {
    var list = document.getElementById("list");
    var input = document.getElementById("input");
    console.log(input.value);
    if (input.value == '') {
        alert("Error");
    }
    var li = document.createElement("li");
    var liText = document.createTextNode(input.value)
    li.appendChild(liText)
    list.appendChild(li)
    input.value = ''
    
    // creating delete button
    var delBtn = document.createElement('button');
    delBtn.innerText = 'DELETE'
    delBtn.setAttribute('onclick' , "deleteItem(this)")
    delBtn.setAttribute('class' , "button")
    li.appendChild(delBtn);
    
    // creating EDIT button
    var editBtn = document.createElement('button');
    editBtn.innerText = 'EDIT'
    editBtn.setAttribute('onclick' , "editItem(this)")
    editBtn.setAttribute('class' , "editButton")
    li.appendChild(editBtn);
}
function deleteItem(e) {
    e.parentNode.remove()
}
function delAll(e) {
    list.innerHTML = ''
}
function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue
    var editValue = prompt("Enter Value" , val);
    e.parentNode.firstChild.nodeValue = editValue
}