document.addEventListener("DOMContentLoaded", () => {
  // your code here
const submitButton = document.getElementsByTagName('input')[1];
const taskList = document.getElementById('tasks');
submitButton.addEventListener('click',(event)=>{
 event.preventDefault();   // prevents the from from submitting and reloading the website.
 const inputText = document.getElementsByTagName('input')[0].value;   // Has to be here and not outside since the value is picked on submit
 const newTask = document.createElement('li');
 newTask.appendChild(document.createTextNode(inputText));
 taskList.appendChild(newTask); // The order really matters in that after you crete, you set text and then append to parent.
});
});
