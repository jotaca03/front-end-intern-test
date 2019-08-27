
function enviar(){

  event.preventDefault();

  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');

  var nameValue = nameInput.value;
  var emailValue = emailInput.value;
  var messageValue = messageInput.value;

  if(nameValue.length >= 3){
    var nameMsg = "<span class='msgSucess'>Nome enviado com sucesso</span>"; 
  }else{
    var nameMsg = "<span class='msgError'>Nome Inválido</span>";
  }
  if(emailValue.length >= 5 && emailValue.includes('@') && emailValue.includes('.')){
    var msgEmail = "<span class='msgSucess'>E-mail enviado com sucesso</span>";
  }else{
    var msgEmail = "<span class='msgError'>E-mail inválido</span>";
  }
  if(messageValue.length >= 20){
    var msgMessage = "<span class='msgSucess'>Menssagem enviada com sucesso</span>";
  }else{
    var msgMessage = "<span class='msgError'>Menssagem muito curta</span>";
  }
  
  document.getElementById("nameMsg").innerHTML = nameMsg;
  document.getElementById("emailMsg").innerHTML = msgEmail;
  document.getElementById("mMsg").innerHTML = msgMessage;

}

