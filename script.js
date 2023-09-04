const quizpv = [
    {
        question :"Q1: What is the Full Form of BMW? ",
        a : "Balaji Masala Wafers",
        b : "Bayerische Motoren Werke ",
        c : "British Motor Works",
        d : "Buy Mineral Water",
        ans : "ans2"
    },
    {
        question :"Q2: Where is the headquarters of BMW located? ",
        a : "Frankfurt",
        b : "Berlin",
        c : "Munich",
        d : "None of these",
        ans : "ans3"
    },
    {
        question :"Q3: Who started Ford Motor Company?",
        a : "Henry Ford",
        b : "Karl Benz",
        c : "Clara Jane Ford",
        d : "William Ford",
        ans : "ans1"
    },
    {
        question :"Q4: Which is the Fastest car of 2023? ",
        a : "Rimac Nevera",
        b : "Hennessey Venom F5",
        c : "SSC Tuatara",
        d : "Koenigsegg Jesko Absolute",
        ans : "ans4"
    },
    {
        question :"Q5: Currently which is the most Expensive car In the world?",
        a : "Bugatti Centodieci",
        b : "Rolls-Royce La Rose Noire Droptail ",
        c : "Rolls-Royce Boat Tail",
        d : "Bugatti La Voiture Noire ",
        ans : "ans2"
    }
];


const inner_div = document.getElementsByClassName("inner-div")[0]
const question = document.querySelector('.question');
const opt1 = document.querySelector('#opt1');
const opt2 = document.querySelector('#opt2');
const opt3 = document.querySelector('#opt3');
const opt4 = document.querySelector('#opt4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');
let timeLeft = document.querySelector('.time-left')


let questionCount = 0;
let score = 0;
let count = 11;
let countdown;


const displayNext = () => {
    questionCount++;
    if (questionCount == quizpv.length){
        showscore.innerHTML = `<h3> Your Score ${score}/${quizpv.length} </h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>`;
        showscore.classList.remove('scorearea');
        inner_div.setAttribute("style","display:none");
    }
    else{
        deselectAll();
        loadQuestion();
        count = 11;
        clearInterval(countdown);
        timerDisplay();
    }
}

const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if(count == 0){
            clearInterval(countdown);
            const checkedAnswer = getCheckAnswer();
            console.log(checkedAnswer);
            if (checkedAnswer === quizpv[questionCount].ans){
            score++;
             };
            displayNext();
        }
    }, 1000);
};


const loadQuestion = () =>{
    
        const questionList = quizpv[questionCount];

        question.innerHTML = questionList.question;
        opt1.innerHTML = questionList.a;
        opt2.innerHTML = questionList.b;
        opt3.innerHTML = questionList.c;
        opt4.innerHTML = questionList.d;
        clearInterval(countdown);
        timerDisplay();
       
}


loadQuestion();

const getCheckAnswer = () =>{
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    
    return answer;
    
}

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer === quizpv[questionCount].ans){
    score++;
    };
    clearInterval(countdown);
    displayNext();
    deselectAll();
    if (questionCount<quizpv.length){
        loadQuestion();
    }
    else{
        
        showscore.innerHTML = `<h3> Your Score ${score}/${quizpv.length} </h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>`;
        showscore.classList.remove('scorearea')
        inner_div.setAttribute("style","display:none")
    }

});