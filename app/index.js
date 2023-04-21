import {OBJECT_SPA} from "./components/objectApp.js";

function _createElementTest (argument){
    let elem = `
        <div class="test-container">
        <div class="test-indicator">
            <div class="indicator-cont">
                <div></div>
            </div>
        </div>
        <form action="/" method="POST" id="form" class="test-form">
            <div class="test-question">
                <p>

                </p>
            </div>
            <div class="test-answer">
                <ul class="test-answer-list">
                </ul>
            </div>
        </form>
        <div class="test-btn">
            <button id="test-btn" type="submit">Далее</button>
        </div>
    </div>
    `;

    document.querySelector(argument).insertAdjacentHTML("beforeend", elem);
};

function _updateElementTest (argument){
    const arg = argument;

    document.querySelector(".test-question>p")
    .innerHTML = arg.questionArr[arg.counter].question.text;

    if(Array.isArray(arg.questionArr[arg.counter].answer) && arg.questionArr[arg.counter].question.image === null){
        arg.questionArr[arg.counter].answer.forEach((e, index)=>{
            let elem = `
            <li class="test-answer-list-item">
                <input data-choice="${e}" class="radio-test-input" id="radio${index}" type="radio" name="radio-test">
                <label for="radio${index}" class="radio-test-label">
                    <p class="radio-test-label-text${index}"></p>
                </label>
            </li>
            `;
    
            document.querySelector(".test-answer-list")
            .insertAdjacentHTML("beforeend", elem);
    
            document.querySelector(`.radio-test-label-text${index}`)
            .innerHTML = e;
        });
    }else if(!(Array.isArray(arg.questionArr[arg.counter].answer)) && arg.questionArr[arg.counter].question.image === null){
        document.querySelector(".test-answer").classList.add("test-answer-color");
        document.querySelector(".test-answer").classList.remove("test-answer");
        document.querySelector(".test-answer-list").classList.add("test-answer-list-color");
        document.querySelector(".test-answer-list").classList.remove("test-answer-list");

        arg.questionArr[arg.counter].answer.color.forEach((e, index)=>{
            let elem = `
            <li class="test-answer-list-color-item">
                <input  data-choice="${e}" class="radio-test-input" id="radio${index}" type="radio" name="radio-test" value="${e}">
                <label for="radio${index}" class="radio-test-label-color" style="background-color: ${e};">
                </label>
            </li>
            `;

            document.querySelector(".test-answer-list-color")
            .insertAdjacentHTML("beforeend", elem);
    
        });
    }else if(Array.isArray(arg.questionArr[arg.counter].answer) && arg.questionArr[arg.counter].question.image !== null){

        if(Number.isInteger(arg.questionArr[arg.counter].answer[0])){
            document.querySelector(".test-answer").classList.add("test-answer-image");
            document.querySelector(".test-answer").classList.remove("test-answer");
            document.querySelector(".test-answer-list").classList.add("test-answer-list-image");
            document.querySelector(".test-answer-list").classList.remove("test-answer-list");

            arg.questionArr[arg.counter].answer.forEach((e, index)=>{
                let elem = `
                <li class="test-answer-list-item-image">
                    <input  data-choice="${e}" class="radio-test-input" id="radio${index}" type="radio" name="radio-test">
                    <label for="radio${index}" class="radio-test-label-image">
                        <p class="radio-test-label-text${index}"></p>
                    </label>
                </li>
                `;
        
                document.querySelector(".test-answer-list-image")
                .insertAdjacentHTML("beforeend", elem);
        
                document.querySelector(`.radio-test-label-text${index}`)
                .innerHTML = e;
            });
        }else{
            arg.questionArr[arg.counter].answer.forEach((e, index)=>{
                let elem = `
                <li class="test-answer-list-item">
                    <input  data-choice="${e}" class="radio-test-input" id="radio${index}" type="radio" name="radio-test">
                    <label for="radio${index}" class="radio-test-label">
                        <p class="radio-test-label-text${index}"></p>
                    </label>
                </li>
                `;
        
                document.querySelector(".test-answer-list")
                .insertAdjacentHTML("beforeend", elem);
        
                document.querySelector(`.radio-test-label-text${index}`)
                .innerHTML = e;
            });
        };
    };

    if(arg.questionArr[arg.counter].question.image === null){
        return
    }else{
        let elem = `<img src="" alt="test image" style="width: ${arg.questionArr[arg.counter].question.imageWidth}; height: ${arg.questionArr[arg.counter].question.imageHeight};">`;

        document.querySelector(".test-question")
        .insertAdjacentHTML("beforeend", elem);

        document.querySelector(".test-question>img")
        .src = arg.questionArr[arg.counter].question.image;
    };
};

