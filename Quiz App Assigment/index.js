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
         
  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
  ];

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };

  // Calculate the score
  const calculateScore = () => {
    let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);

        if (quizItem.a == i) {
          //change background color of li element here
        }

        if (radioElement.checked) {
          // code for task 1 goes here
        }
      }
    });
  };

  // call the displayQuiz function
  displayQuiz();
});