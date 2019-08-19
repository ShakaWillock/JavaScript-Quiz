const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('#quiz-form');
const correct = document.querySelector('#correct');
const userScore = document.querySelector('#score');
let score = 0;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Stores all checked values
  const checkedAnswers = form.querySelectorAll('input[type=radio]:checked');

  // Stores all answers the user checked
  let userAnswers = [];
 
  for(let i = 0; i < checkedAnswers.length; i++) {
    userAnswers.push(checkedAnswers[i].value);
    if(userAnswers[i] === correctAnswers[i]) {
      score = score + 25;
    } else {
      score = score + 0;
    }
  }

  correct.style.display = 'block';
  userScore.textContent = `${score}%`;
  userScore.style.display = 'inline-block';
  
  window.scrollTo({top: 0, behavior: 'smooth'});

  reset();
});

const reset = () => {
  form.reset();
  score = 0;
}

