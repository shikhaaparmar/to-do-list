let entered = document.querySelector(".entered-list");
let addbtn = document.querySelector(".add-list");
let tasks = document.querySelector(".tasks");


// add button disable

entered.addEventListener('keyup', function () {
    if (entered.value.trim() !== 0) {
        addbtn.classList.add('active')
    }
    else {
        addbtn.classList.remove('active')
    }
})

//add new item to list


addbtn.addEventListener('click', function () {
    if (entered.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = ` <p> ${entered.value}new item here</p>
                <div class="item-btn">
                    <i class="ri-pencil-fill"></i>
                    <i class="ri-close-line"></i>
                </div>`
        tasks.appendChild(newItem);
        entered.value = '';
    }
    else {
        alert('please enter a task')
    }
})

//delete item from list

tasks.addEventListener('click', function (dets) {
    if (dets.target.classList.contains('ri-close-line')) {
        dets.target.parentElement.parentElement.remove();
    }
})

//mark item as completed

tasks.addEventListener('click', function (dets) {
    if (dets.target.classList.contains('ri-pencil-fill')) {
        dets.target.parentElement.parentElement.classList.toggle('completed');
    }
})