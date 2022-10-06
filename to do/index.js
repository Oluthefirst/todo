let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let task = document.querySelector('.tasks');

// add btn disabled


input.addEventListener('keyup', () => {
  if(input.value.trim() != 0){
    addBtn.classList.add('active')
  } else {
    addBtn.classList.remove('active')
  }
})

// add new item to list
addBtn.addEventListener('click', () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement("div");
    newItem.classList.add("items");
    newItem.innerHTML = `
    <p> ${input.value}</p>
    <div class="item-btn">
      <i class="fa-solid fa-pen-to-square"></i>
      <i class="fa-sharp fa-solid fa-trash"></i>
    </div>
    `
    task.appendChild(newItem); 
    input.value = '';
  } else{
    alert('Add new task')
  }
})

task.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash')) {
    e.target.parentElement.parentElement.remove();
  }
})

task.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-pen-to-square')) {
    e.target.parentElement.parentElement.classList.toggle('completed');
  }
})







