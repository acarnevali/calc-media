

function media(nota1, nota2, nota3, nota4) {
    const soma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)
    const media = soma / 4
    return media

}

function calc() {
    let notaDoPrimeiroBimestre = document.getElementById('nota1').value
    let notaDoSegundoBimestre = document.getElementById('nota2').value
    let notaDoTerceiroBimestre = document.getElementById('nota3').value
    let notaDoQuartoBimestre = document.getElementById('nota4').value
    
    let notaFinal = media(notaDoPrimeiroBimestre , notaDoSegundoBimestre, notaDoTerceiroBimestre , notaDoQuartoBimestre) 
    let notaFixada = notaFinal.toFixed(1)

    document.getElementById('notaFinal').value = notaFixada

    
    if(notaFinal >= 7){
        alert('PARABÉNS Aprovado')
    } else { 
        alert('Reprovado')
    }
    
}


