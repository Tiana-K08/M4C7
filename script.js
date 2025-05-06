const blocks = document.querySelectorAll('.question-answer');

blocks.forEach(block => {
  const button = block.querySelector('.question-wrapper');
  const answer = block.querySelector('.answer-wrapper');

  button.addEventListener('click', () => {
    answer.classList.toggle('close');
  });
});
