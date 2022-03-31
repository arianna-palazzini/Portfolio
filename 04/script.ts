//VARIABILI GLOBALI 
let player1 : number = Number ($('#player1').val());
let player2 : number = Number ($('#player2').val());
let btnGioca = $('#btnGo');
let btnGiocaAncora = $('#btnAgain');
let paragrafo1 = $('#par1');
let paragrafo2 = $('#par2');
let paragrafo3 = $('#par3');
let paragrafo4 = $('#par4');

//EVENT HANDLER CLICK SU GIOCA
btnGioca.on('click', function (){

let player1 : number = Number ($('#player1').val()); //ripeto variabili all'interno
let player2 : number = Number ($('#player2').val()); //ripeto variabili all'interno

//ESTRAGGO NUMERO CASUALE
let numRandom : number = Math.round((Math.random() * (100 - 1)) + 1);
paragrafo1.text('Numero estratto: ' + numRandom);

if (numRandom == player1){  //se giocatore 1 azzecca
    paragrafo2.text('Ha vinto il giocatore 1!'); 
    paragrafo3.text('');
} else if (numRandom == player2){  //se giocatore 2 azzecca
    paragrafo2.text('Ha vinto il giocatore 2!');
    paragrafo3.text('');
} else {  //se nessun giocatore azzecca
    paragrafo2.text('Nessun giocatore ha azzeccato! Male male.. ');
}

 
if (player1 === player2){ //se i giocatori scommettono sullo stesso numero
    paragrafo3.text('Furbetti! Non è possibile scommettere sullo stesso numero.');
    paragrafo1.text('');
    paragrafo2.text('');
}


if ((player1 - numRandom) > (player2 - numRandom)){ 
    paragrafo3.text('Il giocatore 1 si è avvicinato di più');
} else if ((player2 - numRandom) > (player1 - numRandom)){
    paragrafo3.text('Il giocatore 2 si è avvicinato di più');
}
return;

});


//EVENT HANDLER AZZERA TUTTO E RICOMINCIA
btnGiocaAncora.on('click', function(){
    $("*p").text('');
    $("*input").val([]);
})