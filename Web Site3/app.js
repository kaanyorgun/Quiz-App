const quizData = [{
    question: 'Kaç yaşindasiniz?',
    a: '10',
    b: '17',
    c: '26',
    d: '110',
    correct: 'c'
}, {
    question: '2019 da en çok kullanilen programlama dili hangisidir? ',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'Javascript',
    correct: 'd'
}, {
    question: 'Javascript kütüphanesi olarak bilinen kodlama dili hangisidir?',
    a: 'Bootstrap',
    b: 'Python',
    c: 'CSS',
    d: 'React',
    correct: 'd'
}, {
    question: 'CSS kütüphanesi olarak bilinen kodlama dili hangisidir?',
    a: 'Javascript',
    b: 'Bootstrap',
    c: 'React',
    d: 'HTML',
    correct: 'B'
}, {
    question: 'Javascript hangi yılda piyasaya sürüldü ?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: '2001',
    correct: 'b'
}];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz]
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
       
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {


    const answer = getSelected();
    console.log(answer)

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if ( currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>
            `;
        }
    }


})