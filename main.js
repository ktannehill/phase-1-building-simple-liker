// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// toggle error message class hidden
  // lol put it in HTML, here it still shows for a split second on load
// const errorMsg = document.querySelector("#modal")
// document.addEventListener("DOMContentLoaded", () => errorMsg.classList.add("hidden"))

// grab hearts
const hearts = document.querySelectorAll(".like-glyph") // node list

// callback to handle server call on click
const likeCallBack = (e) => {
  const heart = e.target
  mimicServerCall()
  .then((serverMsg) => {
    alert("You notified the server!")
    alert(serverMsg)
    if(heart.textContent === EMPTY_HEART) {
    heart.textContent = FULL_HEART
    heart.classList.add("activated-heart")
    } else if(heart.textContent === FULL_HEART) {
      heart.textContent = EMPTY_HEART
      heart.classList.remove("activated-heart")
    }
  })
  .catch((error) => {
    errorMsg.classList.remove("hidden")
    setTimeout(() => errorMsg.classList.add("hidden"), 3000)
  })
}

// add listener to each heart in list
  // callback to server call func below (hoisted)
for(const heart of hearts) {
  heart.addEventListener("click", likeCallBack)
}

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
