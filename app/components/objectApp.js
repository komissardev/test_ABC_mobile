export const OBJECT_SPA = {
    questionArr : [
        {
            question: {
                text:"Ваш пол:",
                image: null
            },
            answer:["Мужчина","Женщина"]
        },
        {
            question:{
                text:"Укажите ваш возраст:",
                image: null
            },
            answer:["До 18","От 18 до 28","От 29 до 35","От 36"]
        },
        {
            question: {
                text:"Выберите лишнее:",
                image: null
            },
            answer:["Дом","Шалаш","Бунгало","Скамейка","Хижина"]
        },
        {
            question: {
                text:"Продолжите числовой ряд: 18 20 24 32",
                image: null
            },
            answer:["62","48","74","57","60","77"]
        },
        {
            question: {
                text:"Продолжите числовой ряд: 18 20 24 32",
                image: null
            },
            answer:{
                color: [
                    "#A8A8A8",
                    "#0000A9",
                    "#00A701",
                    "#F60100",
                    "#FDFF19",
                    "#A95403",
                    "#000000",
                    "#850068",
                    "#46B3AC"
                ]
            }
        },
        {
            question: {
                text:"Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",
                image: null
            },
            answer:{
                color: [
                    "#A8A8A8",
                    "#46B2AC",
                    "#A95403",
                    "#00A701",
                    "#000000",
                    "#F60100",
                    "#850068",
                    "#FDFF19",
                    "#0000A9"
                ]
            }
        },
        {
            question: {
                text:"Выберите правильную фигуру из четырёх пронумерованных.",
                image: "/assets/png/image_q1.png",
                imageWidth: "185px",
                imageHeight: "235px"
            },
            answer:[1 ,2 ,3 ,4]
        },
        {
            question: {
                text:"Вам привычнее и важнее:",
                image: null
            },
            answer:[
                "Наслаждаться каждой минутой проведенного времени",
                "Быть устремленными мыслями в будущее",
                "Учитывать в ежедневной практике прошлый опыт"
            ]
        },
        {
            question: {
                text:"Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ",
                image: "/assets/png/image_q2.png",
                imageWidth: "173px",
                imageHeight: "115px"
            },
            answer:[
                "Оно остроконечное",
                "Оно устойчиво",
                "Оно-находится в состоянии равновесия"
            ]
        },
        {
            question: {
                text:"Вставьте подходящее число",
                image: "/assets/png/image_q3.png",
                imageWidth: "228px",
                imageHeight: "207px"
            },
            answer:[34 ,36 ,53 ,44 ,66 ,42]
        },
    
    ],
    counter : 0,
    user: {
        userName: "userName",
        userAnswer:[]
    }
};
