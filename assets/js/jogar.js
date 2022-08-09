

var palavras = [['ALURA','Curso online'], ['ORACLE', 'Empresa de  tecnologia'], ['HTML', 'Web'],
 ['Pardal', 'Animal'], ['AZUL', 'Cor'], ['RECIFE', 'Cidade'], ['GATO', 'Animal'], ['ELEFANTE', 'Animal'],
  ['CAVALO','ANIMAL'],['RADIO', 'APARELHO ELETRÔNICO'], ['OLINDA', 'CIDADE'], ['COELHO','ANIMAL'],
   ['MARRON','COR'],['JAVASCRIPT','WEB'],['COMPUTADOR','APARELHO ELETRÔNICO'],
   ['FUSCA','VEICULO'], ['CARAMBOLA','FRUTA']]

var tabuleiro = document.getElementById('tabuleiro__canvas').getContext('2d');
var letras= 0
var erros=0;
var palavraSecreta="";
var letrasErradas =[];
var tecladoHabilitado = false;
var dica ="";


const novoJogo = document.querySelector("#to-game")


function iniciarJogo(){

    letras = 0
    letrasErradas =[]
    canvas_boneco.clearRect(0, 0, 600, 300)
    tecladoHabilitado = true

    palavraSecreta=escolherPalavraSecreta()
    
    escreverTracinhos()
    
    
}

function escolherPalavraSecreta(){
    var i = Math.floor(Math.random()*palavras.length);
    var palavra = palavras[i];
   
    palavraSecreta = palavra[0];
    
    
    console.log(palavra[1]);
    var dicatexto = document.getElementById("dica__texto")
    dicatexto.innerHTML = palavra[1]

    return palavraSecreta;

}

function escreverTracinhos(){
    
    tabuleiro.clearRect(0, 0, 375, 80)
    tabuleiro.lineWidth =4
    tabuleiro.lineCap="round"
    tabuleiro.lineJoin="round"
    tabuleiro.strokeStyle ="yellow"
    tabuleiro.beginPath()
      
    
    for(let i=0;i<(palavraSecreta.length);i++){
        
        tabuleiro.moveTo(10+(36*i),40)
        tabuleiro.lineTo(24+(10+(36*i)),40)
        
    }

    tabuleiro.stroke()
    tabuleiro.closePath()
    
}

function escreverLetraCorreta(index){
    tabuleiro.font ="25px arial bold"
    tabuleiro.fillStyle ="white"
    tabuleiro.fillText(palavraSecreta[index],14+(38*index), 30)
    
}

function escreverLetraIncorreta(letra, erros){
    tabuleiro.font ="bold 40px"
    tabuleiro.fillStyle ="white"
    tabuleiro.fillText(letra, 10+(20*erros),75)

}

function ganhou(){

    tabuleiro.clearRect(0, 0, 375, 80)
    tabuleiro.font ="40px bold"
    tabuleiro.fillStyle ="white"
    tabuleiro.fillText("VOCÊ GANHOU",35, 50)
    tabuleiro.font ="40px bold"
    tabuleiro.fillStyle ="red"
    tabuleiro.fillText("VOCÊ GANHOU",37, 48)

}

function perdeu(){

    tabuleiro.clearRect(0, 0, 375, 80)
    tabuleiro.font ="40px bold"
    tabuleiro.fillStyle ="white"
    tabuleiro.fillText("ENFORCADO",32, 50)
    tabuleiro.font ="40px bold"
    tabuleiro.fillStyle ="red"
    tabuleiro.fillText("ENFORCADO",34, 48)
    

}




function letraClicada(letra){
    console.log("clicado a letra "+letra)

    if(tecladoHabilitado == true){

        if(palavraSecreta.includes(letra)){

           
            
            for(let i=0; i<palavraSecreta.length;i++){
    
                if(palavraSecreta[i]=== letra){
                    escreverLetraCorreta(i)
                    letras++
                }
    
                if(letras==palavraSecreta.length){
                    ganhou()
                    tecladoHabilitado = false
                    erros=0
                }
    
            }
        }else{
            
            for(i=0;i<letrasErradas.length;i++){
                
                if(letrasErradas[i]==letra){
                   return 
                }
    
    
            }
            letrasErradas.push(letra)
            console.log(letrasErradas)
            escreverLetraIncorreta(letra, erros)
            erros++

            if(erros==1){
                desenha_cabeca();
            }

            if(erros==2){
                desenha_torax();
            }

            if(erros==3){
                desenha_braco_dir();
            }

            if(erros==4){
                desenha_braco_esq();
            }

            if(erros==5){
                desenha_perna_dir();
            }

                        
            if(erros==6){
                desenha_perna_esq();
                perdeu();
                //perdeuCanvasBoneco();
                tecladoHabilitado = false;
                erros=0;
                return
    
            }
    
    
        }
   
    }


}


/*document.onkeydown = (e) => {
    var letra=e.key.toUpperCase()
    if(!verificarLetrasCorreta(e.key)){
        if(palavraSecreta.includes(letra)){
            adicionarLetraCorreta(palavraSecreta.indexOf(letra))
            for(let i=0; i<palavraSecreta.length;i++){

                if(palavraSecreta[i]=== letra){
                    escreverLetraCorreta(i)
                }

            }
        }
    }
    else{
        if(verificarLetraClicada)

    }
    
}*/


