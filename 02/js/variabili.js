
function scriviDato(dato) {
    document.getElementById('camponumeri').value += dato;
}

function cancella() { 
    document.getElementById('camponumeri').value=""; 
   }

function operazione() { 
    document.getElementById('camponumeri').value=eval(document.getElementById('camponumeri').value); 
    }