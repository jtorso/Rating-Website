// Step 1: Make sure the form doesn't show in site link do that by use the preventdefault
// Step 2: Create a variable and determine which button the user clicked by checking the input's name and check if its selected and get value
// Step 3: Check if user selected using an if statement 
// Step 4: Going into the second document using href
// Step 5: Store that value 
// Step 6: Send user to thank you document
// Step 7: Check if user is in the document 
// Step 8: Create two variables, one to get the stored data and the other to get the text element in the thank you document
// Step 9: Change the text display into flex
// Step 10: Change textContent into the users input


function ratingData() {
  event.preventDefault()
  const selected = document.querySelector(`input[name = button]:checked`)

  if(selected) {
    const selectedData = document.querySelector(`input[name = button]:checked`).value
    const anchor = document.createElement('a');
    anchor.href = `thankyou.html`
    anchor.click();
    const submit = document.getElementById(`submit`);
    submit.appendChild(anchor)
    localStorage.setItem(`sharedData`, selectedData)
  }
}


if (window.location.pathname.includes = `thankyou`) {
  const rating = localStorage.getItem(`sharedData`)
  const text = document.getElementById(`text`)
  text.style.display = `flex`
  text.textContent = `You selected ${rating} out of 5`
}



























/* 
const one = document.getElementById(`button1`)
const two = document.getElementById(`button2`)
const three = document.getElementById(`button3`)
const four = document.getElementById(`button4`)
const five = document.getElementById(`button5`)
const submit = document.getElementById(`submit`)

function ratingData() {
 event.preventDefault()
 const selected = document.querySelector(`input[name = button]:checked`)
 if(selected) {
 window.location.href = `thankyou.html`
 const selectedData = document.querySelector(`input[name = button]:checked`).value
 localStorage.setItem(`userRating`, selectedData)
 } else {
   window.alert(`Please select one`)
 }
}


if(window.location.pathname.includes(`thankyou.html`)) {
 const rating = localStorage.getItem('userRating')
 const text = document.getElementById(`text`)
 text.style.display = `flex`
 text.textContent = `You selected ${rating} out of 5`
}

*/
