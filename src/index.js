import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");


const ADD = "ADD"
const MINUS = "MINUS"

// reducer
const countModifier = (count = 0, action) => {
    switch (action.type) {
        case ADD :
            return count + 1;
        case MINUS :
            return count-1;
        default: 
            return count
    }
}

const countStore = createStore(countModifier);

// 텍스트 변경을 onChange에 적어 놓는다
const onChange = () => {
    number.innerText = countStore.getState();
}

countStore.subscribe(onChange)

function handleAdd() {
    countStore.dispatch({type: ADD})    
}

function handleMinus() {
    countStore.dispatch({type: MINUS})    
}


add.addEventListener("click", handleAdd)
minus.addEventListener("click", handleMinus)

console.log(countStore.getState());

