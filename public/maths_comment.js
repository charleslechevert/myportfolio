

const mathsComment = document.getElementById('maths_comment')
const mathsCommentCounter = document.getElementById('maths_comment-counter')




maths_btn.addEventListener('click', () => {
  commentActive = true;
  let iteration = 1
  setInterval(() => {
    iteration = iteration % 61
    console.log(iteration)
    iteration ++;

    fetch(`${iteration}.png`)
  .then(response => {
    if (response.ok) {
      mathsComment.src = `${iteration}.png`;
    } else {
      mathsComment.src = `${iteration}.jpg`;
    }
  })
  .catch(error => {
    mathsComment.src = `${iteration}.jpg`;
  });

  mathsCommentCounter.textContent = `${iteration}/61`

},1000)

},{ once: true }) 

