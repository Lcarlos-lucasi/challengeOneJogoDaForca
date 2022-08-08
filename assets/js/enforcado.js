
var y = 80;
var x = 300;
var y2= 110;
var x2= 300;

var canvas_boneco = document.getElementById('canvas').getContext('2d')

//desenha cabeça
function desenha_cabeca(){

    canvas_boneco.beginPath();
    canvas_boneco.fillStyle="blue";
    canvas_boneco.arc(x, y, 30, 0, 2 * Math.PI, true);
    canvas_boneco.fill();

    canvas_boneco.beginPath();    
    canvas_boneco.lineWidth = 4
    canvas_boneco.strokeStyle ="white"
    canvas_boneco.arc(x, y, 20, 0.5, (Math.PI)-0.5, false);
    canvas_boneco.stroke();

    canvas_boneco.beginPath();
    canvas_boneco.fillStyle="white"
    canvas_boneco.arc(x-10, y-10, 5, 0, 2 * Math.PI, true);
    canvas_boneco.arc(x+10, y-10, 5, 0, 2 * Math.PI, true);
    canvas_boneco.fill();

    canvas_boneco.beginPath();
    canvas_boneco.fillStyle="white";
    canvas_boneco.arc(x, y, 5, 0, 2 * Math.PI, true);
    canvas_boneco.fill();     

}

function desenha_torax(){

    canvas_boneco.beginPath();
    canvas_boneco.fillStyle="blue";
    canvas_boneco.fillRect(x2-2, y2, 4, 6);
    canvas_boneco.fillRect(x2-30, y2+6, 60, 70);
    canvas_boneco.fill();
}

function desenha_braco_dir(){
    canvas_boneco.beginPath();
    canvas_boneco.moveTo(x2-30, y2+6);
    canvas_boneco.lineWidth = 8
    canvas_boneco.strokeStyle ="blue"
    canvas_boneco.lineTo(x2-45, y2+70)
    canvas_boneco.stroke();
    canvas_boneco.closePath();

}

function desenha_braco_esq(){
    canvas_boneco.beginPath();
    canvas_boneco.moveTo(x2+30, y2+6);
    canvas_boneco.lineWidth = 8
    canvas_boneco.strokeStyle ="blue"
    canvas_boneco.lineTo(x2+45, y2+70)
    canvas_boneco.stroke();
    canvas_boneco.closePath();

}

function desenha_perna_dir(){
    canvas_boneco.beginPath();
    canvas_boneco.moveTo(x2-22, y2+70);
    canvas_boneco.lineWidth = 16
    canvas_boneco.strokeStyle ="blue"
    canvas_boneco.lineTo(x2-35, y2+140)
    canvas_boneco.stroke();
    canvas_boneco.closePath();

}

function desenha_perna_esq(){
    canvas_boneco.beginPath();
    canvas_boneco.moveTo(x2+22, y2+70);
    canvas_boneco.lineWidth = 16
    canvas_boneco.strokeStyle ="blue"
    canvas_boneco.lineTo(x2+35, y2+140)
    canvas_boneco.stroke();
    canvas_boneco.closePath();

}

function perdeuCanvasBoneco(){
    for(i=0;i=220;i++){
        y=y+1;
        y2=y2+1
        canvas_boneco.clearRect(0, 0, 600, 300);
        desenha_cabeca()
        desenha_torax()
        desenha_braco_dir()
        desenha_braco_esq()
        desenha_perna_dir()
        desenha_perna_esq()
    }
}
