let numerosSorteados = [];
let numeroLimite = 20
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
exibirTextoinicial();


function exibirTextoNatTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirTextoinicial(){
    exibirTextoNatTela('h1', 'Jogo do número secreto');
    exibirTextoNatTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    if (chute == numeroSecreto) {
        exibirTextoNatTela('h1', 'Acertou!!');
        exibirTextoNatTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}` );
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if(chute > numeroSecreto){
            exibirTextoNatTela('p', 'Número secreto é menor');
        }
        else{
            exibirTextoNatTela('p', 'Número secreto é maior');
        }
        tentativas++;
        limparCampo();
        
    }
    
}

function gerarNumeroAleatorio() {
   let numeroSorteado = parseInt(Math.random() * 10 + 1); 
   let tamanhoListaNumerosSorteados = numerosSorteados.length;
   
   if(tamanhoListaNumerosSorteados == numeroLimite) {
    numerosSorteados = [];
   }
   
   if (numerosSorteados.includes(numeroSorteado)){
        return gerarNumeroAleatorio();
        
   }
   else {
    numerosSorteados.push(numeroSorteado);
    return numeroSorteado;
   } 
}
function limparCampo(){
    let chute = document.querySelector('input');
    chute.value = null;
}
function novoJogo(){
    limparCampo();
    exibirTextoinicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
}

