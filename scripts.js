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

  function addRow() {
          
//   var myMail = document.getElementById("mail");
 //   var table = document.getElementById("myTableData");
 
 //   var rowCount = table.rows.length;
 //   var row = table.insertRow(rowCount);
    
 //   row.insertCell(0).innerHTML= '<p align="right"><input class="button5" type="submit" value ="" onClick="Javacsript:deleteRow(this)" title="Удалить сообщение" style="background: url(http://www.defaulticon.com/sites/default/files/styles/icon-front-page-32x32-preview/public/field/image/eraser.png?itok=ohy0hMWI) center center no-repeat;"></input><input class="button5" type="submit" title="Редактировать выделенное сообщение" value="" style="background: url(http://www.defaulticon.com/sites/default/files/styles/icon-front-page-32x32-preview/public/field/image/edit.png?itok=nb2eY85A) center center no-repeat;"></input></p>';
	
 //   row.insertCell(1).innerHTML= myMail.value;
    
 var myMail = document.getElementById("mail");
 var tableContent="<tr>";
 tableContent+="<td width=60%>"+'<p align="right"><input class="button5" type="submit" value ="" onClick="Javacsript:deleteRow(this)" title="Удалить сообщение" style="background: url(http://www.defaulticon.com/sites/default/files/styles/icon-front-page-32x32-preview/public/field/image/eraser.png?itok=ohy0hMWI) center center no-repeat;"></input><input class="button5" type="submit" title="Редактировать выделенное сообщение" value="" style="background: url(http://www.defaulticon.com/sites/default/files/styles/icon-front-page-32x32-preview/public/field/image/edit.png?itok=nb2eY85A) center center no-repeat;"></input></p>'+"</td>";
 tableContent+="<td width=40%>"+myMail.value+"</td>";
 myTableData.innerHTML+=tableContent;
}
 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}
 
function load() {
    
    console.log("Page load finished");
 
}