const form = document.querySelector('#new-item-form');
const list = document.querySelector('#list');
const input = document.querySwlector('#item-input');

form.addEventListener("submit", e => {

    e.preventDefault()
    
    const item = document.createElement("div");
    item.innerText = item.value;
    item.classList.add("list-item");

    list.appendChild(item);

    input.value = " ";

    item.addEventListener("click", ()=>{
        list.removeChild(item);
    })
})