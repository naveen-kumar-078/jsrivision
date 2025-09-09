/*let text  = " ";

for(let i  = 0 ; i<10 ; i++){
    if(i===3){continue ;}
    text+= "the number is "+i+"<br>"         

}




document.getElementById("demo").innerHTML = text*/



let text  = " ";

loop1: for ( let i = 0; i <= 5 ; i++){
    loop2: for ( let i = 0 ; i < 5 ; i++){

        if(i===3){break loop2}
        text+= "the number is"+i+"<br>";


    }
}

document.getElementById("demo").innerHTML = text