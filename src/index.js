const messages = [
    "Erik",
    "Isai",
    "Mary",
    "Juan",
    "Sofia",
    "Cesar",
    "Fernanda",
    "Maggie"
]

const randomMsg = () =>{
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = {randomMsg}

