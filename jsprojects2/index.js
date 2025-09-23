function entermarks(){
    const marks = document.getElementById("marks").value;
    const result = document.getElementById("demo");

    if (marks === "") {
        result.innerHTML  = "please enter the marks";
        result.style.color = "orange"
        return
    }
   const numericnumber = Number(marks);

   if(numericnumber < 50){
    result.innerHTML =  `Marks: ${numericnumber} - fail`;
    result.style.color = "orange"
   }else{
    result.innerHTML = `marks: ${numericnumber}' - Pass`;
   }
}

