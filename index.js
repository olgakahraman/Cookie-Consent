const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.querySelector("#consent-form");
const modalText = document.querySelector("#modal-text");
const modalInner = document.querySelector("#modal-inner");
const declineBtn = document.querySelector("#decline-btn");
const modalChoiceBtns = document.querySelector("#modal-choice-btns");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

declineBtn.addEventListener("mouseenter", function () {
  modalChoiceBtns.classList.toggle("modal-choice-btns-reverse");
});

consentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const consentFormData = new FormData(consentForm);
  const fullName = consentFormData.get("fullName");

  modalText.innerHTML = `
  <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading" id="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div> 
  `;
  setTimeout(function () {
    document.getElementById("uploadText").innerText = `Making the sale...`;
  }, 1500);

  setTimeout(function () {
    modalCloseBtn.disabled = false;
    modalInner.innerHTML = `
   <h2>Thanks  <span class="modal-display-name">${fullName}</span>,you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    
  `;
  }, 3000);
});
