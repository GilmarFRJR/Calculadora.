const botaoNumero = document.querySelectorAll("[data-numero]")
const botaoOperador = document.querySelectorAll("[data-operador]")
const botaoLimparUm = document.querySelector("[data-limparUm]")
const botaoLimparTudo = document.querySelector("[data-limparTudo]")
const botaoFazerConta = document.querySelector("[data-fazerConta]")
const mostradorTexto = document.querySelector("[data-mostrador]")


class NumerosEresultado
{
    
     constructor (mostradorTexto){
        this.mostradorTexto = mostradorTexto 
        this.limparDados()
     }


     calculo(){
        let resultado

        const _mostradorDadoTexto = parseFloat(this.mostradorDadoTexto)
        const _mostradorDadoArmazenado = parseFloat(this.mostradorDadoArmazenado)

       
        switch (this.operacao){

         case "√":
            resultado =  Math.sqrt(_mostradorDadoArmazenado)
            break

         case "^":
            resultado = _mostradorDadoArmazenado ** _mostradorDadoTexto
            break

         case "x":
            resultado = _mostradorDadoTexto * _mostradorDadoArmazenado
            break

         case "÷":
            resultado = _mostradorDadoArmazenado / _mostradorDadoTexto
            break

         case "+":
            resultado = _mostradorDadoTexto + _mostradorDadoArmazenado
            break

         case "-":
            resultado = _mostradorDadoArmazenado - _mostradorDadoTexto
            break

        }

         if (resultado == undefined) resultado = " "
         
         this.mostradorDadoTexto = resultado
         this.operacao = undefined
         this.mostradorDadoArmazenado = " "
     }


     operacaoClicada(operacao){
        if (this.mostradorDadoTexto === " ") return
        if (this.mostradorDadoArmazenado !== " ") {
         this.calculo()
        }

        this.operacao = operacao

        this.mostradorDadoArmazenado = this.mostradorDadoTexto
        
        this.mostradorDadoTexto = " "
        mostradorTexto.innerText = 0
     }

     numeroNoMostrador(numero){
        if (this.mostradorDadoTexto.includes(".") && numero == ".") return
        if (numero == 0 && mostradorTexto.innerText == 0) numero = null
        if (numero == "." && mostradorTexto.innerText == 0) numero = "0."

        this.mostradorDadoTexto = `${this.mostradorDadoTexto}${numero.toString()}`
     }    

     limparDados(){
        this.mostradorDadoTexto = " "
        this.mostradorDadoArmazenado = " "
        this.operacao = undefined
     }


     deletarUmNumero(){ 
        this.mostradorDadoTexto = this.mostradorDadoTexto.toString().slice(0, -1)
     }



     mudarNumeros(){
        this.mostradorTexto.innerText = this.mostradorDadoTexto
     }

   
     
}

 const clickBotoes = new NumerosEresultado(mostradorTexto)


     for (const numeroDoBotao of botaoNumero){
          numeroDoBotao.addEventListener("click", () => {
          clickBotoes.numeroNoMostrador(numeroDoBotao.innerText)
          clickBotoes.mudarNumeros()
          })
     }


     for (const operadorDoBotao of botaoOperador){
         operadorDoBotao.addEventListener("click", () => {
         clickBotoes.operacaoClicada(operadorDoBotao.innerText)
         clickBotoes.mudarNumeros      
      })
         
 }



     botaoLimparTudo.addEventListener("click", () => {
       clickBotoes.limparDados()
       clickBotoes.mudarNumeros()
       mostradorTexto.innerText = 0
 })


     botaoLimparUm.addEventListener("click", () =>{
       clickBotoes.deletarUmNumero()
       clickBotoes.mudarNumeros()
     })


    botaoFazerConta.addEventListener("click", () =>{      
      clickBotoes.calculo()
      clickBotoes.mudarNumeros()
 })

  
   



