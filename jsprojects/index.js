function checkvoter(){
     let name = document.getElementById("name").value;
     let age  = document.getElementById("age").value;
     let result  = document.getElementById("result");

  

if (name === "") {
   result.innerHTML=  " ❗ please enter the name";
   result.style.color = "orange"
   result.style.fontSize = " 30px"
   result.style.textAlign = "center"
}else if(age === ""){
   result.innerHTML = " ❗ please enter the age";
   result.style.color = "black"
   result.style.fontSize = " 30px"
   result.style.textAlign = "center"
   result.style.fontStyle = "bold"
}
  else{
      age = Number(age);

  if( age >18 ){
     result.innerHTML = " ✅ you can eligible to apply "
     result.style.color = "green";
   result.style.fontSize = " 30px";
   result.style.textAlign = "center";
   result.style.backgroundColor = "white"
   
  }else{
   result.innerHTML = " ❌ you are not eligible to apply";
    result.style.color = "red";
   result.style.fontSize = " 30px";
   result.style.textAlign = "center";
  }
}
}