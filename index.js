const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

const consentForm = document.querySelector("#consent-form");

consentForm.addEventListener("submit", function(event){
  event.preventDefault();
  console.log("form submitted");
})
