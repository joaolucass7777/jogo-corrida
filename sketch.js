function setup() {
  createCanvas(400, 400);
}  
  let xJogador1= 0;
  let xJogador2= 0;
  let xJogador3=0;


function draw() {
  ativajogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificarVencedor();
  fill("blue");
}
function keyReleased() {
  if (key == "a"){
    xJogador1 += random(40);
}
  if(key == "s"){
    xJogador2 += random(40);
  }
  if (key == "d"){
    xJogador3 += random(40);
    }
  }
function ativajogo(){
  if(focused == true) {
    background('green');
  }else{
    background ('rgb(230,24,60)');
}
}
function desenhaJogadores() {
  textSize(38);
  text("🤐",xJogador1,100);
  text("🥲",xJogador2,200);
  text("😻",xJogador3,300);
  
}
function desenhaLinhaDeChegada(){
  fill("white")
 rect(350,0,10,400);
  fill("gray")
  rect(350,0,10,10)
  rect(350,20,10,10)
  rect(350,40,10,10)
  rect(350,60,10,10)
  rect(350,80,10,10)
  rect(350,100,10,10)
  rect(350,120,10,10)
  rect(350,140,10,10)
  rect(350,160,10,10)
  rect(350,180,10,10)
  rect(350,200,10,10)
  rect(350,220,10,10)
  rect(350,240,10,10)
  rect(350,260,10,10)
  rect(350,280,10,10)
  rect(350,300,10,10)
  rect(350,320,10,10)
  rect(350,340,10,10)
  rect(350,360,10,10)
  rect(350,380,10,10)
}
function verificarVencedor() {
  if(xJogador1 > 350){
    text("jogador 1 venceu!",50,200);
  }
  if(xJogador2 > 350) {
    text("jogador 3 venceu!",50,200);
  }
  if (xJogador3 > 350){
    text("jogador 3 venceu!",50,200);
  }  
}
