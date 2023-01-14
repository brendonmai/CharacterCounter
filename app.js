const textArea = document.getElementById("textarea");
const totalConunter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");

textArea.addEventListener("keyup", ()=>{
    updateCounter();
});

updateCounter();

function updateCounter() {
   totalConunter.innerText = textArea.value.length;
   remainingCounter.innerText = textArea.getAttribute("maxLength") - textArea.value.length;
}
