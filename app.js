const userName = prompt('Come ti chiami?')
console.log(userName)

const userSurName = prompt('Qualle é il tuo cognome?')
console.log(userSurName)

const Color = prompt('Il tuo colore preferito?')
console.log(Color)

const HTML = document.getElementById('container1')
HTML.innerHTML = `Ciao${userName}${userSurName} il tuo colore preferito é ${Color}`
console.log(HTML)

const PasswordUser = document.getElementById('password')
console.log(PasswordUser)
PasswordUser.innerHTML = `La tua password provvisoria è: ${userName}${userSurName}${Color}1`;