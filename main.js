let liczba;
let liczba2;
let p_wynik = document.getElementById("p_wynik");

function kalkulator() {
    liczba = prompt("Wpisz pierwszą liczbę ");
    liczba2 = prompt("Wpisz drugą liczbę ");
    if (liczba != null && liczba2 !=null ) {
        document.getElementById('p_1').innerHTML =
        "Liczba 1 to " + liczba ; 
        document.getElementById('p_2').innerHTML =
        "Liczba 2 to " + liczba2 ;       
    }
}
function dodawanie(){
    p_wynik.innerHTML = +liczba + +liczba2;
}
function odejmowanie(){
    p_wynik.innerHTML = +liczba - +liczba2;
}
function mnozenie(){
    p_wynik.innerHTML = +liczba * +liczba2;
}
