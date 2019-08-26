console.log('it works')

$(document).ready(function () {
  $('.submit').click(function (event) {
    event.preventDefault()
    console.log('clicked botton')

    var name = $('#name').val()
    var email = $('#email').val()
    var message = $('#message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if(name.lenght > 2) {
      statusElm.append('<div>Name is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Name is not valid</div>')
    }
    if(email.lenght > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>Email is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')
    }
    if(message.lenght > 20) {
       statusElm.append('<div>Message is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Message is not valid</div>')
    }
  })
})