window.addEventListener('DOMContentLoaded', () => {
// Selecting necessary elements from the HTML document
      const start = document.querySelector('#start');
      const quizBlock = document.querySelector('#quizBlock');
      const submitButton = document.querySelector('#btnSubmit');
      const resetButton = document.querySelector('#btnReset');
      const timeElement = document.querySelector('#time');
      const scoreElement = document.querySelector('#score');

      
      let timer;
      let timeRemaining = 60; // 60 seconds

// Event listener for the "Start" button
       start.addEventListener('click', function (e) {
// Display the quiz block and hide the start button
              quizBlock.style.display = 'block';
              start.style.display = 'none';
// Start the countdown timer
              timer = setInterval(countdown, 1000);
            });


// Event listener for the "Submit" button
      submitButton.addEventListener('click', function(e) {
        console.log('Submit button clicked');
// check if the quiz has been answered
        let isAnswered = quizArray.every((quizItem, index) => {
          return Array.from(document.getElementsByName(`radio${index}`)).some(radio => radio.checked);
        });
      
        if (isAnswered) {
          clearInterval(timer);
          calculateScore();
        } else {
          alert('Please answer all the questions before submitting.');
        }
      });  

      
// Event listener for the "Reset" button
      resetButton.addEventListener('click', function(e) {
        // Reload the page to reset the quiz
                 window.location.reload();
            });


// Countdown function called every second by the timer
      const countdown = () => {
        timeRemaining--;
        if (timeRemaining <= 0) {
          clearInterval(timer);
          calculateScore();
        } else {
          timeElement.innerText = timeRemaining;
        }
      }
         

// Array containing the quiz questions, options, and correct answers
  const quizArray = [
    {
      q: '1. Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1,
    },
    {
      q: '2. Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: '3. What is the capital of Australia?',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    {
      q: '4. What is the square root of 81?',
      o: ['7', '8', '9', '10'],
      a: 2,
    },
    {
      q: '5. What is the chemical symbol for Oxygen?',
      o: ['O', 'Ox', 'O2', 'O3'],
      a: 0,
    },
  ];


// Function to display the quiz questions and options
   const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
// Generates HTML markup for each question and option
    quizDisplay += `<ul class="list-group">
                 Q - ${quizItem.q}
                  <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                  <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                  <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                  <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                  </ul>
                  <div>&nbsp;</div>`;
  });
  quizWrap.innerHTML = quizDisplay;
};


// Function to calculate the quiz score
  const calculateScore = () => {
    console.log('Calculating score');
    let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        let liElement = document.querySelector('#' + li);
        let radioElement = document.querySelector('#' + r);
  
        if (quizItem.a == i) {
          liElement.classList.add('correct-answer');
        }
  
        if (radioElement.checked) {
          console.log('Answer checked', li);
          if (quizItem.a == i) {
            score++;
          } else {
            liElement.classList.add('wrong-answer');
          }
        }
      }
    });
    scoreElement.innerText = scoreElement.innerText = 'You scored ' + score + '/' + quizArray.length;
    console.log('Score:', score);
  };

  // call the displayQuiz function
  displayQuiz();
});