function run(){

}
function changeLogin()
 {
      var text, text2;
	  text=document.getElementById("login").value;
	  if(text!=""){
	  text2="Welcome to SweetChat, "+text+"!";
	  
	  document.getElementById("loginChanged").innerHTML=text2;
	  }
 }