function checkvoter(){
     let name = document.getElementById("name").value;
     let age  = document.getElementById("age").value;
     let result  = document.getElementById("result");

     age =Number(age)

     if (age > 18) {
        result.innerHTML = "you are eligible"
        result.style.color = "green" 
     } else if( age >=18){
        result.innerHTML = "you need to wait";
     }else{
        result.innerHTML = "you are not eligible to vote"
     }
}