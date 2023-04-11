// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector('#modal');
modal.className = 'hidden';
const like = document.querySelectorAll('span.like-glyph');
const errorMessage = document.querySelector('p#modal-message');

like.forEach(heart =>
  heart.addEventListener('click', () => {
    if (heart.innerText === EMPTY_HEART) {
      mimicServerCall()
      .then(response => { 
        console.log(response);
        heart.innerText = FULL_HEART;
        heart.className = 'activated-heart';
      })
      .catch(error => {
        errorMessage.innerText = error;
        modal.classList.remove('hidden');
      })
      setTimeout(() => {
        errorMessage.innerText = 'ERROR!';
        modal.classList.add('hidden')
      }, 300);
    } else {
      heart.innerText = EMPTY_HEART;
      heart.classList.remove('activated-heart');
    }
  }))

  //------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
