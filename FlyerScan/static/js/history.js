const form = document.querySelector(".search-box");
const input = form.querySelector('input[type="text"]');
const searchBtn = form.querySelector('button[type="submit"]');
const micBtn = form.querySelector(".microphone-btn");

// get SpeechRecognition object for web speech api
console.log("SpeechRecognition" in window);

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

micBtn.addEventListener("click", () => {
  recognition.start();
});

recognition.addEventListener("result", (e) => {
  const transcript = e.results[0][0].transcript;
  input.value = transcript;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchFunction(input.value);
});

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchFunction(input.value);
  }
});

function searchFunction(searchTerm) {
  // your search function here
  console.log(`Searching for ${searchTerm}...`);
}

/* function that grabs scan id and reroutes to edit page with clicked flyer */
var editLinks = document.querySelectorAll('a[data-url]')
for (var i =0; i < editLinks.length; i++ ){
  var editLink = editLinks[i];
  editLink.addEventListener('click', function(event){
    event.preventDefault();
    var flyerURL = this.getAttribute('data-url');
    window.location.href = flyerURL;
  });
}