function removeEllRoot (arg){
    const removePreloader = function(){
        document.querySelector(".body-cont__preloader").classList.remove("_active-preloader");
    };
    let [...childrenRoot] = document.querySelector(arg).children;

    document.querySelector(".body-cont__preloader").classList.add("_active-preloader");

    childrenRoot.forEach(e=>e.remove(e));
    setTimeout(removePreloader, 2000);
    _createElementTest(".root");
    _updateElementTest(OBJECT_SPA);
};

function timerCounter (arg){
    let time = 599;
    let counter = arg;

    let timer = setInterval(updateCounter,1000);


    function updateCounter(){
        if(time >= 0){
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            minutes = minutes < 10? "0" + minutes: minutes;
            seconds = seconds < 10? "0" + seconds: seconds;
            counter.innerHTML = `${minutes}:${seconds}`;
            time--;
        }else{
            arg.style.color = "red"
            clearTimeout(timer)
        };
    };
};

document.querySelector(".root").addEventListener("click", (e)=>{
    if(e.target.id === "test-btn"){
        if(OBJECT_SPA.counter !== OBJECT_SPA.questionArr.length - 1){
            const form = document.getElementById("form");
            const [...name] = form.querySelectorAll("[name='radio-test']");
    
            let checked = false;
    
            name.forEach(e=>{
                if(e.checked){
                    checked = true;
    
                    OBJECT_SPA.counter = OBJECT_SPA.counter + 1;
                    OBJECT_SPA.user.userAnswer.push(e.getAttribute("data-choice"));
    
                    removeEllRoot (".root");
                    document.querySelector(".test-btn button").classList.remove("_active-test-btn");
                    document.querySelector(".indicator-cont>div").
                    style.width = `${OBJECT_SPA.counter * 10}%`;
                }else{
                    return
                };
            });
    
            if(checked === false){
                document.querySelector(".warning").classList.add("_active_warning");
                setTimeout(()=>{
                    document.querySelector(".warning").classList.remove("_active_warning")
                },3000);
            }else{
                return
            };
        }else{
            const resPage = `
            <div class="test-container">
                <div class="test-indicator">
                    <div class="indicator-cont">
                        <div style="width: 99%;"></div>
                    </div>
                </div>
                <div class="results">
                    <h2 class="results__banner">
                        Обработка результатов
                    </h2>
                    <div class="results__cont">
                        <div class="results__cont-dec">

                        </div>
                    </div>
                    <p class="results__text">
                        Определение стиля мышления...........
                        .... ...................................................
                    </p>
                </div>
            </div>
            `,
            lastPage = `
                <div class="last-page">
                    <h2>
                        Ваш результат рассчитан:
                    </h2>
                    <p class="last-page__text-first">
                        <span>Вы относитесь к 3%</span> респондентов,  
                        чей уровень интеллекта более чем на 
                        15 пунктов отличается от среднего в 
                        большую или меньшую сторону! 
                    </p>
                    <h3>
                        Скорее получите свой результат!
                    </h3>
                    <p class="last-page__text-second">
                        В целях защиты персональных 
                        данных результат теста, их подробная 
                        интерпретация и рекомендации доступны 
                        в виде голосового сообщения по звонку 
                        с вашего мобильного телефона
                    </p>
                    <div class="last-page-cont">
                        <p>
                            Звоните скорее, запись доступна всего
                        </p>
                        <div class="last-page-cont__timer">
                            <span class="timer__minut">10:00</span>
                            <span class="timer_text">минут</span>
                        </div>
                    </div>
                    <button id="call-btn" class="last-page__call-btn">
                        Позвонить и прослушать
                        результат
                    </button>
                    <p class="last-page__text-third">
                        TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, 
                    </p>
                </div>
            `;
            const remove = function(){
                let [...childrenRoot] = document.querySelector(".root").children;
                childrenRoot.forEach(e=>e.remove(e));

            },
            creatLastPage = function (){
                remove();
                document.querySelector(".root").insertAdjacentHTML("beforeend", lastPage);
                document.querySelector(".nav-decor p").innerHTML = "готово!";
                document.querySelector(".nav-decor p").style.fontStyle = "2.3rem";
                timerCounter (document.querySelector(".timer__minut"))
            };

            remove();
            document.querySelector(".root").insertAdjacentHTML("beforeend", resPage);
            setTimeout(creatLastPage,5000);            
        };
    }else if(e.target.type === "radio"){
        document.querySelector(".test-btn button").classList.add("_active-test-btn");
    }else if(e.target.id === "call-btn"){
        
        const requestURL = "https://swapi.dev/api/people/1/";

        function sendRequest(method, url, body = null){
            return fetch(url).then(response =>{
                return response.json()
            });
        };

        function creatGETEll(arg){
            let data = []; 
            let dataKeys = Object.keys(arg);
            let dataVal = Object.values(arg);

            dataKeys.forEach((e, index)=>{
                let obj = new Object({[(`${e}`)]:dataVal[index]});
                data.push(obj)
            });

            let ell = `
                <div class="GET-req-body"></div>
            `;

            document.querySelector(".last-page__call-btn").insertAdjacentHTML("afterend", ell);

            data.forEach((e, index )=>{
                let textVall = '';
                let textKey = (dataKeys[index].slice(0, 1).toUpperCase() + dataKeys[index].slice(1))
                .split("_").join(" ");

                if (Object.values(e)[0].length !== 0){
                    textVall = dataVal[index];
                }else{
                    textVall = "nothing"
                }
                
                let ell = `
                    <div class="GET_text-cont">
                        <p class="GET_text_name">${textKey}:</p>
                        <p  class="GET_text_val">${textVall}</p>
                    </div>
                `;

                document.querySelector(".GET-req-body")
                .insertAdjacentHTML("beforeend", ell);
            });
        };
        
        sendRequest("GET", requestURL)
        .then(data => creatGETEll(data))
        .catch(err => console.error(err));
    }else{
        return
    }
});

document.querySelector(".nav-btn").addEventListener("click", ()=>{
    let clearEll = () =>{
        document.querySelector(".nav-menu__cont").classList.remove("_active_nav-menu__cont");
        document.querySelector(".nav-menu-list").classList.remove("_active_nav-menu-list");
        document.querySelector(".nav-btn").classList.remove("_active_nav-btn");
    };
    if(document.querySelector(".nav-btn").classList.contains("_active_nav-btn")){
        clearEll();
    }else{
        document.querySelector(".nav-menu__cont").classList.add("_active_nav-menu__cont");
        document.querySelector(".nav-menu-list").classList.add("_active_nav-menu-list");
        document.querySelector(".nav-btn").classList.add("_active_nav-btn");


        document.querySelector(".nav-menu-list").addEventListener("click", ()=>{
            setTimeout(clearEll, 300);
        });
    };
});

document.querySelector(".body-cont").addEventListener("click", (e)=>{
    if(e.target.classList[0] === "test"){
        OBJECT_SPA.counter = 0;
        OBJECT_SPA.user.userAnswer = [];
        removeEllRoot (".root");
        document.querySelector(".nav-decor").classList.remove("_inactive_nav-decor")
    }
});