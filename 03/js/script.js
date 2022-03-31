let arrayAnimali = ['🐡', '🐙', '🦈', '🐠', '🐚', '🐳', '🌊', '🐬', '🌞', '🦑', '⛵', '🦐', '🐡', '🐙', '🦈', '🐠', '🐚', '🐳', '🌊', '🐬', '🌞', '🦑', '🦐', '⛵'];
//https://html-css-js.com/html/character-codes/

document.body.onload = startGame();
 
// VARIABILI GLOBALI

var interval;
var iconsFind = document.getElementsByClassName("find");
var modal = document.getElementById('modal');
var timer = document.querySelector(".timer");
let arrayComparison = [];

//FUNZIONE CHE MESCOLA IN MANIERA CASUALE ELEMENTI ARRAY 
function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue;
    }
    return a;
}

//funzione che rimuove la classe active e chiama la funzione startGame()
function playAgain() {
    modal.classList.remove("active");
    startGame();
}


//La funzione startGame pulisce il timer, dichiara un array vuoto, mescola casualmente l'array degli animali;
// (var arrayShuffle = shuffle(arrayAnimali);), aggancia il contenitore con id griglia, pulisce tutti gli elementi che eventualmente contiene, poi fa ciclo per creare i 24 div child -> aggiunge la class e l'elemento dell'array in base all'indice progressivo
function startGame() {
    clearInterval(interval);
    arrayConfronto = [];

    var arrayShuffle = shuffle(arrayAnimali);

    var lista = document.getElementById('griglia');
    while (lista.hasChildNodes()) {
        lista.removeChild(lista.firstChild);
    }

    for (var i = 0; i < 24; i++) {
        var box = document.createElement('div');
        var element = document.createElement('div');
        element.className = 'icon';
        document.getElementById('griglia').appendChild(box).appendChild(element);
        element.innerHTML = arrayShuffle[i];
    }

// chiama la funzione timer e associa a tutti gli elementi (div) di classe icon l'evento click e le due funzioni definit sotto
    startTimer();

    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];

    for (var i = 0; i < icons.length; i++) {
        icons[i].addEventListener("click", displayIcon);
        icons[i].addEventListener("click", openModal);
    }
}

function displayIcon() {
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon]; //è un operatore che serve per passare un array come argomento
  
    this.classList.toggle("show");  //mette/toglie la classe show
    arrayComparison.push(this);//aggiunge l'oggetto su cui ha cliccato all'array del confronto

    var len = arrayComparison.length;
    //se nel confronto ci sono due elementi
    if (len === 2) {
        //se sono uguali aggiunge la classe find
        if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML) {
            arrayComparison[0].classList.add("find", "disabled");
            arrayComparison[1].classList.add("find", "disabled");
            arrayComparison = [];
        } else {
            //altrimenti (ha sbagliato) aggiunge solo la classe disabled
            icons.forEach(function(item) {
                item.classList.add('disabled');
            });
              // con il timeout rimuove  la classe show per nasconderli
            setTimeout(function() {
                arrayComparison[0].classList.remove("show");
                arrayComparison[1].classList.remove("show");
                icons.forEach(function(item) {
                    item.classList.remove('disabled');
                    for (var i = 0; i < iconsFind.length; i++) {
                        iconsFind[i].classList.add("disabled");
                    }
                });
                arrayComparison = [];
            }, 700);
        }
    }
}

//funzione che viene mostrata alla fine quando sono tutte le risposte esatte
function openModal() {
    if (iconsFind.length == 24) {
        clearInterval(interval);
        modal.classList.add("active");
        document.getElementById("tempoTrascorso").innerHTML = timer.innerHTML;
        closeModal();
    }
}

//funzione che nasconde la modale alla fine e riavvia il gioco

function closeModal() {
    closeicon.addEventListener("click", function (e) {
        modal.classList.remove("active");
        startGame();
    });
}
//funzione che calcola il tempo e aggiorna il contenitore sotto
function startTimer() {

    var s = 0; var m = 0; var h = 0;

    interval = setInterval(function () {
        timer.innerHTML = 'Tempo: ' + m + " min " + s + " sec";
        s++;
        if (s == 60) {
            m++;
            s = 0;
        }
        if (m == 60) {
            h++;
            m = 0;
        }
    }, 1000);
}