let nome = "Maria"
let idade = 20

let participantes = ["Emily", "Jéssica", "Thiago", "Luana", "Maria" , "Carlos" , "Adriana" , "Lucas"]

if (idade >= 18 && participantes.length <= 100) {
    console.log("Permitido cadastro do participante no evento!")
    console.log(`Esses são os participantes cadastrados: ${participantes.sort()}.`)
}

if (idade >=18 && participantes.length > 100){
    console.log("Cadastro não permitido. Excedido limite de vagas.")
}
else {
    console.log("Permitido cadastro do participante no evento.")
}