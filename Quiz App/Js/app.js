const questions= [{
    'que': 'Which of the following is a client site language?',
    'a': 'Java',
    'b': 'C',
    'c': 'Python',
    'd': 'Javascript',
    'correct': 'd'
},
{
    'que': 'What year was JavaScript launched?',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': 'none of the above',
    'correct': "b"
},
{
    'que': 'What does CSS stands for?',
    'a': 'Hypertext Markup Language',
    'b': 'Cascading Style Sheet',
    'c': 'Jason Object Notation',
    'd': 'none of the above',
    'correct': 'b'
}
]

// const arr= [
// {'a':'hi'},
// {'b':'Hello'},
// {'c':'welcom'}
// ]

let index=0;
let total= questions.length;
let right = 0, wrong= 0;
const quesBox= document.getElementById("queBox");
const optionInputs= document.querySelectorAll('.options');

const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
    const data= questions[index];
    quesBox.innerText= `${index+1}. ${data.que}`;
    optionInputs[0].nextElementSibling.innerText= data.a;
    optionInputs[1].nextElementSibling.innerText= data.b;
    optionInputs[2].nextElementSibling.innerText= data.c;
    optionInputs[3].nextElementSibling.innerText= data.d;
}
  
const submitQuiz= ()=>{
    const data= questions[index];
    const ans = getAnswer();
    if(ans== data.correct){
        right++;
    }
    else{
        wrong++
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer= ()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
               answer= input.value; 
            }
        }
    )
    return answer;
}

const reset= ()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked= false;
        }
    )
}

const endQuiz= ()=>{
    document.getElementById("box").innerHTML =`
    <h2>Thank you for playing the quiz</h2>
    <h3>😍Correct = ${right}</h3>
    <h3>😭Incorrect = ${wrong}</h3>
    `;

}
loadQuestion()