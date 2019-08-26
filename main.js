function submit() {
  var nameInput = document.getElementById('name')
  var emailInput = document.getElementById('email')
  var messageInput = document.getElementById('message')
  
  var nameValue = nameInput.nodeValue()

  console.log(nameValue.lenght > 3)
  
}