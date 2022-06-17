document.addEventListener("DOMContentLoaded", () => {
  // your code here
const submitButton = document.getElementsByTagName('input')[2];
const taskList = document.getElementById('tasks');

submitButton.addEventListener('click',(event)=>{
 event.preventDefault();   // prevents the form from submitting and reloading the website.

 //Adding  new item for the todo
 const inputText = document.getElementsByTagName('input')[0].value;   // Has to be here and not outside since the value is picked on submit
 const newTask = document.createElement('li')
 const deleteButton = document.createElement('button');
 const taskPriority = document.getElementsByTagName('select')[0].value;
 const duration = document.getElementsByTagName('input')[1].value   //requested in the stretched deliverables.
 newTask.textContent =`${inputText} for ${duration}`;
 newTask.style.color = taskPriority;
 deleteButton.appendChild(document.createTextNode('X'));
 newTask.appendChild(deleteButton);
 taskList.appendChild(newTask); // The order really matters in that after you crete, you set text and then append to parent.

 //Adding the Deleting functionality
 deleteButton.addEventListener('click',(event)=>{  //Idea
   event.preventDefault();
   deleteButton.parentNode.remove();
 });
});
});
