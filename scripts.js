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
 function changeLogin()
   {
      var text, text2;
	  text=document.getElementById("login").value;
	  if(text!=""){
	  text2="Welcome to SweetChat, "+text+"!!";
	  
	  document.getElementById("loginChanged").innerHTML=text2;
	  }
   }
  function addRow() {
          
    var myName = document.getElementById("mail");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= myName.value;
    
 
}
 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}
 
function load() {
    
    console.log("Page load finished");
 
}