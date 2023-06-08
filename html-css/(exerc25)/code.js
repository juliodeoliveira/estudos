function calculate() {
   var number_1 = document.querySelector("input#number1")
   var number_2 = document.querySelector("input#number2")

   var soma = Number(number_1.value) + Number(number_2.value)

   var answer = document.querySelector("output")

   answer.innerText = `${soma}`
}