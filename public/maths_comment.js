

const mathsComment = document.getElementById('maths_comment')
const mathsCommentCounter = document.getElementById('maths_comment-counter')

console.log(mathsComment)


maths_btn.addEventListener('click', () => {
  let iteration = 1
  setInterval(() => {
    console.log(iteration)
    iteration = iteration % 61
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

},6000)

}) 

