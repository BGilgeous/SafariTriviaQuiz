// Questions will be asked
const Questions = [{
    id: 0,
    q: "The Cheetah is the fastest land animal, what is the second fastest?",
    a: [{ text: "Greyhound", isCorrect: false },
        { text: "Kangaroo", isCorrect: false },
        { text: "Ostrich", isCorrect: true },
        { text: "Cougar", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What animal has the fastest brain relative to it's body size?",
    a: [{ text: "Humans", isCorrect: false, isSelected: false },
        { text: "Bats", isCorrect: false },
        { text: "Sperm Whales", isCorrect: false },
        { text: "Hummingbird", isCorrect: true }
    ]

},
{
    id: 2,
    q: "Other than humans, what is the only primate capable of having blue eyes?",
    a: [{ text: "Howler Monkey", isCorrect: false },
        { text: "Golden Lion Marmoset", isCorrect: false },
        { text: "Black Lemur", isCorrect: true },
        { text: "Orangutan", isCorrect: false }
    ]

},
{
    id:3,
    q: "What is the largest animal on Earth, today?",
    a: [
      { text: "Colossal Squid", isCorrect: false },
      { text: "Blue Whale", isCorrect: true },
      { text: "Goliath Beetle", isCorrect: false },
      { text: "Brown Bear ", isCorrect: false }
    ]
},
{
    id:4,
    q: "Which of the following animals does NOT use camoflauge?",
    a: [
      { text: "Chameleon", isCorrect: false },
      { text: "Red-capped Manakin", isCorrect: true },
      { text: "Gaboon Viper", isCorrect: false },
      { text: "Flower Mantis", isCorrect: false }
    ]
}, 
]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "darkkhaki";
    op2.style.backgroundColor = "darkolivegreen";
    op3.style.backgroundColor = "darkolivegreen";
    op4.style.backgroundColor = "darkolivegreen";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "darkolivegreen";
    op2.style.backgroundColor = "darkkhaki";
    op3.style.backgroundColor = "darkolivegreen";
    op4.style.backgroundColor = "darkolivegreen";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "darkolivegreen";
    op2.style.backgroundColor = "darkolivegreen";
    op3.style.backgroundColor = "darkkhaki";
    op4.style.backgroundColor = "darkolivegreen";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "darkolivegreen";
    op2.style.backgroundColor = "darkolivegreen";
    op3.style.backgroundColor = "darkolivegreen";
    op4.style.backgroundColor = "darkkhaki";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < Questions.length -1) {
    id++;
    iterate(id);
    console.log(id);
}

if (start) {
    iterate(0);
  }
  
})