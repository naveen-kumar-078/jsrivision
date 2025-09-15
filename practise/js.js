let text = " ";

tabno = 5;
tablen = 10;

let i = 1

while ( i<tablen) {
    text+= i + " x "+ tabno +" = "+(i*tabno)+"<br>"
    i++ 
}


document.getElementById("demo").innerHTML = text