const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.querySelector("#consent-form");
const modalText = document.querySelector("#modal-text");



setTimeout(function () {
  modal.style.display = "inline";
}, 1500);


modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

consentForm.addEventListener("submit", function(event){
  event.preventDefault();
  modalText.innerHTML = `
  <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div> 
  `;
setTimeout(function(){

const uploadText = document.getElementById("uploadText");
uploadText.innerHTML = `Making the sale...`;
}, 1500);

})


