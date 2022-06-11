var elForm = document.querySelector(".js-form")
var elInput = document.querySelector(".js-input")
var elText = document.querySelector(".js-text")


elForm.addEventListener("submit", function(e) {
  e.preventDefault();

  var a = elInput.value;

  if (a == "Ali") {
    elText.textContent = `Salom ${a} og'a`;
  } else if (a == "Ahmad") {
    elText.textContent = "Ko'rinmayapsan dustim, nima qiliyapsan?"
  } else  {
    elText.textContent = "Uzur tanimadim"
  }
  console.log(a);
})