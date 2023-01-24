const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

const savedTodoList = JSON.parse(localStorage.getItem('saved-items'))
console.log(savedTodoList)


const createTodo = function (storageData) {
    let todoContents = todoInput.value;
    if(storageData) {
        todoContents = storageData.contents
    }


    const newLi = document.createElement('li')
    const newSpan = document.createElement('span')
    const newBtn = document.createElement('button')

    newBtn.addEventListener('click', ()=>{
        newLi.classList.toggle('complete')
    })

    newLi.addEventListener('dblclick',()=>{
        newLi.remove()
    });

    if(storageData?.complete === true) {
        newLi.classList.add('complete')
    }


    newSpan.textContent = todoContents;
    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
    todoInput.value = ''
    saveItemsFn();
}

const keyCodeCheck = function () {
    if(window.event.keyCode === 13 && todoInput.value !== '' ) {
        createTodo();
    }
}

const deleteAll = function () {
    const liList = document.querySelectorAll('li');
    for(let i=0; i < liList.length; i++) {
        liList[i].remove();
    }
}

const saveItemsFn = function() {
    const saveItems = [];
    for(let i=0; i < todoList.children.length; i++ ){
        const todoObj = {
            contents: todoList.children[i].querySelector('span').textContent,
            complete: todoList.children[i].classList.contains('complete')
        }
        saveItems.push(todoObj)
    }

    saveItems.length === 0 
    ? localStorage.removeItem('saved-items') 
    : localStorage.setItem('saved-items', JSON.stringify(saveItems))
    

if(savedTodoList) {
    for(let i = 0; i < savedTodoList.length; i++) {
        createTodo(savedTodoList[i])
    }    
}
}

const weatherSearch = function ({ latitude, longtitude}) {
    console.log(position.latitude)
    fetch(`https://api.openweathermap.org/data/3.0/weather?lat={lat}&lon={lon}&exclude={part}&appid={API key}`)
    .then((res)=>{
        const weatherData = {
            location: json.name,
            weather: json.weather[0].main,
        }
        weatherDataActive(weatherData)
    })
    .then((json)=>{
        console.log(json)
    })
    .catch((err)=> {
        console.log(err)
    })
}

const accessToGeo = function({ coords }) {
    const { latitude, longtitude } = coords
    const positionObj = {
        latitude: position.coords.latitude,
        longtitude: position.coords.longtitude
    }

    weatherSearch(positionObj)
}

const askForLocation = function() {
    navigator.geolocation.getCurrentPosition(accessToGeo, (err)=>{
        console.log(err)
    })
};

askForLocation();

