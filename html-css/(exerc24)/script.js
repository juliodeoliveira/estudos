var count = 1
function clicked() {
   let outer = document.getElementById("saida")
   
   if (count == 1) {
      outer.innerHTML += `<p>Você clicou ${count} vez!</p>`
      count += 1
      console.log("first cond.:", count)

   } else {
      outer.innerHTML += `<p>Você clicou ${count} vezes!</p>`
      count += 1
      console.log("second cond.:", count)
   }
 
   
}