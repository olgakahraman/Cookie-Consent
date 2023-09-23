const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.querySelector("#consent-form");
const modalText = document.querySelector("#modal-text");
const modalInner = document.querySelector("#modal-inner");


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
    <img src="images/loading.svg" class="loading" id="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div> 
  `;
setTimeout(function(){
document.getElementById("uploadText").innerText = `Making the sale...`;
}, 1500);


setTimeout(function(){

  consentForm.style.display="none";
  modalInner.innerHTML = `
   <h2>Thanks you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    
  `;
},3000);

})


